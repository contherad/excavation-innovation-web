
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Loader2 } from 'lucide-react';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after a short delay to trigger animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const parallaxElement = parallaxRef.current;
    const textElement = textRef.current;

    const handleScroll = () => {
      if (parallaxElement && textElement) {
        const scrollPosition = window.scrollY;
        parallaxElement.style.transform = `translateY(${scrollPosition * 0.4}px)`;
        textElement.style.transform = `translateY(${scrollPosition * 0.2}px)`;
        textElement.style.opacity = `${1 - Math.min(1, scrollPosition / 700)}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll reveal effect
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
      {/* Video Background */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 bg-black"
        style={{
          height: '120%',
          top: '-10%',
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute min-w-full min-h-full object-cover"
          >
            <source src="https://player.vimeo.com/external/517090081.hd.mp4?s=80e097f68be548f70c9c3d5ad3381995b7767e31&profile_id=175" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Gradient overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
          
          {/* Pattern overlay for texture */}
          <div className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAEklEQVQImWNgYGD4z0AswK4SAFXuAf8EPy+xAAAAAElFTkSuQmCC')] opacity-15"></div>
        </div>
      </div>

      {/* Loading effect overlay */}
      <div 
        className={`absolute inset-0 bg-black z-10 transition-opacity duration-1000 pointer-events-none ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
      >
        <div className="flex items-center justify-center h-full">
          <Loader2 className="animate-spin h-10 w-10 text-red-600" />
        </div>
      </div>

      {/* Content */}
      <div 
        ref={textRef}
        className={`relative h-full flex flex-col items-center justify-center text-center px-4 pt-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="w-full max-w-5xl mx-auto">
          <span 
            className="inline-block reveal-on-scroll px-4 py-1.5 mb-8 text-xs font-medium tracking-widest uppercase rounded-full bg-black/30 text-white backdrop-blur-sm border border-white/20"
            style={{ transitionDelay: "200ms" }}
          >
            EXCAVATION & GRADING SPECIALISTS
          </span>
          
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl reveal-on-scroll font-bold text-white mb-8 tracking-tight"
            style={{ 
              transitionDelay: "400ms",
              textShadow: "0 4px 12px rgba(0,0,0,0.5)"
            }}
          >
            Building Strong <span className="text-red-600">Foundations</span><br /> 
            For Utah Since 1997
          </h1>
          
          <p 
            className="text-xl md:text-2xl reveal-on-scroll text-white/90 max-w-2xl mx-auto mb-12"
            style={{ 
              transitionDelay: "600ms",
              textShadow: "0 2px 6px rgba(0,0,0,0.5)"
            }}
          >
            Professional excavation, grading, utilities, and concrete services 
            for residential and commercial projects throughout the Wasatch Front.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row reveal-on-scroll items-center justify-center gap-6"
            style={{ transitionDelay: "800ms" }}
          >
            <a 
              href="#contact" 
              className="relative overflow-hidden group rounded-md px-8 py-4 font-medium bg-red-600 text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20 w-full sm:w-auto"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-[shine_1.5s_ease]"></span>
              Request a Quote
            </a>
            <a 
              href="#services" 
              className="relative overflow-hidden group px-8 py-4 rounded-md font-medium bg-black/30 backdrop-blur-md text-white border border-white/20 hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:animate-[shine_1.5s_ease]"></span>
              Our Services
            </a>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-16 max-w-3xl mx-auto reveal-on-scroll"
            style={{ transitionDelay: "1000ms" }}
          >
            <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-lg p-4 text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-600">25+</div>
              <div className="text-white/80 text-sm mt-1">Years Experience</div>
            </div>
            <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-lg p-4 text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-600">500+</div>
              <div className="text-white/80 text-sm mt-1">Projects Completed</div>
            </div>
            <div className="col-span-2 md:col-span-1 bg-black/30 backdrop-blur-md border border-white/10 rounded-lg p-4 text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-600">100%</div>
              <div className="text-white/80 text-sm mt-1">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <a 
          href="#services" 
          aria-label="Scroll to services"
          className="flex flex-col items-center space-y-2 text-white/70 hover:text-white transition-colors duration-300"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll Down</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
