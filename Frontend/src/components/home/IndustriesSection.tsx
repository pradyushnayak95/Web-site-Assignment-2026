import { HeartPulse, Landmark, ShoppingBag, GraduationCap, Truck, Home } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

interface IndustryItem {
  icon: React.ReactNode;
  name: string;
  description: string;
}

const industries: IndustryItem[] = [
  { icon: <HeartPulse className="w-6 h-6" />, name: 'Healthcare & Biotech', description: 'HIPAA-compliant custom medical record systems and patient-facing apps.' },
  { icon: <Landmark className="w-6 h-6" />, name: 'Fintech & Banking', description: 'Secure transaction pipelines, banking dashboards, and investment calculators.' },
  { icon: <ShoppingBag className="w-6 h-6" />, name: 'E-commerce & Retail', description: 'High-traffic shopping platforms with custom inventories and global payments.' },
  { icon: <GraduationCap className="w-6 h-6" />, name: 'Edtech & Learning', description: 'LMS platforms, classroom planners, and interactive student dashboards.' },
  { icon: <Truck className="w-6 h-6" />, name: 'Logistics & Supply Chain', description: 'Fleet trackers, warehouse inventories, and automated supply chains.' },
  { icon: <Home className="w-6 h-6" />, name: 'Real Estate & Proptech', description: 'Listing search systems, virtual tour viewers, and client management tools.' },
];

export default function IndustriesSection() {
  return (
    <section className="py-20 bg-surface" aria-labelledby="industries-title">
      <Container>
        <SectionHeading
          badge="Industries"
          title="Customized for Your Domain"
          subtitle="Our engineers possess specialized vertical domain experience to align with your industry regulations, workflows, and users."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, index) => (
            <Card key={index} className="bg-white border-border text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
                {ind.icon}
              </div>
              <h3 className="text-lg font-bold text-secondary font-heading mb-2">
                {ind.name}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {ind.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
