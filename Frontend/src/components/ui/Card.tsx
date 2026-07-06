import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export default function Card({
  children,
  className,
  hover = true,
  padding = 'md',
}: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl border border-border',
        'shadow-card',
        hover && 'transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1',
        paddingStyles[padding],
        className,
      )}
    >
      {children}
    </div>
  );
}
