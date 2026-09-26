import { useState, useMemo } from 'react';
import { ExternalLink, Filter } from 'lucide-react';
import { projects, projectCategories } from '@/data';
import { useReveal } from '@/hooks';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  const filtered = useMemo(
    () =>
      activeCategory === 'All'
        ? projects
        : projects.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-brand-blue/5 blur-[150px] rounded-full" />

      <div className="container-max section-pad relative z-10">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} text-center mb-12`}>
          <span className="section-label">Portfolio</span>
          <h2 className="mt-5 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-balance">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-balance">
            A selection of websites I've built across different industries using AI and no-code tools.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          <Filter className="w-4 h-4 text-slate-500 mr-1" />
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-brand text-white shadow-lg shadow-brand-blue/20'
                  : 'glass text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} group glass glass-hover overflow-hidden flex flex-col`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-ink-950/80 backdrop-blur-sm text-xs font-medium text-brand-blue-light border border-white/10">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <h3 className="font-display font-semibold text-lg text-white group-hover:text-brand-blue-light transition-colors">
          {project.name}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-1">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-xs text-slate-300"
            >
              {tool}
            </span>
          ))}
        </div>

        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-brand-blue-light hover:text-white transition-colors group/link pt-2"
        >
          Live Demo
          <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
}
