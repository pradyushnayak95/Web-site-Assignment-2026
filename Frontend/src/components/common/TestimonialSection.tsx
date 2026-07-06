import { useEffect, useState } from 'react';
import { Quote, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { getTestimonials } from '../../api/testimonialApi';
import type { Testimonial } from '../../types/testimonial';

export default function TestimonialSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    getTestimonials().then((data) => {
      if (mounted) {
        setTestimonials(data);
        setLoading(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials]);

  if (loading || testimonials.length === 0) {
    return (
      <section className="py-20 bg-surface">
        <Container className="text-center text-text-muted">Loading testimonials...</Container>
      </section>
    );
  }

  const active = testimonials[activeIndex];

  return (
    <section className="py-20 bg-surface overflow-hidden">
      <Container>
        <SectionHeading
          badge="Testimonials"
          title="What Our Clients Say"
          subtitle="Discover how LUCID helps organizations accelerate engineering cycles and deliver outstanding digital products."
        />

        <div className="max-w-3xl mx-auto relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <Card hover={false} className="relative p-8 md:p-12 bg-white shadow-lg border border-border">
                <Quote className="absolute right-8 top-8 w-16 h-16 text-primary/5 pointer-events-none" />
                
                {/* Rating stars */}
                <div className="flex gap-1 mb-6" aria-label={`Rating: ${active.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < active.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200'
                      }`}
                    />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl text-secondary font-medium leading-relaxed italic mb-8">
                  "{active.content}"
                </blockquote>

                <div className="flex items-center gap-4">
                  {active.avatar ? (
                    <img
                      src={active.avatar}
                      alt={active.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                      {active.name[0]}
                    </div>
                  )}
                  <div>
                    <cite className="not-italic font-bold text-secondary text-base block">
                      {active.name}
                    </cite>
                    <span className="text-text-muted text-sm block">
                      {active.role}, {active.company}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'bg-primary w-6' : 'bg-border hover:bg-text-muted'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
