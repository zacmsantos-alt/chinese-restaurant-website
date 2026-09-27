import { Star, MapPin, Clock, UtensilsCrossed } from 'lucide-react';
import { restaurantInfo } from '@/data';

const heroImg =
  'https://images.pexels.com/photos/32860319/pexels-photo-32860319.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="A spread of authentic Chinese dishes on a round table"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/45 to-ink-950/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white pt-20 pb-16">
        <div className="animate-fade-up">
          <p className="text-sm font-500 tracking-[0.3em] uppercase text-ember-300 mb-5">
            South River, New Jersey
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-700 leading-[1.05] mb-6">
            北京 Beijing
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 text-ember-300">
              <Star size={18} fill="currentColor" />
              <span className="font-600 text-white">{restaurantInfo.rating.toFixed(1)}</span>
            </span>
            <span className="text-white/40">•</span>
            <span className="text-white/80 text-sm">{restaurantInfo.reviewCount} reviews</span>
            <span className="text-white/40">•</span>
            <span className="text-white/80 text-sm">{restaurantInfo.priceRange}</span>
          </div>
          <p className="text-lg sm:text-xl text-white/85 leading-relaxed max-w-xl mx-auto mb-9">
            Authentic Chinese cuisine made fresh to order. From hand-folded dumplings
            to wok-fired specialties — dine in, take out, or get it delivered.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: '0.15s' }}>
          <a
            href="#menu"
            className="inline-flex items-center gap-2 rounded-full bg-ember-600 px-7 py-3.5 text-sm font-600 text-white shadow-lg shadow-ember-900/30 transition-all hover:bg-ember-700 hover:scale-[1.03]"
          >
            <UtensilsCrossed size={17} />
            View Menu
          </a>
          <a
            href={`tel:${restaurantInfo.phone.replace(/\D/g, '')}`}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/25 px-7 py-3.5 text-sm font-600 text-white transition-all hover:bg-white/20"
          >
            Call {restaurantInfo.phone}
          </a>
        </div>

        {/* Quick info bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/75 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <span className="inline-flex items-center gap-2">
            <MapPin size={15} className="text-ember-300" />
            {restaurantInfo.address}
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock size={15} className="text-ember-300" />
            Open · Closes 9:30 PM
          </span>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-white/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
