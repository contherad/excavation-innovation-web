
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '120%',
          top: '-10%',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div 
        ref={textRef}
        className="relative h-full flex flex-col items-center justify-center text-center px-4 pt-16"
      >
        <div className="w-full max-w-5xl mx-auto">
          <span className="inline-block reveal-on-scroll px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase rounded-full bg-white/10 text-white/90 backdrop-blur-sm border border-white/20">
            Excavation & Grading Specialists
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl reveal-on-scroll font-bold text-white mb-6 tracking-tight">
            Building Strong Foundations<br /> For Utah Since 1997
          </h1>
          <p className="text-lg md:text-xl reveal-on-scroll text-white/80 max-w-2xl mx-auto mb-10">
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
              className="px-8 py-3 rounded-md font-medium bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 transition-all w-full sm:w-auto"
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
