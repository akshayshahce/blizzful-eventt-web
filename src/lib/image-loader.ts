export default function imageLoader({
  src,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (src.startsWith("http") || src.startsWith("//")) return src;
  return `${basePath}${src}`;
}
