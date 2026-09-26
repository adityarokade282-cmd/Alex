import { Code2, Mail, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'process', label: 'Process' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

const WHATSAPP_NUMBER = '919999999999';
const EMAIL = 'alex@example.com';

export default function Footer() {
  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-white/[0.06] pt-16 pb-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-brand-blue/5 blur-[120px] rounded-full" />

      <div className="container-max section-pad relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-brand">
                <Code2 className="w-5 h-5 text-white" />
              </span>
              <span className="font-display font-bold text-base text-white">
                Alex
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Freelance AI Website Developer & No-Code Web Designer building modern, responsive
              websites for businesses worldwide.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center justify-center w-9 h-9 rounded-lg glass glass-hover"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-slate-400" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg glass glass-hover"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-slate-400" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg glass glass-hover"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="flex items-center gap-1 text-sm text-slate-400 hover:text-brand-blue-light transition-colors text-left"
                >
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 transition-all" />
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Get in Touch</h4>
            <p className="text-sm text-slate-500 mb-3">
              Maharashtra, India
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="block text-sm text-slate-400 hover:text-brand-blue-light transition-colors mb-2"
            >
              {EMAIL}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-brand-blue-light transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 text-center sm:text-left">
            © 2026 Alex. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Built with AI & No-Code tools
          </p>
        </div>
      </div>
    </footer>
  );
}
