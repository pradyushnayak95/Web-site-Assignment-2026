import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    step: 'Step 1',
    title: 'Resume Review & Application Screening',
    description: 'Our hiring managers evaluate your background, portfolio repositories, and matching experience.',
  },
  {
    step: 'Step 2',
    title: 'Technical Screen & Coding Assessment',
    description: 'A 60-minute video discussion covering core JavaScript/React architecture, patterns, and problem solving.',
  },
  {
    step: 'Step 3',
    title: 'Systems Design & Cultural Fit Interview',
    description: 'We discuss scalable architectural design, component colocation, code styling, and work collaboration values.',
  },
  {
    step: 'Step 4',
    title: 'Formal Offer & Fast Onboarding',
    description: 'We send a detailed offer specification and schedule your equipment setup and team introductions.',
  },
];

export default function HiringProcess() {
  return (
    <section className="py-20 bg-white" aria-labelledby="hiring-process-title">
      <Container>
        <SectionHeading
          badge="Hiring Process"
          title="How We Hire"
          subtitle="Our structured, 4-step interview pipeline is designed to respect your time while assessing engineering capabilities and cultural alignment."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => (
            <Card key={idx} hover={true} className="bg-surface border-none relative flex flex-col pt-8 text-center">
              <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                {step.step}
              </span>
              <h3 className="text-lg font-bold text-secondary font-heading mb-3">
                {step.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed flex-grow">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
