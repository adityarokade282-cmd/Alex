import { useState, type FormEvent } from 'react';
import { Send, MessageCircle, Mail, Linkedin, Instagram, MapPin, CheckCircle2 } from 'lucide-react';
import { projectTypes, budgetRanges } from '@/data';
import { useReveal } from '@/hooks';

const WHATSAPP_NUMBER = '919999999999';
const EMAIL = 'alex@example.com';

interface FormData {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  projectType: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const initialData: FormData = {
  name: '',
  email: '',
  phone: '',
  businessName: '',
  projectType: projectTypes[0],
  budget: budgetRanges[0],
  message: '',
};

export default function Contact() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please describe your project';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`New Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nBusiness: ${formData.businessName}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setFormData(initialData);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi Alex, I'm interested in discussing a website project."
  )}`;

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/5 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-purple/5 blur-[150px] rounded-full" />

      <div className="container-max section-pad relative z-10">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} text-center mb-16`}>
          <span className="section-label">Contact</span>
          <h2 className="mt-5 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-balance">
            Let's <span className="gradient-text">Build Together</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-balance">
            Tell me about your project and I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="glass glass-hover p-5 flex items-center gap-4 group"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-brand-soft border border-white/10 shrink-0">
                <Mail className="w-5 h-5 text-brand-blue-light" />
              </div>
              <div>
                <h4 className="text-xs text-slate-500 uppercase tracking-wider">Email</h4>
                <p className="text-sm font-medium text-white group-hover:text-brand-blue-light transition-colors">
                  {EMAIL}
                </p>
              </div>
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover p-5 flex items-center gap-4 group"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-brand-soft border border-white/10 shrink-0">
                <MessageCircle className="w-5 h-5 text-brand-blue-light" />
              </div>
              <div>
                <h4 className="text-xs text-slate-500 uppercase tracking-wider">WhatsApp</h4>
                <p className="text-sm font-medium text-white group-hover:text-brand-blue-light transition-colors">
                  Chat with me
                </p>
              </div>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover p-5 flex items-center gap-4 group"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-brand-soft border border-white/10 shrink-0">
                <Linkedin className="w-5 h-5 text-brand-blue-light" />
              </div>
              <div>
                <h4 className="text-xs text-slate-500 uppercase tracking-wider">LinkedIn</h4>
                <p className="text-sm font-medium text-white group-hover:text-brand-blue-light transition-colors">
                  Connect with me
                </p>
              </div>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover p-5 flex items-center gap-4 group"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-brand-soft border border-white/10 shrink-0">
                <Instagram className="w-5 h-5 text-brand-blue-light" />
              </div>
              <div>
                <h4 className="text-xs text-slate-500 uppercase tracking-wider">Instagram</h4>
                <p className="text-sm font-medium text-white group-hover:text-brand-blue-light transition-colors">
                  Follow my work
                </p>
              </div>
            </a>

            <div className="glass p-5 flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-brand-soft border border-white/10 shrink-0">
                <MapPin className="w-5 h-5 text-brand-blue-light" />
              </div>
              <div>
                <h4 className="text-xs text-slate-500 uppercase tracking-wider">Location</h4>
                <p className="text-sm font-medium text-white">Maharashtra, India</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass p-6 lg:p-8 flex flex-col gap-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-4">
                <FormField
                  label="Name"
                  required
                  error={errors.name}
                >
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Your name"
                    className="form-input"
                    aria-required="true"
                  />
                </FormField>

                <FormField
                  label="Email"
                  required
                  error={errors.email}
                >
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="you@email.com"
                    className="form-input"
                    aria-required="true"
                  />
                </FormField>

                <FormField label="Phone">
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="+91 99999 99999"
                    className="form-input"
                  />
                </FormField>

                <FormField label="Business Name">
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => handleChange('businessName', e.target.value)}
                    placeholder="Your business"
                    className="form-input"
                  />
                </FormField>

                <FormField label="Project Type">
                  <select
                    value={formData.projectType}
                    onChange={(e) => handleChange('projectType', e.target.value)}
                    className="form-input"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-ink-800">
                        {type}
                      </option>
                    ))}
                  </select>
                </FormField>

                <FormField label="Budget">
                  <select
                    value={formData.budget}
                    onChange={(e) => handleChange('budget', e.target.value)}
                    className="form-input"
                  >
                    {budgetRanges.map((range) => (
                      <option key={range} value={range} className="bg-ink-800">
                        {range}
                      </option>
                    ))}
                  </select>
                </FormField>
              </div>

              <FormField label="Message" required error={errors.message}>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Tell me about your project..."
                  rows={4}
                  className="form-input resize-none"
                  aria-required="true"
                />
              </FormField>

              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <button type="submit" className="btn-primary flex-1 group">
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  Send Inquiry
                </button>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost flex-1"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>

              {submitted && (
                <div className="flex items-center gap-2 text-sm text-green-400 mt-2 animate-fade-in">
                  <CheckCircle2 className="w-4 h-4" />
                  Thank you! Your inquiry has been prepared. I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          color: #f1f5f9;
          font-size: 0.875rem;
          transition: all 0.3s ease;
          outline: none;
        }
        .form-input::placeholder {
          color: #64748b;
        }
        .form-input:focus {
          border-color: rgba(59,130,246,0.5);
          background: rgba(255,255,255,0.05);
          box-shadow: 0 0 0 3px rgba(59,130,246,0.1);
        }
        .form-input:hover {
          border-color: rgba(255,255,255,0.15);
        }
      `}</style>
    </section>
  );
}

function FormField({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-slate-400">
        {label}
        {required && <span className="text-brand-blue-light ml-0.5">*</span>}
      </span>
      {children}
      {error && <span className="text-xs text-red-400">{error}</span>}
    </label>
  );
}
