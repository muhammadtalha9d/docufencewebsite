import Image from "next/image";

export function PostThumb({
  src,
  aspect = "aspect-video",
  sizes = "(max-width: 768px) 100vw, 400px",
}: {
  src: string;
  aspect?: string;
  sizes?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-[#EEF2F4] ${aspect}`}>
      <div className="absolute inset-0 flex items-center justify-center gap-2.5">
        <span className="h-2.5 w-2.5 bg-[#C3D1D8]" />
        <span className="text-base tracking-[-0.01em] text-[#A6B7C0]">DocuFence</span>
      </div>
      <Image
        src={src}
        alt=""
        fill
        sizes={sizes}
        className="relative object-cover"
      />
    </div>
  );
}
