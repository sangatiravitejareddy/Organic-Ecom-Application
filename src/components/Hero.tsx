import React from 'react';
import { ChevronDown } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const element = document.getElementById('preview');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-800 via-green-700 to-green-600 overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
              Get Ready for Pure
              <span className="block text-yellow-300">Organic Goodness!</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our organic products are launching in September 2025. Be the first to experience nature's finest!
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Opening Soon – Launching September 2025
            </h2>
            <CountdownTimer />
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-yellow-400 text-green-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors transform hover:scale-105"
              >
                Join the Waitlist
              </button>
              <a 
                href="https://wa.me/918464039648"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Chat with Us
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-white/80 mb-4">Join 1,000+ organic enthusiasts awaiting our launch!</p>
            <div className="flex justify-center space-x-2">
              {Array.from({ length: 5 }, (_, i) => (
                <div key={i} className="w-8 h-8 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
              ))}
            </div>
          </div>
        </div>

        <button 
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;