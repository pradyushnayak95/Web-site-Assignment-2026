import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Container from '../components/ui/Container';
import HeroSection from '../components/common/HeroSection';
import Card from '../components/ui/Card';
import ContactForm from '../components/common/ContactForm';
import { CONTACT_INFO } from '../constants/navigation';

export default function ContactPage() {
  const breadcrumbs = [{ label: 'Contact' }];

  return (
    <>
      <Helmet>
        <title>Contact Us — LUCID</title>
        <meta name="description" content="Get in touch with LUCID for custom software development requests, IT staffing demands, and consulting partnerships." />
      </Helmet>

      <HeroSection
        title="Contact Our Team"
        subtitle="Discuss your digital product roadmap, resource scaling requirements, or general service inquiries."
        breadcrumbItems={breadcrumbs}
      />

      <section className="pt-12 pb-20 md:pt-14 bg-white" aria-labelledby="contact-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details Grid */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-secondary mb-4 font-heading" id="contact-heading">
                  Get In Touch
                </h2>
                <p className="text-text-muted text-sm md:text-base leading-relaxed mb-6">
                  Fill out our project planner questionnaire and a digital solution architect will contact you within 24 hours to schedule a consultation.
                </p>
              </div>

              {/* Info cards */}
              <div className="space-y-4">
                <Card hover={false} className="bg-surface border-none flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary font-heading text-sm mb-1">Our Office</h3>
                    <p className="text-text-muted text-xs md:text-sm leading-relaxed">
                      {CONTACT_INFO.address}
                    </p>
                  </div>
                </Card>

                <Card hover={false} className="bg-surface border-none flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary font-heading text-sm mb-1">Phone Number</h3>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-primary hover:underline text-xs md:text-sm leading-relaxed block">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </Card>

                <Card hover={false} className="bg-surface border-none flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary font-heading text-sm mb-1">Email Address</h3>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-primary hover:underline text-xs md:text-sm leading-relaxed block">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </Card>

                <Card hover={false} className="bg-surface border-none flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary font-heading text-sm mb-1">Business Hours</h3>
                    <p className="text-text-muted text-xs md:text-sm leading-relaxed">
                      Monday — Friday: 9:00 AM — 6:00 PM PST
                    </p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Form Section */}
            <div className="lg:col-span-7">
              <ContactForm className="bg-surface border-none" />
            </div>
          </div>
        </Container>
      </section>

      {/* Embedded Google Map Placeholder */}
      <section className="bg-surface border-t border-border py-4">
        <Container>
          <div className="w-full h-80 bg-slate-200 rounded-xl overflow-hidden relative flex items-center justify-center border border-border">
            <span className="text-text-muted text-sm font-semibold select-none">
              [ Google Map Placement Area ]
            </span>
          </div>
        </Container>
      </section>
    </>
  );
}
