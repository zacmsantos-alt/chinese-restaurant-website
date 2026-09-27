import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { restaurantInfo } from '@/data';
import { useReveal } from '@/useReveal';

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const todayHours = restaurantInfo.hours.find((h) => h.day === today);

  return (
    <section id="contact" className="py-20 sm:py-28 bg-ink-950 text-cream">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="text-center mb-12">
            <p className="text-sm font-500 tracking-[0.25em] uppercase text-ember-400 mb-3">Visit Us</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-700 text-white mb-4">
              Come dine with us
            </h2>
            <p className="text-cream/60 max-w-lg mx-auto leading-relaxed">
              Dine-in, takeout, and delivery available. Walk-ins welcome —
              for large parties, please call ahead.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Info card */}
            <div className="bg-ink-900 rounded-2xl p-8 border border-ink-800">
              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-full bg-ember-600/20 text-ember-400 flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-cream/40 mb-1">Address</p>
                    <p className="text-white font-500">{restaurantInfo.address}</p>
                    <a
                      href={restaurantInfo.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-ember-400 mt-1.5 hover:text-ember-300 transition-colors"
                    >
                      <Navigation size={13} />
                      Get directions
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-full bg-ember-600/20 text-ember-400 flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-cream/40 mb-1">Phone</p>
                    <a
                      href={`tel:${restaurantInfo.phone.replace(/\D/g, '')}`}
                      className="text-white font-500 hover:text-ember-300 transition-colors"
                    >
                      {restaurantInfo.phone}
                    </a>
                    <p className="text-sm text-cream/50 mt-1">Call to order or reserve a table</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-full bg-ember-600/20 text-ember-400 flex items-center justify-center">
                    <Clock size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wider text-cream/40 mb-2">Hours</p>
                    <ul className="space-y-1.5">
                      {restaurantInfo.hours.map((h) => (
                        <li
                          key={h.day}
                          className={`flex justify-between text-sm ${
                            h.day === today
                              ? 'text-white font-600'
                              : 'text-cream/55'
                          }`}
                        >
                          <span>{h.day}</span>
                          <span>{h.time}</span>
                        </li>
                      ))}
                    </ul>
                    {todayHours && (
                      <p className="mt-3 text-xs text-jade-300 font-500">
                        Open today · {todayHours.time}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <a
              href={restaurantInfo.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-2xl overflow-hidden min-h-[320px] group block"
            >
              <iframe
                title="Map to Beijing restaurant"
                src="https://www.google.com/maps?q=58+Main+St+South+River+NJ+08882&output=embed"
                className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-ink-950/90 backdrop-blur-sm rounded-xl p-4 pointer-events-none">
                <p className="text-white font-600 text-sm">Beijing Chinese Restaurant</p>
                <p className="text-cream/60 text-xs mt-0.5">{restaurantInfo.address}</p>
              </div>
            </a>
          </div>

          {/* Service badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {restaurantInfo.services.map((s) => (
              <span
                key={s}
                className="inline-flex items-center rounded-full border border-ink-700 bg-ink-900 px-4 py-2 text-sm font-500 text-cream/80"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
