import { useEffect, useState } from 'react';
import { ArrowRight, Code2, Users, Compass, Palette } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { getServiceCategories } from '../../api/servicesApi';
import type { ServiceCategory } from '../../types/service';

const iconMap: Record<string, React.ReactNode> = {
  'cat-software-development': <Code2 className="w-6 h-6" />,
  'cat-manpower-solutions': <Users className="w-6 h-6" />,
  'cat-it-consulting': <Compass className="w-6 h-6" />,
  'cat-digital-solutions': <Palette className="w-6 h-6" />,
};

export default function ServicesOverview() {
  const [categories, setCategories] = useState<ServiceCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    getServiceCategories().then((data) => {
      if (mounted) {
        setCategories(data);
        setLoading(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-surface">
        <Container className="text-center text-text-muted">Loading services...</Container>
      </section>
    );
  }

  return (
    <section className="py-20 bg-surface" aria-labelledby="services-title">
      <Container>
        <SectionHeading
          badge="Our Services"
          title="End-to-End Solutions for Growing Businesses"
          subtitle="From building tailor-made business software to supplying elite IT specialists, we cover your complete digital lifecycle."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="flex flex-col h-full bg-white">
              {/* Header Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
                {iconMap[category.id] || <Code2 className="w-6 h-6" />}
              </div>

              {/* Title & Desc */}
              <h3 className="text-xl font-bold text-secondary mb-3 font-heading">
                {category.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6 flex-1">
                {category.description}
              </p>

              {/* Details link */}
              <div className="pt-4 border-t border-border">
                <Button
                  href={`/services#${category.slug}`}
                  variant="ghost"
                  size="sm"
                  className="px-0 text-primary font-bold hover:bg-transparent"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Action Button at bottom */}
        <div className="text-center mt-12">
          <Button href="/services" variant="primary" size="lg">
            View All Services & Specializations
          </Button>
        </div>
      </Container>
    </section>
  );
}
