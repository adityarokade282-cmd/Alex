import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data';
import { useReveal } from '@/hooks';

export default function Testimonials() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="testimonials" className="relative py-24 lg:py-32">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-blue/5 blur-[150px] rounded-full" />

      <div className="container-max section-pad relative z-10">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} text-center mb-16`}>
          <span className="section-label">Testimonials</span>
          <h2 className="mt-5 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-balance">
            Client <span className="gradient-text">Feedback</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-balance">
            These are placeholder testimonials for demonstration. They will be replaced with
            real client reviews soon.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[number];
  index: number;
}) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} group glass glass-hover p-7 flex flex-col gap-5 relative overflow-hidden`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Quote className="absolute top-5 right-5 w-10 h-10 text-white/[0.04] group-hover:text-white/[0.06] transition-colors" />

      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-brand-blue text-brand-blue" />
        ))}
      </div>

      <p className="text-sm text-slate-300 leading-relaxed flex-1 italic">
        "{testimonial.text}"
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
        <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-brand-soft border border-white/10">
          <span className="text-sm font-semibold text-brand-blue-light">{testimonial.initials}</span>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white">{testimonial.name}</h4>
          <p className="text-xs text-slate-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
