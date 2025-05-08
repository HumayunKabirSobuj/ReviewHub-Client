'use client';

import { cn } from '@/lib/utils';
import React, { useState } from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      className,
      src,
      alt,
      fallbackSrc = '/placeholder.svg?height=200&width=300',
      ...props
    },
    ref,
  ) => {
    const [imgSrc, setImgSrc] = useState<string | undefined>(src);
    const [hasError, setHasError] = useState(false);

    const handleError = () => {
      if (!hasError) {
        setImgSrc(fallbackSrc);
        setHasError(true);
      }
    };

    return (
      <img
        ref={ref}
        src={imgSrc || '/placeholder.svg'}
        alt={alt || 'Image'}
        className={cn('object-cover', className)}
        onError={handleError}
        loading="lazy"
        {...props}
      />
    );
  },
);

Image.displayName = 'Image';
