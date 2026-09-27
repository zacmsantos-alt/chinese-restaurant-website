import { Star, Quote } from 'lucide-react';
import { reviews, restaurantInfo } from '@/data';
import { useReveal } from '@/useReveal';

function ReviewCard({ review, delay }: { review: typeof reviews[number]; delay: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} bg-white rounded-2xl border border-ink-100 p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)] flex flex-col`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-ember-100 text-ember-700 font-700 flex items-center justify-center text-sm">
            {review.name.charAt(0)}
          </div>
          <div>
            <p className="font-600 text-ink-900 text-sm">{review.name}</p>
            <p className="text-xs text-ink-400">{review.date}</p>
          </div>
        </div>
        <Quote size={22} className="text-ink-200" />
      </div>
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < review.rating ? 'text-ember-500' : 'text-ink-200'}
            fill={i < review.rating ? 'currentColor' : 'none'}
          />
        ))}
      </div>
      <p className="text-ink-600 text-sm leading-relaxed flex-1">{review.text}</p>
    </div>
  );
}

export default function Reviews() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-ink-50">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} text-center mb-12`}>
          <p className="text-sm font-500 tracking-[0.25em] uppercase text-ember-600 mb-3">Reviews</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-700 text-ink-900 mb-4">
            What our guests say
          </h2>
          <div className="inline-flex items-center gap-2 text-ink-600">
            <span className="inline-flex items-center gap-1 text-ember-500">
              <Star size={18} fill="currentColor" />
              <span className="font-700 text-ink-900">{restaurantInfo.rating.toFixed(1)}</span>
            </span>
            <span className="text-ink-400">·</span>
            <span className="text-sm">{restaurantInfo.reviewCount} Google reviews</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <ReviewCard key={r.name} review={r} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
