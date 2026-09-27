export interface MenuItem {
  name: string;
  description: string;
  price: string;
  tags?: string[];
}

export interface MenuCategory {
  title: string;
  subtitle: string;
  items: MenuItem[];
}

export const menu: MenuCategory[] = [
  {
    title: 'Appetizers',
    subtitle: 'Small plates to start your meal',
    items: [
      { name: 'Pork Dumplings', description: 'Steamed jiaozi with seasoned pork and napa cabbage', price: '$7.95', tags: ['Popular'] },
      { name: 'Vegetable Spring Rolls', description: 'Crispy rolls with cabbage, carrot, and glass noodles', price: '$5.50' },
      { name: 'Scallion Pancake', description: 'Flaky pan-fried pancake with sesame and scallion', price: '$6.25', tags: ['Vegetarian'] },
      { name: 'Edamame', description: 'Steamed soybeans tossed in sea salt', price: '$4.95', tags: ['Vegetarian'] },
      { name: 'Crab Rangoon', description: 'Wontons filled with cream cheese and crab', price: '$6.95' },
      { name: 'Salt & Pepper Calamari', description: 'Lightly fried squid with garlic and chili', price: '$9.50', tags: ['Spicy'] },
    ],
  },
  {
    title: 'Soups',
    subtitle: 'Warm and comforting bowls',
    items: [
      { name: 'Wonton Soup', description: 'Pork wontons in a clear chicken broth with scallion', price: '$5.95' },
      { name: 'Hot & Sour Soup', description: 'Tangy and peppery broth with tofu and bamboo shoots', price: '$5.95', tags: ['Spicy'] },
      { name: 'Egg Drop Soup', description: 'Silky ribbons of egg in a golden chicken broth', price: '$4.95' },
      { name: 'Beef Noodle Soup', description: 'Slow-braised beef with hand-pulled noodles and greens', price: '$11.95', tags: ['Popular'] },
    ],
  },
  {
    title: 'Chef\'s Specials',
    subtitle: 'Signature dishes from our kitchen',
    items: [
      { name: 'General Tso\'s Chicken', description: 'Crispy chicken tossed in a sweet and tangy glaze', price: '$13.95', tags: ['Popular'] },
      { name: 'Kung Pao Shrimp', description: 'Wok-seared shrimp with peanuts, chili, and scallion', price: '$15.95', tags: ['Spicy'] },
      { name: 'Peking Duck', description: 'Roasted duck with thin pancakes, scallion, and hoisin', price: '$22.95', tags: ['Signature'] },
      { name: 'Mongolian Beef', description: 'Tender beef with scallion in a rich savory sauce', price: '$14.95' },
      { name: 'Sesame Chicken', description: 'Crispy chicken in a glossy sesame glaze', price: '$13.50' },
      { name: 'Whole Steamed Fish', description: 'Daily catch with ginger, scallion, and soy', price: '$24.95', tags: ['Signature'] },
    ],
  },
  {
    title: 'Noodles & Rice',
    subtitle: 'Wok-tossed classics',
    items: [
      { name: 'Lo Mein', description: 'Soft noodles with vegetables and choice of protein', price: '$10.95' },
      { name: 'Singapore Rice Noodles', description: 'Curried vermicelli with shrimp, pork, and vegetables', price: '$12.50', tags: ['Spicy'] },
      { name: 'Chicken Fried Rice', description: 'Wok-fried rice with egg, scallion, and chicken', price: '$9.95', tags: ['Popular'] },
      { name: 'Buddha\'s Delight', description: 'Vegetable and tofu stir-fry over jasmine rice', price: '$10.95', tags: ['Vegetarian'] },
    ],
  },
];

export interface Review {
  name: string;
  rating: number;
  date: string;
  text: string;
}

export const reviews: Review[] = [
  {
    name: 'Michael R.',
    rating: 5,
    date: '2 weeks ago',
    text: 'Best Chinese food in the area by far. The General Tso\'s chicken is perfectly crispy and the dumplings are made fresh. Friendly service and generous portions.',
  },
  {
    name: 'Jessica L.',
    rating: 4,
    date: '1 month ago',
    text: 'Solid neighborhood spot. Takeout is always ready on time and the food travels well. The Peking duck is worth the wait — call ahead to order it.',
  },
  {
    name: 'David K.',
    rating: 5,
    date: '1 month ago',
    text: 'Been coming here for years. Consistent quality, fair prices, and the hot & sour soup is exactly how it should be. The staff knows our order by heart.',
  },
  {
    name: 'Amanda P.',
    rating: 5,
    date: '2 months ago',
    text: 'Authentic flavors without the long drive. The beef noodoodle soup is incredible on a cold day and the scallion pancake is a must-order.',
  },
  {
    name: 'Robert S.',
    rating: 4,
    date: '3 months ago',
    text: 'Clean, comfortable dining room and quick service. The Kung Pao shrimp had great heat and crunch. Prices are very reasonable for the portion size.',
  },
  {
    name: 'Linda T.',
    rating: 5,
    date: '3 months ago',
    text: 'My family\'s go-to for Friday night takeout. The sesame chicken and lo mein never disappoint. They always include extra sauce without asking.',
  },
];

export const restaurantInfo = {
  name: 'Beijing',
  rating: 4.0,
  reviewCount: 228,
  priceRange: '$10–20',
  address: '58 Main St, South River, NJ 08882',
  phone: '(732) 257-3888',
  hours: [
    { day: 'Monday', time: '11:00 AM – 9:30 PM' },
    { day: 'Tuesday', time: '11:00 AM – 9:30 PM' },
    { day: 'Wednesday', time: '11:00 AM – 9:30 PM' },
    { day: 'Thursday', time: '11:00 AM – 9:30 PM' },
    { day: 'Friday', time: '11:00 AM – 10:00 PM' },
    { day: 'Saturday', time: '11:00 AM – 10:00 PM' },
    { day: 'Sunday', time: '12:00 PM – 9:00 PM' },
  ],
  services: ['Dine-in', 'Takeout', 'Delivery', 'Order online'],
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Beijing+58+Main+St+South+River+NJ+08882',
};
