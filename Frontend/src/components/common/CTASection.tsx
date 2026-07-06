import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTASection({
  title = 'Ready to Transform Your Business Operations?',
  description = 'Leverage our engineering expertise and manpower resource networks to accelerate your growth today.',
  buttonText = 'Get Started Now',
  buttonHref = '/contact',
}: CTASectionProps) {
  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      {/* Subtle decorative background grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <Container className="relative z-10 text-center max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={buttonHref} variant="cta" size="lg">
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button href="/services" variant="outline" size="lg" className="border-slate-500 text-white hover:bg-white/10 hover:border-white">
            Explore Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
