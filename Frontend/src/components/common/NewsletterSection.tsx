import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Button from '../ui/Button';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-20 bg-surface-white border-t border-border">
      <Container>
        <Card hover={false} className="bg-surface p-8 md:p-12 relative overflow-hidden border-none max-w-4xl mx-auto shadow-sm">
          {/* Accent decoration */}
          <div className="absolute right-0 top-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-text-muted text-sm md:text-base leading-relaxed">
                Stay updated with the latest trends in software engineering, IT consulting insights, and staffing strategies. No spam, unsubscribe anytime.
              </p>
            </div>
            <div>
              {submitted ? (
                <div className="flex items-center gap-3 p-4 bg-emerald-50 text-emerald-800 rounded-lg border border-emerald-100" role="alert">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                  <div>
                    <p className="font-bold text-sm">Successfully Subscribed!</p>
                    <p className="text-xs text-emerald-700">Thank you for subscribing to the LUCID newsletter.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your work email"
                      required
                      aria-label="Email address for newsletter subscription"
                      disabled={loading}
                    />
                  </div>
                  <Button type="submit" variant="primary" disabled={loading} className="whitespace-nowrap">
                    {loading ? 'Subscribing...' : 'Subscribe'}
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
