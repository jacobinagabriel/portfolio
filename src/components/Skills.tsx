import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const skillCategories = [
  {
    title: 'Data Analysis & Visualization',
    skills: [
      {
        name: 'Metabase',
        proficiency: 'Expert',
        logo: "/assets/metabase-icon.svg"
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
  },
  {
    title: 'Programming & Databases',
    skills: [
      {
        name: 'SQL',
        proficiency: 'Expert',
        logo: '/assets/sql-database-generic.svg'
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
    title: 'Tools & Platforms',
    skills: [
      {
        name: 'Hubspot',
        proficiency: 'Expert',
        logo: '/assets/hubspot-icon.svg'
      },
      {
        name: 'Git',
        proficiency: 'Intermediate',
        logo: '/assets/git-scm-icon.svg'
      },
      {
        name: 'AWS/GCP',
        proficiency: 'Beginner',
        logo: '/assets/amazon_aws-icon.svg'
      }
    ]
  }
];



const SkillCard = ({logo, name, proficiency }: { logo:string; name: string; proficiency: string }) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 p-3 bg-raised rounded-lg transition-all duration-300 hover:bg-raised/80">
      <div className="flex items-center min-w-0">
        <img src={logo} alt={`${name} logo`} className="w-8 h-8 object-contain flex-shrink-0"></img>
        <span className="text-white font-medium px-3 min-w-0 break-words">{name}</span>
      </div>
      <span className={`text-sm px-2 py-1 rounded flex-shrink-0 whitespace-nowrap ml-auto ${
        proficiency === 'Expert' ? 'bg-accent-muted/40 text-accent-bright' :
        proficiency === 'Advanced' ? 'bg-accent-muted/25 text-accent' :
        proficiency === 'Intermediate' ? 'bg-ember/30 text-ember-light' :
        'bg-odysseus-taupe/40 text-parchment-dim'
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
    <section id="skills" ref={sectionRef} className="py-20 bg-deep relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          <p className="text-parchment-dim mt-6 max-w-2xl mx-auto">
            Proficient in industry-standard tools and technologies for data analysis, visualization, and insights generation.
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
              <h3 className="text-xl font-semibold text-white mb-6 border-b border-accent/20 pb-2">
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