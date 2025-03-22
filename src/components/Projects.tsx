
import React, { useEffect, useState } from 'react';

const projects = [
  {
    title: 'Residential Development',
    category: 'Excavation',
    location: 'Kaysville, UT',
    imageUrl: 'https://images.unsplash.com/photo-1574757990248-0d4b0cf55794?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Complete site preparation and excavation for a new residential development.',
  },
  {
    title: 'Commercial Building Foundation',
    category: 'Concrete',
    location: 'Layton, UT',
    imageUrl: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc395?q=80&w=2733&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Foundation and concrete work for a new commercial building.',
  },
  {
    title: 'Mountain Subdivision',
    category: 'Grading',
    location: 'Morgan, UT',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Precision grading for a new mountain subdivision with custom home sites.',
  },
  {
    title: 'Municipal Water Line',
    category: 'Utilities',
    location: 'Farmington, UT',
    imageUrl: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Installation of municipal water lines for a growing community.',
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-lg shadow-subtle reveal-on-scroll image-hover"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <img 
        src={project.imageUrl} 
        alt={project.title} 
        className="w-full h-72 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90 transition-opacity group-hover:opacity-100"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="inline-block text-xs font-medium uppercase tracking-wider text-white/80 mb-2">
          {project.category} • {project.location}
        </span>
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-white/80 text-sm">{project.description}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

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
  }, [filteredProjects]);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase rounded-full bg-rock-red/10 text-rock-red">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-rock-dark">
            Featured Projects
          </h2>
          <p className="text-lg text-rock-gray">
            Explore our portfolio of successful projects throughout Northern Utah.
            From residential developments to commercial buildings and municipal infrastructure.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10 reveal-on-scroll">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                activeCategory === category
                  ? 'bg-rock-red text-white'
                  : 'bg-rock-light-gray text-rock-gray hover:bg-rock-light-brown/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center reveal-on-scroll">
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 bg-transparent border border-rock-red text-rock-red hover:bg-rock-red hover:text-white rounded-md font-medium transition-all"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
