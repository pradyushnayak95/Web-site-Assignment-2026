import { Helmet } from 'react-helmet-async';
import Container from '../components/ui/Container';
import HeroSection from '../components/common/HeroSection';

export default function TermsPage() {
  const breadcrumbs = [{ label: 'Terms of Service' }];
  const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <>
      <Helmet>
        <title>Terms of Service — LUCID</title>
        <meta name="description" content="LUCID's Terms of Service. Review the legal agreement governing use of our website and services." />
      </Helmet>

      <HeroSection
        title="Terms of Service"
        subtitle={`Last updated: ${currentDate}`}
        breadcrumbItems={breadcrumbs}
      />

      <section className="py-20 bg-white">
        <Container className="max-w-4xl">
          <div className="prose prose-slate max-w-none text-text-light space-y-8">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-secondary mb-3 font-heading">
                1. Acceptance of Terms
              </h2>
              <p className="leading-relaxed">
                By accessing or using the LUCID website and services, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, you must not use our website.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-secondary mb-3 font-heading">
                2. Scope of Services
              </h2>
              <p className="leading-relaxed">
                LUCID provides custom software engineering, technical recruiting, staffing of dedicated developers, and strategic IT consulting. Any specialized service arrangements are governed by separate, signed master service agreements (MSAs) or statements of work (SOWs) and supersede these online terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-secondary mb-3 font-heading">
                3. Intellectual Property
              </h2>
              <p className="leading-relaxed">
                All contents on this website (including text, graphics, logos, illustrations, design systems, code samples, and trademarks) are the intellectual property of LUCID and are protected by international copyright laws. You may not copy, republish, or exploit any site asset without express written permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-secondary mb-3 font-heading">
                4. User Conduct
              </h2>
              <p className="leading-relaxed">
                When using our forms or application portals, you agree to supply accurate, non-misleading information. You agree not to upload malicious software, scripts, or engage in automated scraping of website data.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-secondary mb-3 font-heading">
                5. Limitation of Liability
              </h2>
              <p className="leading-relaxed">
                In no event shall LUCID be liable for any direct, indirect, special, or consequential damages arising out of the use of or inability to use this website, even if notified of such possibilities.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
