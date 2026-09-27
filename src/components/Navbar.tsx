import { useEffect, useState } from 'react';
import { Menu as MenuIcon, X, Phone } from 'lucide-react';
import { restaurantInfo } from '@/data';

const links = [
  { label: 'Menu', href: '#menu' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'About', href: '#about' },
  { label: 'Visit', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          className={`font-serif text-2xl font-700 tracking-tight transition-colors ${
            scrolled ? 'text-ink-900' : 'text-white'
          }`}
        >
          北京<span className="ml-2 text-base font-500 opacity-80">Beijing</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-500 transition-colors hover:text-ember-500 ${
                scrolled ? 'text-ink-600' : 'text-white/90'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${restaurantInfo.phone.replace(/\D/g, '')}`}
            className="inline-flex items-center gap-2 rounded-full bg-ember-600 px-5 py-2 text-sm font-600 text-white shadow-sm transition-all hover:bg-ember-700 hover:shadow-md"
          >
            <Phone size={15} />
            Order
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 -mr-2 transition-colors ${
            scrolled ? 'text-ink-800' : 'text-white'
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-cream border-t border-ink-200 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-5 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 px-2 text-ink-700 font-500 rounded-lg hover:bg-ink-100 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${restaurantInfo.phone.replace(/\D/g, '')}`}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ember-600 px-5 py-3 text-sm font-600 text-white"
          >
            <Phone size={16} />
            Call to Order
          </a>
        </div>
      </div>
    </header>
  );
}
