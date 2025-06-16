"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
}

export default function ImageWithFallback({
  src,
  alt,
  fill,
  className,
  priority,
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  // Reset error state when src prop changes
  useEffect(() => {
    setError(false);
  }, [src]);

  const fallbackImage = "/images/placeholder.jpg";

  return (
    <Image
      src={error ? fallbackImage : src}
      alt={alt}
      fill={fill}
      className={className}
      priority={priority}
      onError={() => setError(true)}
    />
  );
}
