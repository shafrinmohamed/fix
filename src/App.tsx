import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="scroll-smooth min-h-screen">
      <Header />

      <section id="home" className="scroll-mt-24">
        <Hero />
      </section>

      <section id="product" className="scroll-mt-24">
        <ProductSection />
      </section>

      <section id="about" className="scroll-mt-24">
        <AboutSection />
      </section>

      <section id="contact" className="scroll-mt-24">
        <ContactSection />
      </section>

      <Footer />
    </div>
  );
}

export default App;
