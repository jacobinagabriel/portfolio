import React, { useLayoutEffect, useRef, useState } from 'react';
import { Snowflake } from 'lucide-react';
import { useInView } from '../hooks/useInView';

type Certification = {
  name: string;
  level?: string;
  // Set once earned; its presence is what makes the tile show its badge
  validity?: string;
  badge?: string;
  // How the badge fills the tile: AWS badges are already hexagons, dbt's is not
  badgeShape?: 'hexagon' | 'free';
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
      { name: 'Cloud Practitioner', level: 'Foundational', validity: 'May 2026 – May 2028', badge: '/assets/aws-cloud-practitioner-badge.png', badgeShape: 'hexagon' },
      { name: 'AI Practitioner', level: 'Foundational' },
      { name: 'Solutions Architect', level: 'Associate' },
      { name: 'Developer', level: 'Associate' },
      { name: 'CloudOps Engineer', level: 'Associate' },
      { name: 'Data Engineer', level: 'Associate', validity: 'Sep 2026 – Sep 2029', badge: '/assets/aws-data-engineer-badge.png', badgeShape: 'hexagon' },
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
      { name: 'Developer', level: 'Analytics Engineering', validity: 'Feb 2026 – Feb 2028', badge: '/assets/dbt-developer-badge.webp', badgeShape: 'free' },
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

const HEX_POINTS = '50,0 100,28.87 100,86.6 50,115.47 0,86.6 0,28.87';

// The AWS badge PNGs are 340px squares whose hexagon spans x 24–316, y 2–338
const AWS_BADGE = { size: 340, left: 24, top: 2, height: 336 };

const CertificationTile = ({
  certification,
  width,
  height,
}: {
  certification: Certification;
  width: number;
  height: number;
}) => {
  const { name, level, validity, badge, badgeShape } = certification;
  const earned = Boolean(validity);

  let content: React.ReactNode;
  if (earned && badge && badgeShape === 'hexagon') {
    const scale = height / AWS_BADGE.height;
    content = (
      <img
        src={badge}
        alt=""
        loading="lazy"
        draggable={false}
        className="absolute max-w-none"
        style={{
          width: AWS_BADGE.size * scale,
          height: AWS_BADGE.size * scale,
          left: -AWS_BADGE.left * scale,
          top: -AWS_BADGE.top * scale,
        }}
      />
    );
  } else if (earned && badge) {
    content = (
      <>
        <svg viewBox="0 0 100 115.47" aria-hidden="true" className="absolute inset-0 w-full h-full">
          <polygon points={HEX_POINTS} className="fill-ink-bright" />
        </svg>
        <img
          src={badge}
          alt=""
          loading="lazy"
          draggable={false}
          className="absolute inset-0 m-auto object-contain"
          style={{ width: width * 0.8, height: width * 0.8 }}
        />
      </>
    );
  } else {
    content = (
      <>
        <svg viewBox="-2 -2 104 119.47" aria-hidden="true" className="absolute inset-0 w-full h-full">
          <polygon
            points={HEX_POINTS}
            strokeWidth={2.5}
            strokeLinejoin="round"
            className="fill-raised/40 stroke-ink-faint/70"
          />
        </svg>
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
          style={{ padding: `${height * 0.2}px ${width * 0.15}px` }}
        >
          <span
            className="font-semibold text-ink-muted leading-tight"
            style={{ fontSize: width >= 120 ? 13 : 11 }}
          >
            {name}
          </span>
          {level && (
            <span className="mt-1.5 text-[9px] font-medium uppercase tracking-widest text-ink-faint leading-tight">
              {level}
            </span>
          )}
        </div>
      </>
    );
  }

  return (
    <div
      className="relative"
      style={{ width, height }}
      title={earned ? `${name} — ${validity}` : undefined}
    >
      {content}
      <span className="sr-only">
        {name}
        {level ? `, ${level}` : ''} — {earned ? `earned, valid ${validity}` : 'not yet earned'}
      </span>
    </div>
  );
};

const GAP = 6;

const Honeycomb = ({ certifications }: { certifications: Certification[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(1000);

  useLayoutEffect(() => {
    const element = containerRef.current;
    if (!element) return;
    setContainerWidth(element.clientWidth);
    const observer = new ResizeObserver(([entry]) => setContainerWidth(entry.contentRect.width));
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const width = containerWidth < 560 ? 104 : 128;
  const height = (width * 2) / Math.sqrt(3);
  const pitchX = width + GAP;
  const pitchY = (pitchX * Math.sqrt(3)) / 2;

  // Fill each row evenly, shifting every other row by half a tile
  const total = certifications.length;
  const fitsOneRow = total * pitchX <= containerWidth;
  const maxPerRow = Math.max(1, Math.floor((containerWidth - pitchX / 2) / pitchX));
  const rows = fitsOneRow ? 1 : Math.ceil(total / maxPerRow);
  const perRow = Math.ceil(total / rows);

  const blockWidth = perRow * pitchX + (rows > 1 ? pitchX / 2 : 0) - GAP;
  const blockHeight = (rows - 1) * pitchY + height;

  return (
    <div ref={containerRef} className="w-full">
      <ul className="relative mx-auto" style={{ width: blockWidth, height: blockHeight }}>
        {certifications.map((certification, index) => {
          const row = Math.floor(index / perRow);
          const column = index % perRow;
          return (
            <li
              key={`${certification.name}-${certification.level}`}
              className="absolute"
              style={{ left: column * pitchX + (row % 2 ? pitchX / 2 : 0), top: row * pitchY }}
            >
              <CertificationTile certification={certification} width={width} height={height} />
            </li>
          );
        })}
      </ul>
    </div>
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

                <Honeycomb certifications={track.certifications} />

                {earnedCount > 0 && (
                  <p className="mt-6 text-center text-xs text-ink-muted">
                    <span className="text-ink-faint">Earned: </span>
                    {track.certifications
                      .filter((certification) => certification.validity)
                      .map((certification) => `${certification.name} (${certification.validity})`)
                      .join(' · ')}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
