import { Phone, MapPin } from 'lucide-react';
import { restaurantInfo } from '@/data';

export default function Footer() {
  return (
    <footer className="bg-ink-950 border-t border-ink-800 text-cream/50">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="font-serif text-xl font-700 text-white">
              北京 <span className="font-sans font-500 text-base">Beijing</span>
            </p>
            <p className="text-sm mt-1">{restaurantInfo.address}</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={`tel:${restaurantInfo.phone.replace(/\D/g, '')}`}
              className="inline-flex items-center gap-2 text-sm hover:text-ember-300 transition-colors"
            >
              <Phone size={14} />
              {restaurantInfo.phone}
            </a>
            <a
              href={restaurantInfo.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-ember-300 transition-colors"
            >
              <MapPin size={14} />
              Directions
            </a>
          </div>
        </div>
        <p className="text-center text-xs text-cream/30 mt-8 pt-6 border-t border-ink-800">
          © {new Date().getFullYear()} Beijing Chinese Restaurant. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
