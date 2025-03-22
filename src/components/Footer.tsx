
import React from 'react';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-rock-dark text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Rock Structures</h3>
            <p className="text-white/70 mb-6">
              Professional excavation, grading, utilities, and concrete services in Northern Utah since 1997.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rock-red transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rock-red transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rock-red transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Services</h4>
            <ul className="space-y-4">
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">Excavation</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">Grading</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">Utilities</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">Concrete</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">Trucking</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#projects" className="text-white/70 hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mt-0.5 mr-3 text-rock-red" />
                <a href="tel:+18015470844" className="text-white/70 hover:text-white transition-colors">
                  (801) 547-0844
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mt-0.5 mr-3 text-rock-red" />
                <a href="mailto:info@rockstructures.com" className="text-white/70 hover:text-white transition-colors">
                  info@rockstructures.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mt-0.5 mr-3 text-rock-red" />
                <span className="text-white/70">
                  Kaysville, Utah<br />
                  Serving the entire Wasatch Front
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Rock Structures. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
