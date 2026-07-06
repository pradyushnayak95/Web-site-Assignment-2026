import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Consultation',
    description: 'We sit down with your engineering leads and product managers to map current systems, dependencies, scale criteria, and roadmap timelines.',
  },
  {
    number: '02',
    title: 'Talent Sourcing & Architecture Alignment',
    description: 'We formulate the technical architecture specification and identify matches from our vetted specialist database to construct your dedicated project team.',
  },
  {
    number: '03',
    title: 'Agile Development Sprints',
    description: 'Development gets underway following continuous delivery cycles. You receive working features every 2 weeks, with complete visibility into repositories.',
  },
  {
    number: '04',
    title: 'Deployment & SLA Support',
    description: 'Following comprehensive automated testing, we launch your systems onto production cloud setups and provide ongoing SLA monitoring and support.',
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 bg-surface border-t border-border" aria-labelledby="process-title">
      <Container>
        <SectionHeading
          badge="Our Process"
          title="How We Deliver Value"
          subtitle="Our step-by-step engagement model ensures complete transparency, engineering quality, and project alignment from discovery to launch."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <Card key={idx} hover={true} className="bg-white border-border relative flex flex-col pt-8">
              {/* Step indicator */}
              <div className="absolute top-4 right-6 text-4xl font-extrabold font-heading text-primary/10 select-none">
                {step.number}
              </div>

              {/* Title & Desc */}
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
