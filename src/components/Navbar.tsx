import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { useScrollPosition, useActiveSection } from '@/hooks';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'process', label: 'Process' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

const sectionIds = navLinks.map((l) => l.id);

export default function Navbar() {
  const scrolled = useScrollPosition();
  const active = useActiveSection(sectionIds);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ink-950/80 backdrop-blur-xl border-b border-white/[0.06] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="container-max section-pad flex items-center justify-between">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 group"
            aria-label="Alex home"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-brand shadow-lg shadow-brand-blue/20 transition-transform group-hover:scale-110">
              <Code2 className="w-5 h-5 text-white" />
            </span>
            <span className="font-display font-bold text-base tracking-tight text-white">
              Alex<span className="gradient-text">.</span>
            </span>
          </button>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${
                    active === link.id
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-gradient-brand transition-all duration-300 ${
                      active === link.id ? 'w-6 opacity-100' : 'w-0 opacity-0'
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <button
              onClick={() => handleNavClick('contact')}
              className="btn-primary text-xs px-5 py-2.5"
            >
              Let's Talk
            </button>
          </div>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 text-white"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-400 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-ink-950/95 backdrop-blur-xl"
          onClick={() => setMobileOpen(false)}
        />
        <nav className="relative flex flex-col items-center justify-center h-full gap-2 px-8">
          {navLinks.map((link, i) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              style={{ transitionDelay: mobileOpen ? `${i * 40 + 100}ms` : '0ms' }}
              className={`text-2xl font-display font-semibold transition-all duration-500 ${
                mobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              } ${active === link.id ? 'gradient-text' : 'text-slate-300'}`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            style={{ transitionDelay: mobileOpen ? `${navLinks.length * 40 + 100}ms` : '0ms' }}
            className={`btn-primary mt-6 transition-all duration-500 ${
              mobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Let's Work Together
          </button>
        </nav>
      </div>
    </>
  );
}
