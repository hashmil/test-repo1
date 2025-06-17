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

  const fallbackImage =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgMTIwTDIwMCAxNDBMMjI1IDEyMEwyNTAgMTUwTDI3NSAxMzBMMzAwIDE3MEgxMDBMMTI1IDE0MEwxNTAgMTIwTDE3NSAxMjBaIiBmaWxsPSIjREREREREIi8+CjxjaXJjbGUgY3g9IjE0MCIgY3k9IjEwMCIgcj0iMTAiIGZpbGw9IiNEREREREQiLz4KPHRleHQgeD0iMjAwIiB5PSIyMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5OTk5OTkiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCI+SW1hZ2UgTm90IEZvdW5kPC90ZXh0Pgo8L3N2Zz4K";

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
