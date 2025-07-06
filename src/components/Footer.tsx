import React from 'react';
import { Leaf, Mail, MessageCircle, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-yellow-400" />
              <div>
                <h3 className="text-xl font-bold">Organic Haven</h3>
                <p className="text-sm text-green-300">Purely Organic, Naturally Yours</p>
              </div>
            </div>
            <p className="text-green-200 text-sm mb-4">
              Bringing you the finest organic products from sustainable farms. 
              Join us in creating a healthier world, one organic choice at a time.
            </p>
          </div>

          {/* Launch Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Launch Information</h4>
            <ul className="space-y-2 text-sm text-green-200">
              <li>• Launch Date: September 2025</li>
              <li>• Pre-launch Discounts Available</li>
              <li>• 100% Organic Certified Products</li>
              <li>• Sustainable & Fair Trade</li>
              <li>• Premium Quality Guarantee</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:hello@organichaven.com" 
                className="flex items-center space-x-2 text-green-200 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>hello@organichaven.com</span>
              </a>
              <a 
                href="https://wa.me/918464039648" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-green-200 hover:text-white transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>+91-846-403-9648</span>
              </a>
            </div>
            
            <div className="mt-6">
              <p className="text-sm text-green-300 mb-2">Join our community:</p>
              <div className="flex items-center space-x-2 text-yellow-400">
                <Heart className="h-4 w-4" />
                <span className="text-sm">1,000+ people waiting</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="text-green-300 text-sm">
            © 2025 Organic Haven. All rights reserved. | 
            <span className="text-yellow-400 ml-1">Made with organic love 🌱</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;