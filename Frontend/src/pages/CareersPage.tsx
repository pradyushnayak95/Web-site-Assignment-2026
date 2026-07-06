import { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../components/ui/Container';
import HeroSection from '../components/common/HeroSection';
import CultureSection from '../components/careers/CultureSection';
import BenefitsSection from '../components/careers/BenefitsSection';
import HiringProcess from '../components/careers/HiringProcess';
import JobCard from '../components/careers/JobCard';
import ContactForm from '../components/common/ContactForm';
import { getJobs } from '../api/careerApi';
import type { Job } from '../types/career';

export default function CareersPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeDept, setActiveDept] = useState('all');
  const [selectedJobTitle, setSelectedJobTitle] = useState('');
  
  const formRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let mounted = true;
    getJobs().then((data) => {
      if (mounted) {
        setJobs(data);
        setLoading(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  const handleApply = (jobTitle: string) => {
    setSelectedJobTitle(jobTitle);
    
    // Smooth scroll to form section
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const departments = ['all', ...Array.from(new Set(jobs.map(j => j.department.toLowerCase())))];

  const filteredJobs = activeDept === 'all'
    ? jobs
    : jobs.filter(j => j.department.toLowerCase() === activeDept);

  const breadcrumbs = [{ label: 'Careers' }];

  return (
    <>
      <Helmet>
        <title>Careers — Join Our Team at LUCID</title>
        <meta name="description" content="Explore open technical positions, company culture, benefits, and hiring pipeline at LUCID. Join our team of vetted engineers." />
      </Helmet>

      <HeroSection
        title="Work With Us"
        subtitle="Help us build enterprise-scale products and scale engineering capabilities for partners worldwide."
        breadcrumbItems={breadcrumbs}
      />

      <CultureSection />
      <BenefitsSection />
      <HiringProcess />

      {/* Open Openings */}
      <section className="py-20 bg-white" id="open-positions">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4 font-heading">
              Current Openings
            </h2>
            <p className="text-text-muted">
              Select a department and expand position cards to review requirements and apply.
            </p>
          </div>

          {/* Department Filter Tabs */}
          {departments.length > 1 && (
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveDept(dept)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all uppercase tracking-wide text-xs ${
                    activeDept === dept
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-surface text-text-light hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          )}

          {loading ? (
            <div className="text-center text-text-muted py-12">Loading job positions...</div>
          ) : filteredJobs.length === 0 ? (
            <div className="text-center text-text-muted py-12 border border-dashed border-border rounded-xl">
              No open positions at this time.
            </div>
          ) : (
            <div className="max-w-4xl mx-auto space-y-4">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} onApply={handleApply} />
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Application Form Form */}
      <section ref={formRef} className="py-20 bg-surface border-t border-border scroll-mt-16">
        <Container className="max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-2 font-heading">
              Apply For Position
            </h2>
            {selectedJobTitle ? (
              <p className="text-primary font-semibold text-sm">
                Applying for: {selectedJobTitle}
              </p>
            ) : (
              <p className="text-text-muted text-sm">
                Fill out the application below and attach details.
              </p>
            )}
          </div>
          <ContactForm 
            key={selectedJobTitle} // resets the component state to apply defaultSubject properly
            defaultSubject={selectedJobTitle ? 'other' : ''} 
            className="bg-white border border-border"
          />
        </Container>
      </section>
    </>
  );
}
