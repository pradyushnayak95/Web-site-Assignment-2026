import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../components/ui/Container';
import HeroSection from '../components/common/HeroSection';
import ServiceCard from '../components/services/ServiceCard';
import ProcessTimeline from '../components/services/ProcessTimeline';
import TechnologyGrid from '../components/services/TechnologyGrid';
import CTASection from '../components/common/CTASection';
import { getServiceCategories } from '../api/servicesApi';
import type { ServiceCategory } from '../types/service';

export default function ServicesPage() {
  const [categories, setCategories] = useState<ServiceCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    let mounted = true;
    getServiceCategories().then((data) => {
      if (mounted) {
        setCategories(data);
        setLoading(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  const breadcrumbs = [{ label: 'Services' }];

  const filteredCategories = activeTab === 'all'
    ? categories
    : categories.filter(c => c.slug === activeTab);

  return (
    <>
      <Helmet>
        <title>Our Services — LUCID</title>
        <meta name="description" content="Discover our IT services: Custom Software Development, Mobile Apps, Dedicated Developers, IT Staffing, IT Consulting, and Digital Solutions." />
      </Helmet>

      <HeroSection
        title="Our Services & Expertise"
        subtitle="Accelerate your systems architecture, product release cycles, and technical resource recruitment."
        breadcrumbItems={breadcrumbs}
      />

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <Container>
          {/* Tabs Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-surface text-text-light hover:text-primary hover:bg-primary/5'
              }`}
            >
              All Capabilities
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.slug)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === cat.slug
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-surface text-text-light hover:text-primary hover:bg-primary/5'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="text-center text-text-muted py-12">Loading services...</div>
          ) : (
            <div className="space-y-16">
              {filteredCategories.map((category) => (
                <div key={category.id} id={category.slug} className="scroll-mt-24">
                  <div className="mb-8 border-b border-border pb-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-secondary font-heading mb-2">
                      {category.title}
                    </h2>
                    <p className="text-text-muted text-base max-w-3xl">
                      {category.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service) => (
                      <ServiceCard key={service.id} service={service} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>

      <ProcessTimeline />
      <TechnologyGrid />
      <CTASection />
    </>
  );
}
