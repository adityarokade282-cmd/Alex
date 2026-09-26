import { Check, ArrowRight } from 'lucide-react';
import { pricingPlans } from '@/data';
import { useReveal } from '@/hooks';

export default function Pricing() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-brand-purple/5 blur-[150px] rounded-full" />

      <div className="container-max section-pad relative z-10">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} text-center mb-16`}>
          <span className="section-label">Pricing</span>
          <h2 className="mt-5 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-balance">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-balance">
            Choose a package that fits your needs. Custom quotes available for unique requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} onCta={scrollToContact} />
          ))}
        </div>

        <p className="text-center text-xs text-slate-600 mt-8">
          Prices are starting points. Final pricing depends on project scope and complexity.
        </p>
      </div>
    </section>
  );
}

function PricingCard({
  plan,
  index,
  onCta,
}: {
  plan: (typeof pricingPlans)[number];
  index: number;
  onCta: () => void;
}) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} relative group glass p-8 flex flex-col ${
        plan.highlighted
          ? 'border-brand-blue/30 bg-gradient-brand-soft lg:scale-105'
          : 'glass-hover'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {plan.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-brand text-white text-xs font-semibold tracking-wide shadow-lg shadow-brand-blue/30">
          MOST POPULAR
        </span>
      )}

      <h3 className="font-display font-bold text-sm tracking-widest text-slate-400">
        {plan.name}
      </h3>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="font-display font-bold text-4xl text-white">{plan.price}</span>
      </div>

      <ul className="mt-6 space-y-3 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span
              className={`flex items-center justify-center w-5 h-5 rounded-full shrink-0 mt-0.5 ${
                plan.highlighted ? 'bg-gradient-brand' : 'bg-white/[0.06]'
              }`}
            >
              <Check className={`w-3 h-3 ${plan.highlighted ? 'text-white' : 'text-brand-blue-light'}`} />
            </span>
            <span className="text-sm text-slate-300">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onCta}
        className={`mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm transition-all duration-300 group/btn ${
          plan.highlighted
            ? 'bg-gradient-brand text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-[1.02]'
            : 'border border-white/15 text-slate-200 hover:border-white/30 hover:bg-white/5'
        } active:scale-95`}
      >
        Get Started
        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
      </button>
    </div>
  );
}
