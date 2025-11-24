'use client';

import React from 'react';
import { Check, Crown, Sparkles, Shield, Zap, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const features = [
    { icon: Crown, text: 'Bespoke Luxury Website Design' },
    { icon: Sparkles, text: 'Premium Brand Identity Integration' },
    { icon: Shield, text: 'Secure E-Commerce Functionality' },
    { icon: Zap, text: 'Lightning-Fast Performance' },
    { icon: Check, text: 'Mobile-Optimized Experience' },
    { icon: Check, text: 'SEO & Analytics Setup' },
    { icon: Check, text: '30-Day Premium Support' },
    { icon: Check, text: 'Lifetime Updates Included' }
  ];

  const handleCheckout = () => {
    window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00';
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-yellow-50 px-4 py-2 rounded-full mb-6 border border-amber-200">
            <Crown className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-semibold text-amber-900">EXCLUSIVE ATELIER OFFERING</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Luxury Digital Atelier
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A complete couture website crafted exclusively for your fashion brand
          </p>
        </div>
        
        {/* Main Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Decorative gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 rounded-3xl blur-xl opacity-20"></div>
            
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Premium Badge */}
              <div className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white text-center py-3 font-semibold">
                ✨ ATELIER LUXE SIGNATURE PACKAGE ✨
              </div>
              
              <div className="p-12">
                {/* Price Section */}
                <div className="text-center mb-12">
                  <div className="mb-4">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      Complete Luxury Website
                    </h3>
                    <p className="text-gray-600">
                      Everything you need to launch your haute couture digital presence
                    </p>
                  </div>
                  
                  {/* Big Price Display */}
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl blur-2xl opacity-50"></div>
                    <div className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-amber-200">
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-2xl font-semibold text-gray-600">$</span>
                        <span className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                          29
                        </span>
                      </div>
                      <p className="text-gray-600 font-medium mt-2">One-time investment</p>
                    </div>
                  </div>
                </div>
                
                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-4 mb-12">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-amber-50 transition-colors">
                        <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-amber-600" />
                        </div>
                        <span className="text-gray-800 font-medium pt-2">{feature.text}</span>
                      </div>
                    );
                  })}
                </div>
                
                {/* CTA Button */}
                <div className="space-y-4">
                  <button
                    onClick={handleCheckout}
                    className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold px-10 py-5 rounded-xl transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl text-lg"
                  >
                    <Crown className="w-6 h-6" />
                    Get Your Luxury Website - $29
                    <ArrowRight className="w-6 h-6" />
                  </button>
                  
                  <p className="text-center text-sm text-gray-500">
                    🔒 Secure payment via Stripe • 💎 Premium quality guaranteed • ✨ Instant access
                  </p>
                </div>
                
                {/* Trust Indicators */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">100%</div>
                      <div className="text-sm text-gray-600">Satisfaction</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">24h</div>
                      <div className="text-sm text-gray-600">Delivery</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">∞</div>
                      <div className="text-sm text-gray-600">Updates</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 max-w-3xl mx-auto">
            Join the elite fashion houses who trust Atelier Luxe for their digital presence. 
            Your investment includes everything needed to showcase your couture collections with unparalleled elegance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
