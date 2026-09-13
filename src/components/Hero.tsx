import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const introRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add('animate-fade-in');
    }

    setTimeout(() => {
      if (introRef.current) {
        introRef.current.classList.add('animate-fade-in');
      }
      if (subtitleRef.current) {
        subtitleRef.current.classList.add('animate-fade-in');
      }
    }, 400);

    setTimeout(() => {
      if (ctaRef.current) {
        ctaRef.current.classList.add('animate-fade-in');
      }
    }, 800);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-0">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-deep to-deep/90"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-deep to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-8">
            <p className="text-ink-link font-mono opacity-0 transition-opacity duration-1000" ref={introRef}>Hi, my name is</p>
            <h1 className="text-4xl md:text-6xl font-bold text-ink-bright leading-tight opacity-0 transition-opacity duration-1000" ref={titleRef}>
              <span className="block">Gabriel Jacobina</span>
              <span className="block text-ink-muted mt-2">Data Engineer</span>
            </h1>

            <p className="text-ink-muted text-lg max-w-xl opacity-0 transition-opacity duration-1000" ref={subtitleRef}>
              AWS &amp; dbt certified data engineer at GCB Investimentos, building scalable data solutions.
              Three years in the financial sector, an engineering degree from USP and a postgraduate degree in
              data engineering from FIAP. I own the group's data lake and data warehouse on AWS, and brought in
              dbt to build the governed layer the business reports from.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4 opacity-0 transition-opacity duration-1000" ref={ctaRef}>
              <button
                className="group bg-transparent hover:bg-accent/10 text-ink-link border border-accent px-6 py-3 rounded-md transition-all duration-300 flex items-center space-x-2"
              >
                <a
                  href="https://jacobinagabriel.github.io/resume/gabriel-jacobina.pdf"
                  download="gabriel-jacobina.pdf"
                  className="flex items-center space-x-2"
                >
                  Download CV
                </a>
              </button>
              <button
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-transparent hover:bg-accent/10 text-ink-link border border-accent px-6 py-3 rounded-md transition-all duration-300 flex items-center space-x-2"
              >
                View My Skills
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="w-full h-full max-w-md mx-auto">
              <div className="aspect-square rounded-full bg-surface absolute inset-0 animate-morph"></div>
              <div className="aspect-square rounded-full bg-accent/10 absolute inset-0 animate-morph animation-delay-2000"></div>
              <div className="aspect-square rounded-full border-2 border-accent/20 absolute inset-0 animate-spin-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
