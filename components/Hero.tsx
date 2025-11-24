import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=80"
          alt="Luxury Fashion Collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-6">
            <p className="text-sm tracking-[0.3em] uppercase text-yellow-500 font-light">
              Spring/Summer 2024
            </p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Timeless Elegance
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl font-light">
              Discover our exclusive collection of haute couture pieces, meticulously crafted for the discerning individual.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#collections"
              className="inline-flex items-center justify-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 text-sm tracking-wide uppercase transition-colors font-semibold"
            >
              Explore Collection
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 text-sm tracking-wide uppercase transition-colors font-semibold"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <div className="flex flex-col items-center gap-2 text-white/80">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-white/40"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;