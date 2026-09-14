import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const certifications = [
  {
    name: 'AWS Certified Data Engineer – Associate',
    issuer: 'Amazon Web Services',
    validity: 'Sep 2026 – Sep 2029',
    logo: '/assets/aws-data-engineer-badge.png',
  },
  {
    name: 'dbt Certified Developer',
    issuer: 'dbt Labs',
    validity: 'Feb 2026 – Feb 2028',
    logo: '/assets/dbt-developer-badge.webp',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    validity: 'May 2026 – May 2028',
    logo: '/assets/aws-cloud-practitioner-badge.png',
  },
];

const Certifications = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section id="certifications" ref={sectionRef} className="py-20 bg-deep relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ink-bright mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          <p className="text-ink-muted mt-6 max-w-2xl mx-auto">
            Credentials backing the cloud and transformation work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((certification, index) => (
            <div
              key={certification.name}
              className={`flex items-start gap-4 bg-surface p-6 rounded-lg shadow-lg transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <img
                src={certification.logo}
                alt=""
                loading="lazy"
                width={340}
                height={340}
                className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 object-contain"
              />
              <div className="min-w-0">
                <h3 className="text-ink-bright font-medium">{certification.name}</h3>
                <p className="text-ink-muted text-sm mt-1">{certification.issuer}</p>

                <span className="inline-block text-xs text-ink-link bg-patroclus-pine/55 px-2 py-1 rounded mt-3">
                  {certification.validity}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
