import React, { useState, useEffect } from 'react';
import { Leaf, MessageCircle } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      isScrolled 
        ? 'bg-white shadow-lg border-green-100' 
        : 'bg-white/10 backdrop-blur-md border-white/20'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Leaf className={`h-8 w-8 ${isScrolled ? 'text-green-700' : 'text-white'}`} />
            <div>
              <h1 className={`text-xl font-bold ${isScrolled ? 'text-green-700' : 'text-white'}`}>
                Organic Haven
              </h1>
              <p className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-white/80'}`}>
                Purely Organic, Naturally Yours
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => scrollToSection('waitlist')}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                isScrolled 
                  ? 'bg-green-700 text-white hover:bg-green-800' 
                  : 'bg-white text-green-700 hover:bg-green-50'
              }`}
            >
              Join Waitlist
            </button>
            <a 
              href="https://wa.me/918464039648"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors ${
                isScrolled 
                  ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;