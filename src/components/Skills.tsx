import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const skillCategories = [
  {
    title: 'Tools & Platforms',
    skills: [
      {
        name: 'AWS',
        proficiency: 'Expert',
        logo: '/assets/amazon_aws-icon.svg'
      },
      {
        name: 'dbt',
        proficiency: 'Expert',
        logo: '/assets/dbt-icon.svg'
      },
      {
        name: 'Terraform',
        proficiency: 'Advanced',
        logo: '/assets/infrastructure-generic.svg'
      },
      {
        name: 'Git',
        proficiency: 'Intermediate',
        logo: '/assets/git-scm-icon.svg'
      }
    ]
  },
  {
    title: 'Programming & Databases',
    skills: [
      {
        name: 'SQL / PostgreSQL',
        proficiency: 'Expert',
        logo: '/assets/postgresql-icon.svg'
      },
      {
        name: 'Python',
        proficiency: 'Advanced',
        logo: '/assets/python-icon.svg'
      },
      {
        name: 'MongoDB',
        proficiency: 'Intermediate',
        logo: '/assets/mongodb-icon.svg'
      },
      {
        name: 'Spark',
        proficiency: 'Beginner',
        logo: '/assets/apache_spark-icon.svg'
      }
    ]
  },
  {
    title: 'Analytics & BI',
    skills: [
      {
        name: 'Metabase',
        proficiency: 'Expert',
        logo: '/assets/metabase-icon.svg'
      },
      {
        name: 'HubSpot',
        proficiency: 'Expert',
        logo: '/assets/hubspot-icon.svg'
      },
      {
        name: 'Power BI',
        proficiency: 'Advanced',
        logo: '/assets/power-bi-icon.svg'
      },
      {
        name: 'Superset',
        proficiency: 'Intermediate',
        logo: '/assets/apache-superset-icon.svg'
      },
      {
        name: 'Looker',
        proficiency: 'Beginner',
        logo: '/assets/looker-icon.svg'
      }
    ]
  }
];



const SkillCard = ({logo, name, proficiency }: { logo:string; name: string; proficiency: string }) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 p-3 bg-raised rounded-lg transition-all duration-300 hover:bg-raised/80">
      <div className="flex items-center min-w-0">
        <img src={logo} alt={`${name} logo`} className="w-8 h-8 object-contain flex-shrink-0"></img>
        <span className="text-ink-bright font-medium px-3 min-w-0 break-words">{name}</span>
      </div>
      <span className={`text-sm px-2 py-1 rounded flex-shrink-0 whitespace-nowrap ml-auto ${
        proficiency === 'Expert' ? 'bg-patroclus-sage/60 text-ink-bright' :
        proficiency === 'Advanced' ? 'bg-patroclus-pine/55 text-ink-link' :
        proficiency === 'Intermediate' ? 'bg-patroclus-bark/60 text-ink-warm' :
        'bg-patroclus-taupe/50 text-ink-muted'
      }`}>
        {proficiency}
      </span>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-abyss relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ink-bright mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          <p className="text-ink-muted mt-6 max-w-2xl mx-auto">
            The stack I build on day to day — cloud infrastructure and transformation first, then the languages and the tools the business reads the data through.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`bg-surface p-6 rounded-lg shadow-lg transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <h3 className="text-xl font-semibold text-ink-bright mb-6 border-b border-accent/20 pb-2">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard 
                    key={skillIndex}
                    name={skill.name}
                    logo={skill.logo}
                    proficiency={skill.proficiency}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;