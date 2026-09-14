import React, { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Lorem Ipsum Sales Dashboard',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Lorem', 'Ipsum', 'Dolor'],
    demoLink: '/demo/sales-dashboard',
    isInternalDemo: true,
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useInView(cardRef, { threshold: 0.1 });
  const navigate = useNavigate();

  const handleDemoClick = (e: React.MouseEvent<HTMLAnchorElement>, demoLink: string) => {
    if (project.isInternalDemo) {
      e.preventDefault();
      navigate(demoLink);
    }
  };

  return (
    <div
      ref={cardRef}
      className={`bg-surface rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 ease-out hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-70"></div>
        <span className="absolute top-3 left-3 text-xs font-mono uppercase tracking-wide bg-accent text-ink-inverse px-2 py-1 rounded">
          Mock project
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-ink-bright mb-2">{project.title}</h3>
        <p className="text-ink-muted mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="text-xs bg-patroclus-bark/50 text-ink-warm px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-end mt-4">
          <a
            href={project.demoLink}
            onClick={(e) => handleDemoClick(e, project.demoLink)}
            target={project.isInternalDemo ? undefined : "_blank"}
            rel={project.isInternalDemo ? undefined : "noopener noreferrer"}
            className="text-ink-link hover:text-ink-bright flex items-center space-x-1 transition-colors"
          >
            <span>Live Demo</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-abyss relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ink-bright mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          <p className="text-ink-muted mt-6 max-w-2xl mx-auto">
            This section is still a work in progress — the card below is a placeholder with Lorem Ipsum
            content, kept only to show how real projects will be presented here.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
