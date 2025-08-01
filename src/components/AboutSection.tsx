import React from 'react';
import { Award, Globe, Heart, Microscope } from 'lucide-react';
import FadeInSection from './FadeInSection';

const AboutSection = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Health First",
      description: "Your wellbeing is our top priority in everything we create"
    },
    {
      icon: <Microscope className="h-8 w-8" />,
      title: "Research Backed",
      description: "Every formula is scientifically tested and proven effective"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Assured",
      description: "Premium ingredients meeting the highest industry standards"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Reach",
      description: "Trusted by customers worldwide for natural healing solutions"
    }
  ];

  return (
    <FadeInSection id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-emerald-600">Herbs & Drugs</span> Pvt Ltd
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                For over 25 years, Herbs & Drugs Pvt Ltd has been at the forefront of natural healing solutions, 
                combining traditional herbal wisdom with modern pharmaceutical expertise to create effective, 
                safe therapeutic products.
              </p>
              <p>
                Our flagship product, Fix Healing Oil, represents decades of research and development in natural 
                pain relief. We understand that headaches, colds, and migraines can significantly impact your 
                quality of life, which is why we've dedicated ourselves to creating a solution that works.
              </p>
              <p>
                Every bottle of Fix oil is manufactured in our state-of-the-art facility, following strict 
                quality control measures and using only the finest natural ingredients sourced from trusted 
                suppliers around the world.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">25+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">50+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3985168/pexels-photo-3985168.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Herbal manufacturing" 
              className="w-full h-auto rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-emerald-600 mb-1">ISO Certified</div>
              <div className="text-sm text-gray-600">Quality Manufacturing</div>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do in our mission to provide natural healing solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20 bg-white rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Certifications & Standards
          </h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="font-semibold text-gray-900">ISO 9001:2015</div>
              <div className="text-sm text-gray-600">Quality Management</div>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="font-semibold text-gray-900">GMP Certified</div>
              <div className="text-sm text-gray-600">Good Manufacturing</div>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="font-semibold text-gray-900">FDA Approved</div>
              <div className="text-sm text-gray-600">Safety Standards</div>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="font-semibold text-gray-900">Organic Certified</div>
              <div className="text-sm text-gray-600">Natural Ingredients</div>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default AboutSection;