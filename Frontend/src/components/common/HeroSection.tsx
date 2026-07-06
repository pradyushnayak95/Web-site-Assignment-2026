import Container from '../ui/Container';
import Breadcrumb from '../layout/Breadcrumb';
import type { BreadcrumbItem } from '../../types/common';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  breadcrumbItems: BreadcrumbItem[];
}

export default function HeroSection({
  title,
  subtitle,
  breadcrumbItems,
}: HeroSectionProps) {
  return (
    <section className="bg-secondary relative pt-24 pb-16 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/page-hero-bg.svg')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(8,15,35,0.88)_0%,rgba(8,15,35,0.74)_34%,rgba(8,15,35,0.26)_68%,rgba(8,15,35,0.18)_100%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-y-0 left-0 w-full max-w-[720px] pointer-events-none bg-[radial-gradient(circle_at_left_center,rgba(196,69,255,0.22),transparent_62%)]" />

      <Container className="relative z-10">
        <h1 className="max-w-3xl text-3xl md:text-5xl font-extrabold !text-white mb-4 leading-tight drop-shadow-[0_10px_28px_rgba(0,0,0,0.45)]">
          {title}
        </h1>
        {subtitle && (
          <p className="!text-slate-100 text-base md:text-lg leading-relaxed max-w-2xl mb-6">
            {subtitle}
          </p>
        )}
      </Container>
      
      {/* Breadcrumb section */}
      <div className="relative z-10 border-t border-white/10 mt-4 bg-black/20 py-1 backdrop-blur-sm">
        <Breadcrumb items={breadcrumbItems} variant="light" className="py-2" />
      </div>
    </section>
  );
}
