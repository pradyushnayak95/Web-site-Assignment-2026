import Container from '../ui/Container';
import Card from '../ui/Card';
import Counter from './Counter';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { cn } from '../../utils/cn';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  { value: 150, suffix: '+', label: 'Projects Shipped', description: 'Successful enterprise deployments.' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', description: 'Based on post-launch surveys.' },
  { value: 120, suffix: '+', label: 'Vetted Engineers', description: 'Highly skilled IT specialists.' },
  { value: 8, suffix: '+', label: 'Years of Pedigree', description: 'Serving clients globally.' },
];

export default function StatsSection() {
  const [ref, inView] = useScrollReveal({ threshold: 0.1 });

  return (
    <section 
      ref={ref as React.RefObject<HTMLDivElement>} 
      className="py-16 bg-surface-white border-y border-border"
    >
      <Container>
        <div 
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {stats.map((stat, idx) => (
            <Card key={idx} padding="md" hover={false} className="text-center bg-surface border-none shadow-sm">
              <div className="text-4xl md:text-5xl font-extrabold text-primary font-heading mb-2">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-secondary font-semibold text-lg mb-1">{stat.label}</p>
              <p className="text-text-muted text-sm">{stat.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
