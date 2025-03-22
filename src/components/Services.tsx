
import React, { useEffect } from 'react';
import { Shovel, Truck, Pipette, Building, HardHat, Ruler } from 'lucide-react';

const services = [
  {
    title: 'Excavation',
    description: 'Complete site preparation including clearing, grubbing, and precision excavation for residential and commercial projects.',
    icon: <Shovel className="h-10 w-10" />,
  },
  {
    title: 'Grading',
    description: 'Expert grading services to ensure proper drainage and site preparation for construction projects of all sizes.',
    icon: <Ruler className="h-10 w-10" />,
  },
  {
    title: 'Utilities',
    description: 'Installation of water, sewer, and storm drain systems with careful attention to local codes and requirements.',
    icon: <Pipette className="h-10 w-10" />,
  },
  {
    title: 'Concrete',
    description: 'High-quality concrete work including foundations, flatwork, driveways, and decorative concrete solutions.',
    icon: <Building className="h-10 w-10" />,
  },
  {
    title: 'Trucking',
    description: 'Material delivery and removal services with our fleet of dump trucks and equipment transporters.',
    icon: <Truck className="h-10 w-10" />,
  },
  {
    title: 'Project Management',
    description: 'Comprehensive management services to ensure your project is completed on time, within budget, and to specification.',
    icon: <HardHat className="h-10 w-10" />,
  },
];

const Services = () => {
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
    <section id="services" className="py-24 bg-rock-light-gray relative overflow-hidden">
      {/* Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-rock-red/5 rounded-bl-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-rock-red/5 rounded-tr-full -z-10"></div>
      
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase rounded-full bg-rock-red/10 text-rock-red">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-rock-dark">
            Professional Excavation & Site Services
          </h2>
          <p className="text-lg text-rock-gray">
            For over 25 years, Rock Structures has been providing quality excavation, 
            utilities, and concrete services throughout the Wasatch Front. We offer 
            comprehensive solutions for residential and commercial projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-white rounded-lg p-8 shadow-subtle transition-all duration-300 hover:shadow-elevation reveal-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-rock-red mb-5">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-rock-dark">{service.title}</h3>
              <p className="text-rock-gray">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal-on-scroll">
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 bg-rock-red text-white rounded-md font-medium transition-all button-hover"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
