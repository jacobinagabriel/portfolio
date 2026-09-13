import React, { useState, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Sales Performance Dashboard',
    description: 'Interactive dashboard showing key sales metrics and performance indicators for a retail company. Built using Tableau and SQL for data processing.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Tableau', 'SQL', 'Data Visualization'],
    demoLink: '/demo/sales-dashboard',
    githubLink: '#',
    category: 'visualization',
    isInternalDemo: true
  },
  {
    id: 2,
    title: 'Customer Segmentation Analysis',
    description: 'Used K-means clustering to segment customers based on purchasing behavior, helping marketing teams target specific customer groups effectively.',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Python', 'Machine Learning', 'Clustering'],
    demoLink: '#',
    githubLink: '#',
    category: 'machine-learning'
  },
  {
    id: 3,
    title: 'Market Basket Analysis',
    description: 'Applied association rule mining to identify product affinities and recommend complementary products to customers.',
    image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['R', 'Market Analysis', 'Association Rules'],
    demoLink: '#',
    githubLink: '#',
    category: 'data-analysis'
  },
  {
    id: 4,
    title: 'Sales Forecasting Model',
    description: 'Developed time series forecasting models to predict future sales volumes, helping inventory management and resource planning.',
    image: 'https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Python', 'Time Series', 'Forecasting'],
    demoLink: '#',
    githubLink: '#',
    category: 'machine-learning'
  },
  {
    id: 5,
    title: 'Financial Data Analysis',
    description: 'Comprehensive analysis of financial statements to identify trends, opportunities, and risks for investment decisions.',
    image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Excel', 'Financial Analysis', 'Reporting'],
    demoLink: '#',
    githubLink: '#',
    category: 'data-analysis'
  },
  {
    id: 6,
    title: 'Interactive Data Exploration Tool',
    description: 'Built a web-based tool allowing users to explore datasets through interactive visualizations and filters.',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['D3.js', 'JavaScript', 'Interactive Visualization'],
    demoLink: '#',
    githubLink: '#',
    category: 'visualization'
  }
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

        <div className="flex justify-between mt-4">
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

          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-link hover:text-ink-bright flex items-center space-x-1 transition-colors"
          >
            <span>Code</span>
            <Github size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-abyss relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ink-bright mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          <p className="text-ink-muted mt-6 max-w-2xl mx-auto">
            A selection of my recent data analysis and visualization projects. Each represents unique challenges and insights.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${filter === 'all' ? 'bg-accent text-ink-inverse font-medium' : 'bg-surface text-ink hover:bg-raised'}`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('data-analysis')}
            className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${filter === 'data-analysis' ? 'bg-accent text-ink-inverse font-medium' : 'bg-surface text-ink hover:bg-raised'}`}
          >
            Data Analysis
          </button>
          <button
            onClick={() => setFilter('visualization')}
            className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${filter === 'visualization' ? 'bg-accent text-ink-inverse font-medium' : 'bg-surface text-ink hover:bg-raised'}`}
          >
            Visualization
          </button>
          <button
            onClick={() => setFilter('machine-learning')}
            className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${filter === 'machine-learning' ? 'bg-accent text-ink-inverse font-medium' : 'bg-surface text-ink hover:bg-raised'}`}
          >
            Machine Learning
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;