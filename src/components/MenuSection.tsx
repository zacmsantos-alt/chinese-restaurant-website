import { useState } from 'react';
import { Flame, Leaf, Star, Award } from 'lucide-react';
import { menu, type MenuItem } from '@/data';
import { useReveal } from '@/useReveal';

const tagStyles: Record<string, { icon: typeof Flame; className: string }> = {
  Popular: { icon: Star, className: 'bg-ember-100 text-ember-700' },
  Spicy: { icon: Flame, className: 'bg-ember-100 text-ember-700' },
  Vegetarian: { icon: Leaf, className: 'bg-jade-100 text-jade-700' },
  Signature: { icon: Award, className: 'bg-ink-200 text-ink-700' },
};

function ItemRow({ item, delay }: { item: MenuItem; delay: number }) {
  const { ref, visible } = useReveal<HTMLLIElement>();
  return (
    <li
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-baseline gap-3">
        <h4 className="font-600 text-ink-900 text-base whitespace-nowrap">{item.name}</h4>
        <span className="flex-1 border-b border-dotted border-ink-300 translate-y-[-3px]" />
        <span className="font-600 text-ember-700 text-base whitespace-nowrap">{item.price}</span>
      </div>
      <p className="text-sm text-ink-500 mt-1 leading-relaxed">{item.description}</p>
      {item.tags && item.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-2">
          {item.tags.map((tag) => {
            const style = tagStyles[tag];
            if (!style) return null;
            const Icon = style.icon;
            return (
              <span
                key={tag}
                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-600 ${style.className}`}
              >
                <Icon size={10} />
                {tag}
              </span>
            );
          })}
        </div>
      )}
    </li>
  );
}

export default function MenuSection() {
  const [active, setActive] = useState(0);
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="menu" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} text-center mb-12`}>
          <p className="text-sm font-500 tracking-[0.25em] uppercase text-ember-600 mb-3">Our Menu</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-700 text-ink-900 mb-4">
            Made fresh, wok to table
          </h2>
          <p className="text-ink-500 max-w-xl mx-auto leading-relaxed">
            Every dish is prepared to order with quality ingredients. Prices are per person
            and range from $10–20.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto no-scrollbar">
          <div className="inline-flex gap-1 p-1 bg-ink-100 rounded-full">
            {menu.map((cat, i) => (
              <button
                key={cat.title}
                onClick={() => setActive(i)}
                className={`px-4 sm:px-5 py-2 rounded-full text-sm font-600 whitespace-nowrap transition-all ${
                  active === i
                    ? 'bg-white text-ember-700 shadow-sm'
                    : 'text-ink-500 hover:text-ink-700'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active category */}
        <div className="bg-white rounded-2xl shadow-[0_2px_24px_rgba(0,0,0,0.05)] border border-ink-100 p-6 sm:p-10">
          <div className="mb-7">
            <h3 className="font-serif text-2xl font-700 text-ink-900">{menu[active].title}</h3>
            <p className="text-ink-400 text-sm mt-1">{menu[active].subtitle}</p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
            {menu[active].items.map((item, i) => (
              <ItemRow key={item.name} item={item} delay={i * 60} />
            ))}
          </ul>
        </div>

        <p className="text-center text-sm text-ink-400 mt-8">
          Prices may vary for takeout and delivery. Call for daily specials and party trays.
        </p>
      </div>
    </section>
  );
}
