
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md py-3 shadow-subtle' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 transition-opacity hover:opacity-80"
        >
          <span className="text-2xl font-bold font-display tracking-tight text-rock-dark">
            <img src="/lovable-uploads/rockstructureslogo.png" alt="Rock Structures Logo" className="w-150 h-50" />
            {/* Rock Structures */}
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-10">
          {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                'text-sm font-medium transition-all duration-200',
                isScrolled ? 'text-rock-dark hover:text-rock-red' : 'text-rock-light-gray hover:text-rock-red'
              )}
            >
              {item}
            </a>
          ))}
          <a 
            href="tel:+18015470844" 
            className={cn(
              'px-5 py-2 rounded-md text-sm font-medium transition-all duration-300 button-hover',
              isScrolled ? 'bg-rock-red text-white' : 'bg-rock-red text-white'
            )}
          >
            (801) 547-0844
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center p-1"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? 
            <X className="h-6 w-6 text-rock-dark" /> : 
            <Menu className="h-6 w-6 text-rock-dark" />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-white z-40 animate-fade-in">
          <nav className="container flex flex-col py-8 space-y-4">
            {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl py-3 border-b border-gray-100 font-medium text-rock-dark"
              >
                {item}
              </a>
            ))}
            <a 
              href="tel:+18015470844" 
              className="mt-4 w-full text-center px-5 py-3 rounded-md font-medium bg-rock-red text-white button-hover"
            >
              Call (801) 547-0844
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
