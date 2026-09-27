import { useReveal } from '@/useReveal';

const interiorImg =
  'https://images.pexels.com/photos/37047965/pexels-photo-37047965.jpeg?auto=compress&cs=tinysrgb&w=1200';
const dumplingImg =
  'https://images.pexels.com/photos/35144940/pexels-photo-35144940.jpeg?auto=compress&cs=tinysrgb&w=800';

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} grid md:grid-cols-2 gap-10 lg:gap-16 items-center`}
        >
          {/* Images */}
          <div className="relative">
            <img
              src={interiorImg}
              alt="Warm interior of Beijing restaurant"
              className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover"
            />
            <img
              src={dumplingImg}
              alt="Freshly steamed dumplings in a bamboo basket"
              className="hidden sm:block absolute -bottom-8 -right-6 w-40 h-40 rounded-xl shadow-lg border-4 border-cream object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-sm font-500 tracking-[0.25em] uppercase text-ember-600 mb-3">Our Story</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-700 text-ink-900 mb-6 leading-tight">
              A taste of Beijing, right in South River
            </h2>
            <div className="space-y-4 text-ink-600 leading-relaxed">
              <p>
                Beijing has been serving authentic Chinese cuisine to the South River
                community for years. Our kitchen draws from traditional recipes and
                regional flavors — from the bold spices of Sichuan to the comforting
                classics of Cantonese cooking.
              </p>
              <p>
                Every dish is made to order. We hand-fold our dumplings, wok-fire our
                stir-fries at high heat, and source fresh produce daily. Whether you
                join us for a quick lunch or a family dinner, you'll taste the
                difference that fresh ingredients and careful preparation make.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-9 pt-8 border-t border-ink-200">
              <div>
                <p className="font-serif text-3xl font-700 text-ember-600">4.0</p>
                <p className="text-xs text-ink-400 mt-1">Google rating</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-700 text-ember-600">228+</p>
                <p className="text-xs text-ink-400 mt-1">Happy reviews</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-700 text-ember-600">100%</p>
                <p className="text-xs text-ink-400 mt-1">Made to order</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
