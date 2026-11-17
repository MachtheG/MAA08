import Image from "next/image";

/**
 * A photographic plate: a duotone print set square into the page, with its
 * caption beneath. Every photograph on the site is a plate or a land band;
 * none floats with a shadow or a rounded card frame.
 */
export function Plate({
  src,
  alt,
  caption,
  ratio = "4/5",
  sizes = "(max-width: 768px) 92vw, 40vw",
  preload = false,
  eager = false,
  className = "",
  imageClassName = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  ratio?: string;
  sizes?: string;
  /** Only the first viewport's plate preloads. */
  preload?: boolean;
  /** Above the fold but not the LCP: load now without a preload hint. */
  eager?: boolean;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <figure className={className}>
      <div className="relative overflow-hidden bg-page-deep" style={{ aspectRatio: ratio }}>
        <Image
          src={src}
          alt={alt}
          fill
          preload={preload}
          loading={eager && !preload ? "eager" : undefined}
          quality={72}
          sizes={sizes}
          className={`object-cover ${imageClassName}`}
        />
      </div>
      {caption && (
        <figcaption className="mt-3 max-w-measure text-small text-text-muted">{caption}</figcaption>
      )}
    </figure>
  );
}
