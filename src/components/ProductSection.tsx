import React from 'react';
import { Zap, Shield, Leaf, Clock, Star, Users } from 'lucide-react';
import FadeInSection from './FadeInSection';

const ProductSection = () => {
  const benefits = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Fast Relief",
      description: "Experience relief from headaches and migraines within minutes of application."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safe & Natural",
      description: "Made with 100% natural ingredients, safe for daily use without side effects."
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Herbal Formula",
      description: "Traditional herbal blend backed by modern research and quality standards."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Long Lasting",
      description: "Extended relief that keeps you comfortable throughout your day."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Fix oil has been a game-changer for my chronic migraines. I finally found natural relief!"
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "As someone who suffers from frequent headaches, this oil provides instant comfort."
    },
    {
      name: "Emma Davis",
      rating: 5,
      text: "The quality is exceptional. I've tried many products, but Fix oil actually works."
    }
  ];

  return (
    <FadeInSection id="product" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 transition-all duration-1000 ease-out opacity-0 translate-y-8 animate-fade-in-delayed">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-emerald-600">Fix</span> Healing Oil?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our premium therapeutic oil combines traditional herbal wisdom with modern manufacturing standards 
            to deliver effective, natural relief for your everyday ailments.
          </p>
        </div>

        {/* Product Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Product Showcase */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 lg:p-12 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Premium Quality, Proven Results
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Headache Relief</h4>
                    <p className="text-gray-600">Targeted relief for tension headaches and stress-induced pain</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Cold Symptoms</h4>
                    <p className="text-gray-600">Natural decongestant properties for respiratory comfort</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Migraine Care</h4>
                    <p className="text-gray-600">Gentle, effective support for migraine management</p>
                  </div>
                </div>
              </div>
              <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 font-semibold">
                Order Fix Oil Today
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4506105/pexels-photo-4506105.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Natural ingredients" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Customers Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">Verified Customer</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default ProductSection;