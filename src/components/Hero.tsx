import { ArrowRight, Sparkles, MapPin } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-brand-blue/10 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-brand-purple/10 blur-[120px]" />

      <div className="container-max section-pad relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6 animate-fade-in">
              <Sparkles className="w-3.5 h-3.5 text-brand-blue-light" />
              <span className="text-xs font-medium tracking-wider text-slate-300">
                AI & NO-CODE WEB DEVELOPER
              </span>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] text-balance animate-fade-up">
              Hi, I'm Alex —{' '}
              <span className="gradient-text">I Build Modern Websites with AI & No-Code</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
              I help businesses, creators and professionals build modern, responsive and
              professional websites without traditional coding.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <button onClick={() => scrollTo('projects')} className="btn-primary group">
                View My Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button onClick={() => scrollTo('contact')} className="btn-ghost">
                Let's Work Together
              </button>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-slate-500 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.45s' }}>
              <MapPin className="w-4 h-4 text-brand-blue-light" />
              <span>Maharashtra, India</span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span>Available for freelance work</span>
            </div>
          </div>

          {/* Right: avatar/profile */}
          <div className="flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              {/* Rotating ring */}
              <div className="absolute inset-0 -m-8 rounded-full border border-dashed border-white/[0.08] animate-spin-slow" />
              {/* Pulse rings */}
              <div className="absolute inset-0 -m-4 rounded-full border border-brand-blue/20 animate-pulse-ring" />
              <div className="absolute inset-0 -m-4 rounded-full border border-brand-purple/20 animate-pulse-ring" style={{ animationDelay: '1.5s' }} />

              {/* Avatar container */}
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full glass flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-brand opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-950/60" />
                <div className="relative flex items-center justify-center w-44 h-44 sm:w-52 sm:h-52 lg:w-60 lg:h-60 rounded-full bg-gradient-brand p-[3px] animate-float">
                  <div className="w-full h-full rounded-full bg-ink-900 flex items-center justify-center">
                    <span className="font-display font-bold text-6xl sm:text-7xl gradient-text">AX</span>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-2 -right-4 glass px-3 py-2 rounded-xl flex items-center gap-2 animate-float" style={{ animationDelay: '0.5s' }}>
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-medium text-slate-300">Open for work</span>
              </div>
              <div className="absolute -bottom-2 -left-4 glass px-3 py-2 rounded-xl flex items-center gap-2 animate-float" style={{ animationDelay: '1s' }}>
                <Sparkles className="w-3.5 h-3.5 text-brand-purple-light" />
                <span className="text-xs font-medium text-slate-300">AI-Powered</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:block">
          <div className="flex flex-col items-center gap-2 text-slate-600">
            <span className="text-[10px] tracking-widest uppercase">Scroll</span>
            <div className="w-5 h-9 rounded-full border border-white/10 flex items-start justify-center p-1.5">
              <div className="w-1 h-2 rounded-full bg-brand-blue-light animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
