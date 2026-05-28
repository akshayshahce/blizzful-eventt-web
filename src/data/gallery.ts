// Gallery data — sourced from a build-time snapshot of the configured
// Google Drive folder. See scripts/sync-gallery.mjs for how the snapshot
// is produced and docs/GALLERY_SYNC.md for the setup workflow.

import snapshot from "./gallery-snapshot.json";

export type DriveImage = {
  /** Drive file ID — stable until the file is replaced (delete + reupload). */
  id: string;
  /** Original filename, used as the visible title. */
  name: string;
  mimeType: string;
  modifiedTime: string | null;
  width: number | null;
  height: number | null;
  /** Grid thumbnail URL (≈1200px). */
  thumbnailSrc: string;
  /** Larger preview used by the lightbox (≈2400px). */
  fullSrc: string;
};

export type DriveCategory = {
  /** Folder ID. */
  id: string;
  /** Drive folder name — used as the visible category label. */
  name: string;
  images: DriveImage[];
};

export type GallerySnapshot = {
  generatedAt: string;
  rootFolderId: string;
  categories: DriveCategory[];
};

export const gallerySnapshot = snapshot as GallerySnapshot;

/** Categories that have at least one image, sorted by folder name. */
export const galleryCategories: DriveCategory[] = (gallerySnapshot.categories ?? [])
  .filter((cat) => cat.images.length > 0)
  .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));

/** Flat list of every image with its category attached — drives the grid. */
export type GalleryImage = DriveImage & { category: string };

export const galleryImages: GalleryImage[] = galleryCategories.flatMap((cat) =>
  cat.images.map((img) => ({ ...img, category: cat.name })),
);

export const hasGalleryData = galleryImages.length > 0;

/** Strip extension and tidy underscores/hyphens into a readable title. */
export function formatImageTitle(filename: string): string {
  const withoutExt = filename.replace(/\.[a-z0-9]+$/i, "");
  return withoutExt.replace(/[_-]+/g, " ").trim() || filename;
}
