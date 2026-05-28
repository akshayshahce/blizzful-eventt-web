"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { cn } from "@/lib/utils";

export type Carousel3DItem = {
  /** Stable key for React */
  id: string | number;
  /** Anything you want to render inside one card */
  content: React.ReactNode;
};

type Carousel3DProps = {
  items: Carousel3DItem[];
  /** Card width in px. Default 280. */
  cardWidth?: number;
  /** Card height in px. Default 380. */
  cardHeight?: number;
  /** Distance from centre to the card face in px. Default 360. */
  radius?: number;
  /**
   * Override the per-card angle (degrees). When undefined we divide 360° by
   * the item count (a full ring). Set a smaller value (e.g. 22) to lay cards
   * out as a tighter coverflow arc so more cards face the viewer at once.
   */
  cardAngleDeg?: number;
  /** Show numeric position pill between the prev/next arrows. */
  showCounter?: boolean;
  /** Hide the prev/next nav row entirely. */
  hideControls?: boolean;
  /** Auto-advance the carousel forward at the given interval (ms). 0 disables. */
  autoplayMs?: number;
  /** Enable click-and-drag (or touch-drag) to rotate. Shows a grab cursor on hover. */
  draggable?: boolean;
  /** Optional class on the outer wrapper. */
  className?: string;
  /** Optional ARIA label for the carousel region. */
  label?: string;
};

/**
 * Carousel3D
 *
 * • Outer scene has `perspective: 1200px` so child transforms render with depth.
 * • Inner stage uses `transform-style: preserve-3d` and rotates on Y to bring
 *   the active card forward.
 * • Each card is absolutely positioned at the centre, then pushed onto the
 *   perimeter of a virtual circle via `rotateY(angle) translateZ(radius)`.
 * • Cards in the background fade in opacity so the front card is the
 *   visual focus.
 * • Stage transition: `transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)` —
 *   premium / mechanical easing.
 * • Keyboard ←/→ navigates while focused; clicking a side card brings it
 *   to the front; mouse-wheel / swipe support left out by design for
 *   precise scroll-page behaviour.
 */
