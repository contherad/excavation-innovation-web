
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parallaxElement = parallaxRef.current;
    const textElement = textRef.current;

    const handleScroll = () => {
      if (parallaxElement && textElement) {
        const scrollPosition = window.scrollY;
        parallaxElement.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        textElement.style.transform = `translateY(${scrollPosition * 0.2}px)`;
        textElement.style.opacity = `${1 - Math.min(1, scrollPosition / 700)}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 bg-black"
        style={{
          backgroundImage: 'url(/lovable-uploads/34cc3d4e-07f7-441a-b1a7-ad87ce0b6939.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '120%',
          top: '-10%',
        }}
      >
        {/* Stronger overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div 
        ref={textRef}
        className="relative h-full flex flex-col items-center justify-center text-center px-4 pt-16"
      >
        <div className="w-full max-w-5xl mx-auto">
          <span className="inline-block reveal-on-scroll px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase rounded-full bg-white/20 text-white backdrop-blur-sm border border-white/30">
            Excavation & Grading Specialists
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl reveal-on-scroll font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            Building Strong Foundations<br /> For Utah Since 1997
          </h1>
          <p className="text-lg md:text-xl reveal-on-scroll text-white max-w-2xl mx-auto mb-10 drop-shadow-md">
            Professional excavation, grading, utilities, and concrete services 
            for residential and commercial projects throughout the Wasatch Front.
          </p>
          <div className="flex flex-col sm:flex-row reveal-on-scroll items-center justify-center gap-4">
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-md font-medium bg-rock-brown text-white button-hover transition-all w-full sm:w-auto"
            >
              Request a Quote
            </a>
            <a 
              href="#services" 
              className="px-8 py-3 rounded-md font-medium bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 transition-all w-full sm:w-auto"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" aria-label="Scroll to services">
          <ChevronDown className="h-8 w-8 text-white" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
