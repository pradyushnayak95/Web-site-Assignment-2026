import { Helmet } from 'react-helmet-async';
import Container from '../components/ui/Container';
import HeroSection from '../components/common/HeroSection';

export default function PrivacyPage() {
  const breadcrumbs = [{ label: 'Privacy Policy' }];
  const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <>
      <Helmet>
        <title>Privacy Policy — LUCID</title>
        <meta name="description" content="LUCID's Privacy Policy. Learn about how we handle, collect, and protect your user data." />
      </Helmet>

      <HeroSection
        title="Privacy Policy"
        subtitle={`Last updated: ${currentDate}`}
        breadcrumbItems={breadcrumbs}
      />

      <section className="py-20 bg-white">
        <Container className="max-w-4xl">
          <div className="prose prose-slate max-w-none text-text-light space-y-8">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-secondary mb-3 font-heading">
                1. Information We Collect
              </h2>
              <p className="leading-relaxed">
                At LUCID, we collect personal information you provide to us directly through contact forms, newsletter signups, or job applications. This may include your name, email address, phone number, current organization, and CV files.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-secondary mb-3 font-heading">
                2. How We Use Your Information
              </h2>
              <p className="leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Respond to service inquiries and schedule consultations.</li>
                <li>Process applications and screen technical candidates for job listings.</li>
                <li>Distribute newsletters and tech trends (only with your express consent).</li>
                <li>Monitor and optimize web application performance.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-secondary mb-3 font-heading">
                3. Data Security & Storage
              </h2>
              <p className="leading-relaxed">
                We implement robust security controls (including encryptions, firewalls, and strict authorization logs) to protect your personal data from unauthorized access. Your data is stored securely on servers compliant with SOC2 and GDPR guidelines.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-secondary mb-3 font-heading">
                4. Third-Party Sharing
              </h2>
              <p className="leading-relaxed">
                We do not sell or lease your personal information to third parties. We may share data with vetted cloud infrastructure providers (like AWS, Azure, Google Cloud) solely for hosting and processing your requests.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-secondary mb-3 font-heading">
                5. Your Rights
              </h2>
              <p className="leading-relaxed">
                You have the right to request access to, correction of, or deletion of your personal data stored with us. To exercise these rights, please contact us directly at <a href="mailto:privacy@lucid.com" className="text-primary hover:underline">privacy@lucid.com</a>.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
