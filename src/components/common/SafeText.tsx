import type { ReactNode, ElementType } from 'react';

interface SafeTextProps {
  text: string | undefined | null;
  fallback?: string;
  className?: string;
  as?: ElementType;
}

export function SafeText({
  text,
  fallback = '',
  className,
  as: Component = 'span'
}: SafeTextProps) {
  const displayText = text?.trim() || fallback;

  if (!displayText) {
    return null;
  }

  return <Component className={className}>{displayText}</Component>;
}

interface ConditionalRenderProps {
  condition: unknown;
  children: ReactNode;
  fallback?: ReactNode;
}

export function ConditionalRender({
  condition,
  children,
  fallback = null
}: ConditionalRenderProps) {
  // Handle arrays - check if not empty
  if (Array.isArray(condition)) {
    return condition.length > 0 ? <>{children}</> : <>{fallback}</>;
  }

  // Handle strings - check if not empty after trim
  if (typeof condition === 'string') {
    return condition.trim() ? <>{children}</> : <>{fallback}</>;
  }

  // Handle other truthy/falsy values
  return condition ? <>{children}</> : <>{fallback}</>;
}
