import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductPreview from './components/ProductPreview';
import WaitlistForm from './components/WaitlistForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductPreview />
      <WaitlistForm />
      <Footer />
    </div>
  );
}

export default App;