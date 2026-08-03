import { Star, StarHalf } from "lucide-react";

export function StarRating({
  rating,
  className,
}: {
  rating: number;
  className?: string;
}) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <div className={`flex items-center gap-0.5 ${className ?? ""}`} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: full }).map((_, i) => (
        <Star key={i} className="size-4 fill-current text-amber-500" />
      ))}
      {half && <StarHalf className="size-4 fill-current text-amber-500" />}
      {Array.from({ length: 5 - full - (half ? 1 : 0) }).map((_, i) => (
        <Star key={`empty-${i}`} className="size-4 text-muted-foreground/40" />
      ))}
    </div>
  );
}
