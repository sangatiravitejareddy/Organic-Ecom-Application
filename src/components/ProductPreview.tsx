import React from 'react';
import { Clock } from 'lucide-react';

const ProductPreview: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Organic Quinoa',
      category: 'Grains',
      image: 'https://images.pexels.com/photos/1359326/pexels-photo-1359326.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Premium organic quinoa, rich in protein and minerals'
    },
    {
      id: 2,
      name: 'Organic Turmeric',
      category: 'Spices',
      image: 'https://images.pexels.com/photos/531446/pexels-photo-531446.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Pure organic turmeric powder with anti-inflammatory properties'
    },
    {
      id: 3,
      name: 'Organic Almonds',
      category: 'Nuts',
      image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Fresh organic almonds, perfect for healthy snacking'
    },
    {
      id: 4,
      name: 'Organic Honey',
      category: 'Sweeteners',
      image: 'https://images.pexels.com/photos/33162/honey-golden-syrup-pouring-sweet.jpg?auto=compress&cs=tinysrgb&w=400',
      description: 'Raw organic honey from sustainable beekeeping'
    },
    {
      id: 5,
      name: 'Organic Chia Seeds',
      category: 'Seeds',
      image: 'https://images.pexels.com/photos/2377164/pexels-photo-2377164.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Nutrient-dense organic chia seeds for superfood nutrition'
    },
    {
      id: 6,
      name: 'Organic Coconut Oil',
      category: 'Oils',
      image: 'https://images.pexels.com/photos/4198017/pexels-photo-4198017.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Cold-pressed organic coconut oil for cooking and wellness'
    }
  ];

  return (
    <section id="preview" className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            Premium Organic Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get ready to experience the finest organic products, carefully sourced from sustainable farms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-center">
                      <div className="bg-yellow-400 text-green-900 px-4 py-2 rounded-full font-bold text-sm flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>Coming Soon</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-green-800">{product.name}</h3>
                  <span className="text-sm text-green-600 bg-green-100 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">September 2025</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-600 font-medium">Available Soon</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-green-800 text-white p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Why Choose Our Organic Products?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-bold text-yellow-300 mb-2">100% Organic</h4>
                <p className="text-sm">Certified organic products with no harmful chemicals or pesticides</p>
              </div>
              <div>
                <h4 className="font-bold text-yellow-300 mb-2">Sustainable Sourcing</h4>
                <p className="text-sm">Supporting eco-friendly farming practices and fair trade</p>
              </div>
              <div>
                <h4 className="font-bold text-yellow-300 mb-2">Premium Quality</h4>
                <p className="text-sm">Hand-picked products that meet the highest quality standards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;