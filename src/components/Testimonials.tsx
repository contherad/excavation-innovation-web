
import React, { useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael Peterson',
    role: 'Property Developer',
    company: 'Peterson Properties',
    quote: 'Rock Structures has been our go-to excavation contractor for over a decade. Their attention to detail and commitment to timelines has been crucial to the success of our developments.',
    rating: 5,
  },
  {
    name: 'Sarah Johnson',
    role: 'Project Manager',
    company: 'Johnson Construction',
    quote: 'We've worked with Rock Structures on multiple commercial projects. Their precision grading and excavation work is exceptional, and their team is always professional and reliable.',
    rating: 5,
  },
  {
    name: 'David Williams',
    role: 'Homeowner',
    company: 'Custom Home',
    quote: 'Rock Structures helped prepare our challenging hillside lot for our dream home. Their expertise in dealing with complex terrain made what seemed impossible, possible.',
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) => {
  return (
    <div 
      className="bg-white rounded-lg p-8 shadow-subtle flex flex-col h-full reveal-on-scroll"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex-1">
        <div className="text-rock-brown/20 mb-4">
          <Quote className="h-10 w-10" />
        </div>
        <p className="text-rock-gray mb-6 italic">"{testimonial.quote}"</p>
      </div>
      <div>
        <div className="flex mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-rock-light-brown rounded-full flex items-center justify-center text-white font-bold">
            {testimonial.name.charAt(0)}
          </div>
          <div className="ml-4">
            <h4 className="font-semibold text-rock-dark">{testimonial.name}</h4>
            <p className="text-sm text-rock-gray">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
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
    <section id="about" className="py-24 bg-rock-light-gray relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-rock-brown/5 rounded-full transform -translate-y-1/2 -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-rock-brown/5 rounded-full -z-10"></div>

      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase rounded-full bg-rock-brown/10 text-rock-brown">
            Our Reputation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-rock-dark">
            What Our Clients Say
          </h2>
          <p className="text-lg text-rock-gray">
            With over 25 years of experience and countless satisfied clients,
            our reputation speaks for itself. Here's what some of our clients have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>

        <div className="mt-20 bg-white rounded-lg shadow-subtle reveal-on-scroll p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase rounded-full bg-rock-brown/10 text-rock-brown">
                About Us
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-rock-dark">
                Building Utah Since 1997
              </h3>
              <p className="text-rock-gray mb-6">
                Rock Structures was founded with a commitment to quality, integrity, and exceptional service. 
                For over 25 years, we've been providing expert excavation, grading, and site development 
                services to clients throughout the Wasatch Front.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-rock-brown mr-2"></div>
                  <span className="text-rock-gray">Licensed and insured contractors</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-rock-brown mr-2"></div>
                  <span className="text-rock-gray">Modern equipment fleet</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-rock-brown mr-2"></div>
                  <span className="text-rock-gray">Experienced, professional crews</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-rock-brown mr-2"></div>
                  <span className="text-rock-gray">Commitment to safety and quality</span>
                </li>
              </ul>
            </div>
            <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden image-hover">
              <img 
                src="https://images.unsplash.com/photo-1553515313-0c4942f16c21?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Rock Structures Team" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
