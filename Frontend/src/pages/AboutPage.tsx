import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Heart, Sparkles, Trophy, Calendar, Eye } from 'lucide-react';
import Container from '../components/ui/Container';
import HeroSection from '../components/common/HeroSection';
import Card from '../components/ui/Card';
import { getTeamMembers } from '../api/teamApi';
import type { TeamMember } from '../types/team';

const coreValues = [
  { icon: <Target className="w-5 h-5" />, title: 'Quality First', desc: 'We take pride in our craft. Clean architectural patterns, solid tests, and scalability are non-negotiable.' },
  { icon: <Heart className="w-5 h-5" />, title: 'High Trust & Transparency', desc: 'We encourage transparent timelines, direct dev communication, and clear deliverables.' },
  { icon: <Sparkles className="w-5 h-5" />, title: 'Continuous Growth', desc: 'We invest in our engineers, sponsoring courses and certifications to stay ahead of the technology curve.' },
];

const timelineEvents = [
  { year: '2018', title: 'LUCID Founded', desc: 'Established in San Francisco with a focus on custom React web development and staffing.' },
  { year: '2020', title: 'Sourcing Pool Expansion', desc: 'Grew candidate network to 10k vetted engineers, scaling staffing capabilities globally.' },
  { year: '2022', title: 'Enterprise Partner Status', desc: 'Successfully delivered complex cloud and database migrations for Fortune 500 healthcare clients.' },
  { year: '2025', title: 'AI Integration Lab Launch', desc: 'Formed a dedicated team focusing on custom LLM fine-tuning and process automation.' },
];

export default function AboutPage() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    getTeamMembers().then((data) => {
      if (mounted) {
        setTeam(data);
        setLoading(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  const breadcrumbs = [{ label: 'About Us' }];

  return (
    <>
      <Helmet>
        <title>About Us — LUCID</title>
        <meta name="description" content="Learn about the story, values, engineering guidelines, and leadership team behind LUCID's IT solutions and manpower services." />
      </Helmet>

      <HeroSection
        title="About Our Company"
        subtitle="Bridging the gap between specialized tech talent and enterprise-scale software engineering."
        breadcrumbItems={breadcrumbs}
      />

      {/* Story Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6 font-heading">
                Our Mission & Story
              </h2>
              <p className="text-text-light leading-relaxed mb-6">
                Founded in 2018, LUCID was built on a simple premise: businesses require both premium technology and elite engineering talent to succeed in today's digitized landscape. We saw organizations struggling with long recruitment cycles and software that failed to scale under load.
              </p>
              <p className="text-text-light leading-relaxed">
                By maintaining an active, thoroughly-screened sourcing pool of vetted IT professionals, we help startups and enterprise clients scale their velocity on demand. Concurrently, our custom software agency engineers reliable backend systems, web apps, and cloud setups designed to support millions of active users.
              </p>
            </div>
            
            {/* Vision and Mission Cards */}
            <div className="lg:col-span-5 space-y-6">
              <Card hover={false} className="bg-surface border-none flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-secondary font-heading mb-1">Our Vision</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    To become the global standard for remote tech staffing and enterprise software systems.
                  </p>
                </div>
              </Card>

              <Card hover={false} className="bg-surface border-none flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-secondary font-heading mb-1">Our Mission</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Empowering organizations to build reliable products by matching them with audited talent and implementing solid design.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-surface">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4 font-heading">
              Our Core Values
            </h2>
            <p className="text-text-muted">
              These principles guide how we review code, interact with stakeholders, and select team members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((value) => (
              <Card key={value.title} className="bg-white border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="font-bold text-secondary font-heading mb-2">
                  {value.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {value.desc}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline Milestones */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4 font-heading">
              Our Journey
            </h2>
            <p className="text-text-muted">
              A look at the key milestones that shaped our growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineEvents.map((evt) => (
              <Card key={evt.year} className="bg-surface border-none flex flex-col p-6 relative">
                <span className="flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wider mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  {evt.year}
                </span>
                <h3 className="font-bold text-secondary font-heading mb-2">
                  {evt.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {evt.desc}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-surface border-t border-border">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4 font-heading">
              Leadership Team
            </h2>
            <p className="text-text-muted">
              Meet the specialists leading our technology, sourcing, and client success divisions.
            </p>
          </div>

          {loading ? (
            <div className="text-center text-text-muted">Loading team members...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((member) => (
                <Card key={member.id} className="bg-white border-border text-center flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold font-heading text-2xl mb-4">
                    {member.name[0]}
                  </div>
                  <h3 className="font-bold text-secondary font-heading">
                    {member.name}
                  </h3>
                  <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-3">
                    {member.role}
                  </p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </Card>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
