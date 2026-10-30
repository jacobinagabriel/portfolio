import React, { useRef } from 'react';
import { Check, Snowflake } from 'lucide-react';
import { useInView } from '../hooks/useInView';

type Certification = {
  name: string;
  level?: string;
  // Set once earned; its presence is what fills the hexagon
  validity?: string;
};

type Track = {
  name: string;
  issuer: string;
  icon: React.ReactNode;
  certifications: Certification[];
};

// Every certification each vendor currently offers. Exams already scheduled
// for retirement are left out so the empty hexagons stay reachable.
const tracks: Track[] = [
  {
    name: 'AWS',
    issuer: 'Amazon Web Services',
    icon: <img src="/assets/amazon_aws-icon.svg" alt="" className="w-8 h-8 object-contain" />,
    certifications: [
      { name: 'Cloud Practitioner', level: 'Foundational', validity: 'May 2026 – May 2028' },
      { name: 'AI Practitioner', level: 'Foundational' },
      { name: 'Solutions Architect', level: 'Associate' },
      { name: 'Developer', level: 'Associate' },
      { name: 'CloudOps Engineer', level: 'Associate' },
      { name: 'Data Engineer', level: 'Associate', validity: 'Sep 2026 – Sep 2029' },
      { name: 'Machine Learning Engineer', level: 'Associate' },
      { name: 'Solutions Architect', level: 'Professional' },
      { name: 'DevOps Engineer', level: 'Professional' },
      { name: 'Generative AI Developer', level: 'Professional' },
      { name: 'Security', level: 'Specialty' },
      { name: 'AI Business Strategist', level: 'Business' },
    ],
  },
  {
    name: 'dbt',
    issuer: 'dbt Labs',
    icon: <img src="/assets/dbt-icon.svg" alt="" className="w-8 h-8 object-contain" />,
    certifications: [
      { name: 'Developer', level: 'Analytics Engineering', validity: 'Feb 2026 – Feb 2028' },
      { name: 'Architect' },
    ],
  },
  {
    name: 'Snowflake',
    issuer: 'SnowPro',
    icon: <Snowflake aria-hidden="true" className="w-8 h-8 text-[#29b5e8]" />,
    certifications: [
      { name: 'SnowPro Core', level: 'Core' },
      { name: 'Architect', level: 'Advanced' },
      { name: 'Data Engineer', level: 'Advanced' },
      { name: 'MLOps Engineer', level: 'Advanced' },
      { name: 'Administrator', level: 'Advanced' },
      { name: 'Gen AI', level: 'Specialty' },
      { name: 'Native Apps', level: 'Specialty' },
    ],
  },
];

const Hexagon = ({ earned }: { earned: boolean }) => (
  <div className="relative w-16 h-[74px]">
    <svg viewBox="-3 -3 106 121.47" aria-hidden="true" className="w-full h-full">
      <polygon
        points="50,0 100,28.87 100,86.6 50,115.47 0,86.6 0,28.87"
        strokeWidth={4}
        strokeLinejoin="round"
        className={earned ? 'fill-accent stroke-accent' : 'fill-transparent stroke-ink-faint/70'}
      />
    </svg>
    {earned && (
      <Check aria-hidden="true" strokeWidth={3} className="absolute inset-0 m-auto w-7 h-7 text-ink-inverse" />
    )}
  </div>
);

const CertificationTile = ({ name, level, validity }: Certification) => {
  const earned = Boolean(validity);

  return (
    <li className="w-36 flex flex-col items-center text-center">
      <Hexagon earned={earned} />
      <h4 className={`text-sm font-medium leading-snug mt-3 ${earned ? 'text-ink-bright' : 'text-ink-muted'}`}>
        {name}
        <span className="sr-only">{earned ? ' — earned' : ' — not yet earned'}</span>
      </h4>
      {level && <p className="text-xs text-ink-faint mt-1">{level}</p>}
      {validity && (
        <span className="inline-block text-xs text-ink-link bg-patroclus-pine/55 px-2 py-1 rounded mt-2 whitespace-nowrap">
          {validity}
        </span>
      )}
    </li>
  );
};

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
            Credentials backing the cloud and transformation work. Filled hexagons are earned; the rest are on the roadmap.
          </p>
        </div>

        <div className="space-y-8">
          {tracks.map((track, index) => {
            const earnedCount = track.certifications.filter((certification) => certification.validity).length;

            return (
              <div
                key={track.name}
                className={`bg-surface p-4 sm:p-6 rounded-lg shadow-lg transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-8 border-b border-accent/20 pb-3">
                  {track.icon}
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold text-ink-bright">{track.name}</h3>
                    <p className="text-ink-muted text-sm">{track.issuer}</p>
                  </div>
                  <span className="ml-auto text-sm text-ink-muted whitespace-nowrap">
                    <span className="text-ink-link font-semibold">{earnedCount}</span> of {track.certifications.length} earned
                  </span>
                </div>

                <ul className="flex flex-wrap justify-center gap-x-2 gap-y-8">
                  {track.certifications.map((certification) => (
                    <CertificationTile key={`${certification.name}-${certification.level}`} {...certification} />
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
