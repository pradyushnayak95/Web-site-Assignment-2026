import { cn } from '../../utils/cn';
import Badge from './Badge';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl mb-12',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {badge && (
        <Badge variant="primary" className="mb-4">
          {badge}
        </Badge>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-muted text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
