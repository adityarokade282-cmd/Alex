import { ArrowRight, Sparkles } from 'lucide-react';
import { useReveal } from '@/hooks';

export default function CTA() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-16 lg:py-24">
      <div className="container-max section-pad relative z-10">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'is-visible' : ''} relative glass overflow-hidden p-10 lg:p-16 text-center`}
        >
          {/* Glow effects */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-blue/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-purple/10 blur-[100px] rounded-full" />
          <div className="absolute inset-0 bg-gradient-brand opacity-[0.03]" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
              <Sparkles className="w-3.5 h-3.5 text-brand-blue-light" />
              <span className="text-xs font-medium tracking-wider text-slate-300">
                READY TO START?
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-balance">
              Have a project in mind?
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto text-balance">
              Let's build something amazing together.
            </p>

            <button
              onClick={scrollToContact}
              className="btn-primary mt-8 group text-base px-8 py-4"
            >
              Let's Work Together
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
