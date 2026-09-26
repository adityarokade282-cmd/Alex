import { processSteps } from '@/data';
import { useReveal } from '@/hooks';

export default function Process() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="process" className="relative py-24 lg:py-32">
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-brand-blue/5 blur-[150px] rounded-full" />

      <div className="container-max section-pad relative z-10">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} text-center mb-16`}>
          <span className="section-label">Process</span>
          <h2 className="mt-5 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-balance">
            How I <span className="gradient-text">Work</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-balance">
            A clear, proven workflow from first conversation to final launch.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {processSteps.map((step, i) => (
            <ProcessCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessCard({
  step,
  index,
}: {
  step: (typeof processSteps)[number];
  index: number;
}) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${index + 1} ${isVisible ? 'is-visible' : ''} relative group text-center`}
    >
      <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl glass glass-hover mx-auto mb-5">
        <span className="font-display font-bold text-xl gradient-text">{step.number}</span>
        <div className="absolute inset-0 rounded-2xl bg-gradient-brand opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
      </div>
      <h3 className="font-display font-semibold text-lg text-white mb-2">{step.title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
    </div>
  );
}
