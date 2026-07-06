import Container from '../ui/Container';

// Simple mock logos list
const clientNames = [
  'Apex Healthcare',
  'Vanguard Finance',
  'Bloom E-Commerce',
  'Scribe AI',
  'EduTech Global',
  'TransLogix',
  'Omni Retail',
  'TelcoConnect',
];

export default function ClientsSection() {
  return (
    <section className="py-12 bg-surface border-y border-border" aria-label="Trusted Clients">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-text-muted mb-8">
          Trusted by Innovative Leaders Worldwide
        </p>

        {/* Marquee Wrapper */}
        <div className="relative overflow-hidden w-full select-none">
          <div className="flex gap-16 items-center justify-around flex-wrap md:flex-nowrap">
            {clientNames.map((name, idx) => (
              <div
                key={idx}
                className="text-base md:text-lg font-heading font-extrabold text-secondary/30 hover:text-primary transition-colors duration-250 py-2 cursor-default"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
