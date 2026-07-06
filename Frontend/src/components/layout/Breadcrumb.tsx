import { Link } from 'react-router';
import { ChevronRight, Home } from 'lucide-react';
import type { BreadcrumbItem } from '../../types/common';
import { cn } from '../../utils/cn';
import Container from '../ui/Container';

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  variant?: 'default' | 'light';
}

export default function Breadcrumb({ items, className, variant = 'default' }: BreadcrumbProps) {
  const isLight = variant === 'light';

  return (
    <nav aria-label="Breadcrumb" className={cn('py-4', className)}>
      <Container>
        <ol className="flex items-center gap-1.5 text-sm flex-wrap">
          <li>
            <Link
              to="/"
              className={cn(
                'flex items-center gap-1 transition-colors',
                isLight
                  ? 'text-slate-300 hover:text-white'
                  : 'text-text-muted hover:text-primary',
              )}
              aria-label="Home"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.label} className="flex items-center gap-1.5">
                <ChevronRight
                  className={cn(
                    'w-3.5 h-3.5',
                    isLight ? 'text-slate-400' : 'text-text-muted',
                  )}
                  aria-hidden="true"
                />
                {isLast || !item.href ? (
                  <span
                    className={cn(
                      'font-medium',
                      isLight ? 'text-white' : 'text-text',
                    )}
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      'transition-colors',
                      isLight
                        ? 'text-slate-300 hover:text-white'
                        : 'text-text-muted hover:text-primary',
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}
