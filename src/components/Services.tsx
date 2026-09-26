import { services } from '@/data';
import { useReveal } from '@/hooks';

export default function Services() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-purple/5 blur-[150px] rounded-full" />

      <div className="container-max section-pad relative z-10">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} text-center mb-16`}>
          <span className="section-label">Services</span>
          <h2 className="mt-5 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-balance">
            What I <span className="gradient-text">Can Build</span> For You
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-balance">
            From simple business sites to AI-powered platforms, I deliver modern web solutions
            tailored to your needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            const delay = (i % 4) + 1;
            return (
              <ServiceCard key={service.title} service={service} Icon={Icon} delayClass={`reveal-delay-${delay}`} index={i} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  Icon,
  delayClass,
  index,
}: {
  service: (typeof services)[number];
  Icon: (typeof services)[number]['icon'];
  delayClass: string;
  index: number;
}) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${delayClass} ${isVisible ? 'is-visible' : ''} group glass glass-hover p-6 flex flex-col gap-4`}
      style={{ transitionDelay: `${(index % 4) * 80}ms` }}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-brand-soft border border-white/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-gradient-brand">
        <Icon className="w-6 h-6 text-brand-blue-light transition-colors group-hover:text-white" />
      </div>
      <h3 className="font-display font-semibold text-lg text-white">{service.title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{service.description}</p>
    </div>
  );
}
