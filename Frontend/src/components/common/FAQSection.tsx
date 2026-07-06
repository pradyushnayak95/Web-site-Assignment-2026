import { useEffect, useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { getFAQs } from '../../api/faqApi';
import type { FAQ } from '../../types/faq';

export default function FAQSection() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [openId, setOpenId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    getFAQs().then((data) => {
      if (mounted) {
        setFaqs(data);
        setLoading(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <Container className="text-center text-text-muted">Loading FAQs...</Container>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white" aria-labelledby="faq-title">
      <Container>
        <SectionHeading
          badge="FAQs"
          title="Frequently Asked Questions"
          subtitle="Got questions? We have answers. If you can't find what you are looking for, feel free to contact us."
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <Card key={faq.id} padding="none" hover={false} className="overflow-hidden">
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none focus-visible:bg-surface/50"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-semibold text-secondary md:text-lg">
                    {faq.question}
                  </span>
                  <span className="ml-4 shrink-0 p-1 rounded-full bg-surface text-primary">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 md:p-6 pt-0 border-t border-border text-text-muted leading-relaxed text-sm md:text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
