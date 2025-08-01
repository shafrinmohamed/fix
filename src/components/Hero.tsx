import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import FadeInSection from './FadeInSection';
import Fix from '../../src/assets/images/Fix.png'

const Hero = () => {
  return (
    <FadeInSection id="home" className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                ✨ Trusted by thousands worldwide
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Natural Relief with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600"> FIX</span>
                <span className="block text-3xl lg:text-4xl mt-2 text-gray-700">Healing Oil</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Experience fast, natural relief from headaches, colds, and migraines with our premium therapeutic oil blend. 
                Crafted with ancient wisdom and modern science.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Headache Relief</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Migraine Care</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Cold Symptoms</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2">
                <span>Shop Fix Oil</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-emerald-500 text-emerald-600 px-8 py-4 rounded-full hover:bg-emerald-50 transition-all duration-300 font-semibold text-lg">
                Learn More
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">25+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10k+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Natural</div>
              </div>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={Fix} 
                alt="Fix Healing Oil" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            
            {/* Product highlight card */}
            <div className="absolute top-8 -left-8 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">FIX</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Fast Acting</div>
                  <div className="text-sm text-gray-600">Relief in minutes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default Hero;