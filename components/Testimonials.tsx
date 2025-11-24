'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      quote: "Atelier Luxe transformed my wardrobe into a curated collection of timeless elegance. Every piece tells a story of craftsmanship and sophistication.",
      name: "Isabella Rousseau",
      role: "Fashion Editor, Vogue Paris",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 5
    },
    {
      id: 2,
      quote: "The attention to detail is unparalleled. From the first consultation to the final fitting, Atelier Luxe delivered perfection. My custom gown was a masterpiece.",
      name: "Victoria Chen",
      role: "CEO, Chen Enterprises",
      avatar: "https://i.pravatar.cc/150?img=9",
      rating: 5
    },
    {
      id: 3,
      quote: "As someone who values exclusivity and quality, Atelier Luxe exceeded every expectation. Their pieces are investment-worthy works of art.",
      name: "Sophia Marchesi",
      role: "Art Collector & Philanthropist",
      avatar: "https://i.pravatar.cc/150?img=10",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover why discerning clients choose Atelier Luxe for exceptional fashion
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-10 bg-white p-4 rounded-full shadow-lg hover:bg-gray-50 transition-all text-gray-700"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-10 bg-white p-4 rounded-full shadow-lg hover:bg-gray-50 transition-all text-gray-700"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel - Vertical Flow Layout with Large Avatar */}
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-16 text-center">
            <div className="absolute top-8 right-8">
              <Quote className="w-16 h-16 text-gray-100" />
            </div>
            
            <div className="min-h-[450px] flex flex-col justify-center items-center">
              {/* Large Avatar at Top */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gray-100 shadow-2xl mb-8">
                <Image 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Client Info */}
              <div className="mb-6">
                <div className="font-bold text-gray-900 text-2xl mb-1">{testimonials[activeIndex].name}</div>
                <div className="text-gray-600 text-lg">{testimonials[activeIndex].role}</div>
              </div>

              {/* Large Star Rating */}
              <div className="flex gap-2 justify-center mb-8">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-gray-700 font-medium italic leading-relaxed max-w-3xl">
                "{testimonials[activeIndex].quote}"
              </blockquote>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 rounded-full transition-all ${index === activeIndex ? 'bg-gray-900 w-10' : 'bg-gray-300 hover:bg-gray-400 w-3'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Preview - Horizontal Scroll on Mobile */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              onClick={() => setActiveIndex(index)}
              className={`bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all cursor-pointer ${index === activeIndex ? 'ring-2 ring-gray-900' : ''}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-gray-100 shadow-md flex-shrink-0">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 italic text-base leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </button>);
};

export default Testimonials;
