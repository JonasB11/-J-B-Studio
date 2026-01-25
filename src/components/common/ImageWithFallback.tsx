import { useState, type ImgHTMLAttributes } from 'react';

interface ImageWithFallbackProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  fallbackElement?: React.ReactNode;
}

const DEFAULT_FALLBACK = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"%3E%3Crect fill="%231a1a1a" width="200" height="200"/%3E%3Ctext fill="%23666" font-family="sans-serif" font-size="14" text-anchor="middle" x="100" y="105"%3ENo Image%3C/text%3E%3C/svg%3E';

export function ImageWithFallback({
  src,
  alt,
  fallbackSrc = DEFAULT_FALLBACK,
  fallbackElement,
  className,
  ...props
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  // If no src provided, show fallback immediately
  if (!src || hasError) {
    if (fallbackElement) {
      return <>{fallbackElement}</>;
    }
    return (
      <img
        src={fallbackSrc}
        alt={alt || 'Placeholder image'}
        className={className}
        {...props}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt || ''}
      className={className}
      onError={handleError}
      onLoad={handleLoad}
      loading="lazy"
      style={{
        opacity: isLoading ? 0.5 : 1,
        transition: 'opacity 0.3s ease',
        ...props.style,
      }}
      {...props}
    />
  );
}
