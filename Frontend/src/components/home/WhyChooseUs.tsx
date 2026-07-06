import { ShieldCheck, UserCheck, Zap, MessageSquareCode, Layers, Scale } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: 'Top 3% Vetted Talent',
    description: 'We thoroughly screen our developers for technical depth, systems design competency, and team collaboration skills.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Strict IP Protection & Security',
    description: 'Your intellectual property is fully protected by clean NDAs and secure data configurations conforming to SOC2 guidelines.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Agile Dev & Quick Delivery',
    description: 'We follow continuous deployment practices, shipping features in regular, highly visible bi-weekly sprints.',
  },
  {
    icon: <MessageSquareCode className="w-6 h-6" />,
    title: 'Transparent Communication',
    description: 'Direct Slack integrations and regular project reviews keep you fully aligned with our engineers at all times.',
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Modern Technology Stack',
    description: 'We leverage cutting-edge tech (React, TypeScript, Next.js, Serverless Cloud) to build scalable and high-performance apps.',
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: 'Flexible & Scalable Resourcing',
    description: 'Easily adjust your developer team sizes up or down to align with project sprints and budget constraints.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white" aria-labelledby="why-choose-title">
      <Container>
        <SectionHeading
          badge="Why Choose Us"
          title="Engineered for Reliability & Scale"
          subtitle="We don't just supply services — we partner with you to establish code quality, team velocity, and robust architecture."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, index) => (
            <Card key={index} padding="md" className="bg-surface border-none flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                {feat.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-secondary font-heading mb-2">
                  {feat.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
