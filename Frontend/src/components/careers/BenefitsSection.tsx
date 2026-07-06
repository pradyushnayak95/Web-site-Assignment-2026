import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { Laptop, GraduationCap, CalendarDays, HeartPulse, Sparkles, Smile } from 'lucide-react';

interface BenefitItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: BenefitItem[] = [
  {
    icon: <Laptop className="w-6 h-6" />,
    title: 'Remote-First Setup',
    description: 'Work from anywhere with core hour alignments and a generous home office hardware stipend.',
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'Learning Stipends',
    description: 'Annual training budget for courses, books, tech conferences, and certifications.',
  },
  {
    icon: <CalendarDays className="w-6 h-6" />,
    title: 'Paid Time Off',
    description: '25 days of annual paid leave, plus local holidays and parental leave programs.',
  },
  {
    icon: <HeartPulse className="w-6 h-6" />,
    title: 'Comprehensive Health',
    description: 'Medical, dental, and vision coverages for you and your direct dependents.',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Annual Retreats',
    description: 'We gather the entire global team once a year in scenic locations for building alignment.',
  },
  {
    icon: <Smile className="w-6 h-6" />,
    title: 'Wellness Benefits',
    description: 'Stipends for gym memberships, counseling, and subscription access to wellness apps.',
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-surface border-y border-border" aria-labelledby="benefits-title">
      <Container>
        <SectionHeading
          badge="Perks & Benefits"
          title="Designed for Your Well-being"
          subtitle="We support our team with premium perks so they can focus on shipping exceptional software and scaling client systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white border-border flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-secondary font-heading mb-2">
                  {benefit.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
