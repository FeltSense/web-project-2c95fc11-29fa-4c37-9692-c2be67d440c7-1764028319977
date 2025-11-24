import React from 'react';
import Image from 'next/image';
import { Sparkles, Scissors, Ruler, BookOpen } from 'lucide-react';

const Services = () => {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Atelier Luxe Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Curated experiences and personalized fashion services designed for the modern connoisseur
          </p>
        </div>
        
        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Large Featured Card 1 - Spans 2 columns */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="relative h-80">
              <Image 
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80" 
                alt="Seasonal Collection Showcase"
                width={1200}
                height={800}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="w-14 h-14 bg-gold-600 rounded-xl flex items-center justify-center mb-4">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-3">
                  Seasonal Collections
                </h3>
                <p className="text-gray-100 text-lg">
                  Discover our exclusive seasonal showcases featuring the latest trends from renowned designers. Each collection tells a story of elegance and innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Small Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
            <div className="w-14 h-14 bg-gold-50 rounded-xl flex items-center justify-center mb-6">
              <Scissors className="w-7 h-7 text-gold-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Bespoke Tailoring
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Expert alterations and custom tailoring services to ensure every piece fits you perfectly. From hem adjustments to complete made-to-measure garments.
            </p>
          </div>

          {/* Small Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
            <div className="w-14 h-14 bg-gold-50 rounded-xl flex items-center justify-center mb-6">
              <Ruler className="w-7 h-7 text-gold-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Size Guide & Fit
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Comprehensive size guides and virtual fitting consultations. Our experts help you find the perfect fit for every silhouette and style preference.
            </p>
          </div>

          {/* Large Featured Card 2 - Spans 2 columns */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="relative h-80">
              <Image 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80" 
                alt="Designer Collections Lookbook"
                width={1200}
                height={800}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="w-14 h-14 bg-gold-600 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-3">
                  Curated Lookbooks
                </h3>
                <p className="text-gray-100 text-lg">
                  Browse our expertly curated lookbooks featuring complete ensembles from top designers. Filter by style, occasion, season, or designer to find your perfect look.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Shop By Category
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Women's Wear", count: "240+ Pieces" },
              { name: "Accessories", count: "180+ Items" },
              { name: "Designer Shoes", count: "150+ Styles" },
              { name: "Luxury Bags", count: "95+ Collections" }
            ].map((category, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center group cursor-pointer"
              >
                <div className="w-12 h-12 bg-gold-50 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-600 transition-colors duration-300">
                  <div className="w-2 h-2 bg-gold-600 rounded-full group-hover:bg-white"></div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  {category.name}
                </h4>
                <p className="text-sm text-gray-500">
                  {category.count}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Styling CTA */}
        <div className="mt-16 bg-gradient-to-r from-gold-600 to-amber-600 rounded-2xl shadow-xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Personalized Style Recommendations
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book a complimentary consultation with our style experts and receive curated recommendations tailored to your unique taste and lifestyle.
          </p>
          <button className="bg-white text-gold-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors duration-300 shadow-lg">
            Schedule Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
