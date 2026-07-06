import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { Target, Heart, Sparkles } from 'lucide-react';

export default function CultureSection() {
  return (
    <section className="py-20 bg-white" aria-labelledby="culture-title">
      <Container>
        <SectionHeading
          badge="Company Culture"
          title="Life at LUCID"
          subtitle="We foster a high-trust, engineering-first environment where transparency, quality, and mutual respect are core values."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card hover={false} className="bg-surface border-none p-8 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-secondary font-heading mb-2">
              Engineering Excellence
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              We hold our work to high engineering standards. Clean architecture, strong types, and rigorous testing are part of our DNA.
            </p>
          </Card>

          <Card hover={false} className="bg-surface border-none p-8 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-secondary font-heading mb-2">
              People-First Focus
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              We value work-life harmony. Flexible hours, remote arrangements, and mental wellness are prioritized to ensure sustainable creativity.
            </p>
          </Card>

          <Card hover={false} className="bg-surface border-none p-8 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-secondary font-heading mb-2">
              Growth & Mentorship
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Continuous learning is supported through training budgets, certification sponsorships, and regular peer-led tech talks.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}
