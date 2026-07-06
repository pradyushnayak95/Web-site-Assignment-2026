import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Select from '../ui/Select';
import Button from '../ui/Button';
import { submitContactForm } from '../../api/contactApi';

interface ContactFormProps {
  defaultSubject?: string;
  className?: string;
}

const serviceOptions = [
  { value: 'software-development', label: 'Software Development' },
  { value: 'manpower-solutions', label: 'Manpower Resource Solutions' },
  { value: 'it-consulting', label: 'IT Consulting' },
  { value: 'digital-solutions', label: 'Digital Solutions' },
  { value: 'other', label: 'General / Other Inquiry' },
];

export default function ContactForm({ defaultSubject = '', className }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: defaultSubject,
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await submitContactForm(formData);
      if (response.success) {
        setSuccess(response.message);
        setFormData({ name: '', email: '', phone: '', service: defaultSubject, message: '' });
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('A network error occurred. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card hover={false} padding="lg" className={className}>
      {success && (
        <div className="mb-6 flex items-start gap-3 p-4 bg-emerald-50 text-emerald-800 rounded-lg border border-emerald-100" role="alert">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <span className="text-sm font-semibold">{success}</span>
        </div>
      )}

      {error && (
        <div className="mb-6 flex items-start gap-3 p-4 bg-red-50 text-red-800 rounded-lg border border-red-100" role="alert">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <span className="text-sm font-semibold">{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Full Name *"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            disabled={loading}
          />
          <Input
            label="Work Email *"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            required
            disabled={loading}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Phone Number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            disabled={loading}
          />
          <Select
            label="Interested In"
            name="service"
            value={formData.service}
            onChange={handleChange}
            options={serviceOptions}
            placeholder="Select a service option"
            disabled={loading}
          />
        </div>

        <Textarea
          label="Your Message *"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project requirements or staffing needs..."
          required
          disabled={loading}
        />

        <Button type="submit" variant="primary" disabled={loading} className="w-full">
          {loading ? 'Submitting Form...' : 'Send Message'}
          <Send className="w-4 h-4" />
        </Button>
      </form>
    </Card>
  );
}
