import React, { useState } from 'react';
import { Mail, MessageCircle, Gift, Shield, Users } from 'lucide-react';

const WaitlistForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      // Simulate form submission
      setIsSubmitted(true);
      setErrors({});
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '' });
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="waitlist" className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              Join the Organic Revolution
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Be among the first to experience our premium organic products and get exclusive pre-launch benefits
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Benefits Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-green-800 mb-6">
                Why Join Our Waitlist?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Gift className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800">Exclusive Pre-Launch Discounts</h4>
                    <p className="text-gray-600">Save up to 25% on your first order with special early-bird pricing</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800">Priority Access</h4>
                    <p className="text-gray-600">Be the first to shop our premium organic collection before public launch</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800">Quality Guarantee</h4>
                    <p className="text-gray-600">100% organic, chemical-free products with money-back guarantee</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-800 font-medium">
                  ⚡ Limited spots available! Join now to secure your pre-launch benefits.
                </p>
              </div>
            </div>

            {/* Form Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-700 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-800 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Mail className="h-5 w-5" />
                    <span>Join the Waitlist</span>
                  </button>
                </form>
              ) : (
                <div className="text-center">
                  <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Mail className="h-8 w-8 text-green-700" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Welcome to the Waitlist!</h3>
                  <p className="text-gray-600 mb-4">
                    Thank you for joining! We'll keep you updated on our launch progress.
                  </p>
                  <div className="text-sm text-gray-500">
                    Redirecting in a few seconds...
                  </div>
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-center text-gray-600 mb-4">
                  Prefer to chat directly?
                </p>
                <a
                  href="https://wa.me/918464039648"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;