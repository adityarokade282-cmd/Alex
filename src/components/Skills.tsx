import { useEffect, useState } from 'react';
import { skills, tools } from '@/data';
import { useReveal } from '@/hooks';

export default function Skills() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="skills" className="relative py-24 lg:py-32">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-purple/5 blur-[150px] rounded-full" />

      <div className="container-max section-pad relative z-10">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} text-center mb-16`}>
          <span className="section-label">Skills & Tools</span>
          <h2 className="mt-5 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-balance">
            My <span className="gradient-text">Expertise</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-balance">
            The skills and tools I use to bring modern websites to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Skills with progress bars */}
          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} />
            ))}
          </div>

          {/* Tools */}
          <div className="flex flex-col justify-center">
            <h3 className="font-display font-semibold text-lg text-white mb-6 text-center lg:text-left">
              Tools I Work With
            </h3>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {tools.map((tool, i) => (
                <ToolBadge key={tool} tool={tool} index={i} />
              ))}
            </div>

            <div className="mt-10 glass p-6">
              <h4 className="text-sm font-semibold text-white mb-3">How I combine them</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                I use AI tools like Bolt, Lovable and Google AI Studio to build websites faster,
                Canva for visual design, n8n for workflow automation, and ChatGPT for content and
                prompt engineering — delivering production-quality results efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBar({
  skill,
  index,
}: {
  skill: (typeof skills)[number];
  index: number;
}) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setWidth(skill.level), 100 + index * 80);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, index]);

  return (
    <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: `${index * 60}ms` }}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-slate-200">{skill.name}</span>
        <span className="text-xs text-slate-500 font-mono">{skill.level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/[0.04] overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-brand transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

function ToolBadge({ tool, index }: { tool: string; index: number }) {
  const { ref, isVisible } = useReveal<HTMLSpanElement>();

  return (
    <span
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} group inline-flex items-center gap-2 px-5 py-3 rounded-xl glass glass-hover cursor-default`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <span className="w-2 h-2 rounded-full bg-gradient-brand transition-transform group-hover:scale-150" />
      <span className="text-sm font-medium text-slate-200">{tool}</span>
    </span>
  );
}