export function Carousel3D({
  items,
  cardWidth = 280,
  cardHeight = 380,
  radius = 360,
  cardAngleDeg,
  showCounter = true,
  hideControls = false,
  autoplayMs = 0,
  draggable = false,
  className,
  label = "3D carousel",
}: Carousel3DProps) {
  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const total = items.length;
  const anglePerCard =
    cardAngleDeg ?? (total > 0 ? 360 / total : 0);
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const prevIndexRef = useRef(0);
  const dragStateRef = useRef<{
    startX: number;
    startIndex: number;
    distance: number;
    pointerId: number;
  } | null>(null);

  // Track previous index so we can disable the transform transition for cards
  // that wrap around the ring (e.g. offset +4 → -4). Without this they'd glide
  // through the front of the carousel on their way to the other side.
  useEffect(() => {
    prevIndexRef.current = index;
  });

  const goTo = useCallback(
    (next: number) => {
      // Allow unbounded integers — rotation keeps direction consistent.
      setIndex(next);
    },
    [],
  );

  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // Auto-rotate. Pauses on hover/drag and when tab is hidden / off-screen.
  useEffect(() => {
    if (!autoplayMs || autoplayMs <= 0) return;
    if (isHovering || isDragging) return;

    let visible = true;
    let inView = true;
    const onVisibility = () => {
      visible = !document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibility);

    let observer: IntersectionObserver | null = null;
    if (sceneRef.current && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          inView = entries[0]?.isIntersecting ?? true;
        },
        { threshold: 0.2 },
      );
      observer.observe(sceneRef.current);
    }

    const id = window.setInterval(() => {
      if (visible && inView) setIndex((i) => i + 1);
    }, autoplayMs);

    return () => {
      window.clearInterval(id);
      document.removeEventListener("visibilitychange", onVisibility);
      observer?.disconnect();
    };
  }, [autoplayMs, isHovering, isDragging]);

  // Drag-to-rotate handlers (opt-in via `draggable`).
  // Pointer events unify mouse + touch + pen. Threshold ≈ 60% of a card width
  // per index step so the stage tracks the user's pull naturally.
  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!draggable) return;
      dragStateRef.current = {
        startX: e.clientX,
        startIndex: index,
        distance: 0,
        pointerId: e.pointerId,
      };
      setIsDragging(true);
      e.currentTarget.setPointerCapture(e.pointerId);
    },
    [draggable, index],
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const state = dragStateRef.current;
      if (!draggable || !state) return;
      const dx = e.clientX - state.startX;
      state.distance = Math.max(state.distance, Math.abs(dx));
      const step = Math.max(60, cardWidth * 0.6);
      // drag right → reveal previous card (rotate stage backward)
      const delta = Math.round(-dx / step);
      setIndex(state.startIndex + delta);
    },
    [draggable, cardWidth],
  );

  const endDrag = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!draggable) return;
      const state = dragStateRef.current;
      dragStateRef.current = null;
      setIsDragging(false);
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        /* pointer was already released */
      }
      // Suppress the synthetic click that follows a drag so we don't also
      // trigger a card's bring-to-front handler.
      if (state && state.distance > 6) {
        const node = e.currentTarget;
        const suppress = (ev: MouseEvent) => {
          ev.stopPropagation();
          ev.preventDefault();
        };
        node.addEventListener("click", suppress, { capture: true, once: true });
        // Safety net — remove the listener after a tick if no click fires.
        window.setTimeout(
          () => node.removeEventListener("click", suppress, { capture: true } as EventListenerOptions),
          0,
        );
      }
    },
    [draggable],
  );

  if (total === 0) return null;

  const sceneHeight = cardHeight + 80;
  // 1-based, looped position for the counter (1 → total)
  const displayPosition = ((index % total) + total) % total + 1;

  return (
    <div
      role="region"
      aria-label={label}
      aria-roledescription="carousel"
      className={cn("w-full", className)}
    >
      {/* Scene — perspective gives depth, overflow hides cards behind */}
      <div
        ref={sceneRef}
        className={cn(
          "relative mx-auto select-none touch-pan-y",
          draggable && (isDragging ? "cursor-grabbing" : "cursor-grab"),
        )}
        style={{
          perspective: "1200px",
          height: sceneHeight,
        }}
        onPointerEnter={() => setIsHovering(true)}
        onPointerLeave={() => setIsHovering(false)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {/* Stage — preserve-3d lets children sit in 3D. In coverflow mode the
            stage itself doesn't rotate; each card repositions based on its
            signed offset from the active index. */}
        <div
          className="absolute inset-0 [transform-style:preserve-3d]"
          style={{
            transform: `translateZ(-${radius}px)`,
          }}
        >
          {items.map((item, i) => {
            // Signed shortest-path distance from active position (range
            // -total/2 .. +total/2). Cards always arrange symmetrically around
            // the active card regardless of card count or per-card angle.
            const raw = ((i - index) % total + total) % total;
            const offset = raw > total / 2 ? raw - total : raw;
            const rawPrev = ((i - prevIndexRef.current) % total + total) % total;
            const prevOffset = rawPrev > total / 2 ? rawPrev - total : rawPrev;
            // When a card wraps from one extreme of the ring to the other,
            // skip the transform transition so it doesn't slide through the
            // front of the carousel on its way across.
            const wrapped = Math.abs(offset - prevOffset) > total / 2;
            const absOffset = Math.abs(offset);
            const isActive = absOffset === 0;
            // Front card crisp, immediate neighbours bright, second-out cards
            // still clearly visible so the row reads as ~5 cards across.
            const opacity =
              absOffset === 0
                ? 1
                : absOffset === 1
                  ? 0.75
                  : absOffset === 2
                    ? 0.5
                    : 0.15;

            return (
              <button
                key={item.id}
                type="button"
                tabIndex={isActive ? 0 : -1}
                aria-hidden={!isActive}
                aria-label={isActive ? undefined : `Bring slide ${i + 1} to front`}
                onClick={() => !isActive && goTo(i)}
                className={cn(
                  "absolute left-1/2 top-1/2 block focus:outline-none",
                  draggable
                    ? "cursor-[inherit]"
                    : isActive
                      ? "cursor-default"
                      : "cursor-pointer",
                  !isActive && "hover:opacity-100 focus-visible:opacity-100",
                )}
                style={{
                  width: cardWidth,
                  height: cardHeight,
                  marginLeft: -cardWidth / 2,
                  marginTop: -cardHeight / 2,
                  transform: `rotateY(${offset * anglePerCard}deg) translateZ(${radius}px)`,
                  transition: wrapped
                    ? "opacity 0.5s ease-out"
                    : "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.5s ease-out",
                  opacity,
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  willChange: "transform, opacity",
                }}
              >
                {item.content}
              </button>
            );
          })}
        </div>
      </div>

      {/* Nav controls */}
      {hideControls ? null : (
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="group/btn flex h-11 w-11 items-center justify-center rounded-full border border-[var(--ivory)]/20 text-[var(--ivory)]/80 transition-all duration-300 hover:-translate-x-0.5 hover:border-[var(--wisteria-deep)] hover:text-[var(--wisteria)]"
        >
          <FiChevronLeft className="h-4 w-4" />
        </button>

        {showCounter ? (
          <p className="min-w-[4.5rem] text-center text-[0.66rem] uppercase tracking-[0.4em] text-[var(--ivory)]/75 tabular-nums">
            {String(displayPosition).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
        ) : null}

        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="group/btn flex h-11 w-11 items-center justify-center rounded-full border border-[var(--ivory)]/20 text-[var(--ivory)]/80 transition-all duration-300 hover:translate-x-0.5 hover:border-[var(--wisteria-deep)] hover:text-[var(--wisteria)]"
        >
          <FiChevronRight className="h-4 w-4" />
        </button>
      </div>
      )}
    </div>
  );
}
