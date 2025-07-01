import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className="bg-white/95 backdrop-blur-sm shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-slate-800">Dr. Serena Blake</h1>
              <span className="ml-2 text-sm text-slate-600 hidden sm:block">PsyD</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-slate-700 hover:text-teal-600 transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-slate-700 hover:text-teal-600 transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-slate-700 hover:text-teal-600 transition-colors duration-200"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-slate-700 hover:text-teal-600 transition-colors duration-200"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-slate-700 hover:text-teal-600 transition-colors duration-200"
              >
                Contact
              </button>
            </nav>

            <div className="hidden lg:flex items-center space-x-4 text-sm text-slate-600">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                <span>(323) 555-0192</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                <span>serena@blakepsychology.com</span>
              </div>
            </div>

            <button
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left py-2 text-slate-700 hover:text-teal-600"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left py-2 text-slate-700 hover:text-teal-600"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left py-2 text-slate-700 hover:text-teal-600"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left py-2 text-slate-700 hover:text-teal-600"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left py-2 text-slate-700 hover:text-teal-600"
              >
                Contact
              </button>
              <div className="border-t pt-2 space-y-1 text-sm text-slate-600">
                <div className="flex items-center py-1">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>(323) 555-0192</span>
                </div>
                <div className="flex items-center py-1">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>serena@blakepsychology.com</span>
                </div>
                <div className="flex items-center py-1">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Los Angeles, CA</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;