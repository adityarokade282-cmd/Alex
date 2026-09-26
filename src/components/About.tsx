import { CheckCircle2, MapPin, Mail, Sparkles } from 'lucide-react';
import { useReveal } from '@/hooks';

export default function About() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="container-max section-pad relative z-10">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
          {/* Left: visual */}
          <div className="relative">
            <div className="glass p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-blue/10 blur-[80px] rounded-full" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-purple/10 blur-[80px] rounded-full" />

              <div className="relative flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 -m-3 rounded-full border border-dashed border-white/[0.08] animate-spin-slow" />
                  <div className="w-28 h-28 rounded-full bg-gradient-brand p-[3px]">
                    <div className="w-full h-full rounded-full bg-ink-900 flex items-center justify-center">
                      <span className="font-display font-bold text-4xl gradient-text">AX</span>
                    </div>
                  </div>
                </div>
                <h3 className="font-display font-bold text-xl text-white">Alex</h3>
                <p className="text-sm text-brand-blue-light mt-1">Freelance AI Website Developer</p>

                <div className="flex items-center gap-2 mt-3 text-xs text-slate-500">
                  <MapPin className="w-3.5 h-3.5" />
                  Maharashtra, India
                </div>

                <div className="flex items-center gap-2 mt-4 px-4 py-2 rounded-full glass">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-medium text-slate-300">Available for new projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div>
            <span className="section-label">About Me</span>
            <h2 className="mt-5 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-balance">
              Building the web with <span className="gradient-text">AI & No-Code</span>
            </h2>
            <p className="mt-6 text-base text-slate-400 leading-relaxed">
              I'm Alex, a freelance AI website developer and no-code web designer. I
              create modern websites using AI-powered and no-code tools, focusing on clean design,
              responsive experiences and practical business solutions.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { icon: Sparkles, label: 'AI-Powered Approach', desc: 'Leveraging AI tools for faster, smarter builds' },
                { icon: CheckCircle2, label: 'No-Code Expert', desc: 'Building without traditional coding barriers' },
                { icon: Mail, label: 'Direct Communication', desc: 'You work directly with me, no middlemen' },
                { icon: MapPin, label: 'Local & Global', desc: 'Serving clients in India and worldwide' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-brand-soft border border-white/10 shrink-0">
                      <Icon className="w-5 h-5 text-brand-blue-light" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{item.label}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
