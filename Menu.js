import React, { useState } from "react";
import { Link } from "react-router-dom";

const menuData = {
  Cakes: [
    {
      name: "Chocolate Truffle Cake",
      price: "₹350",
      desc: "Rich dark chocolate layers with velvety ganache frosting.",
      tag: "Bestseller",
      emoji: "🎂",
    },
    {
      name: "Black Forest Cake",
      price: "₹380",
      desc: "Classic German-style with cherries, cream & moist chocolate sponge.",
      tag: "Popular",
      emoji: "🍫",
    },
    {
      name: "Butterscotch Cake",
      price: "₹320",
      desc: "Light sponge layered with smooth butterscotch cream & caramel bits.",
      tag: null,
      emoji: "🧁",
    },
    {
      name: "Vanilla Sponge Cake",
      price: "₹280",
      desc: "Classic soft vanilla sponge with fresh cream frosting.",
      tag: null,
      emoji: "🍰",
    },
    {
      name: "Pineapple Cake",
      price: "₹300",
      desc: "Moist sponge with fresh pineapple chunks & whipped cream.",
      tag: null,
      emoji: "🍍",
    },
    {
      name: "Custom Cake",
      price: "From ₹500",
      desc: "Design your dream cake for any occasion — we'll bring it to life!",
      tag: "Custom",
      emoji: "✨",
    },
  ],
  Snacks: [
    {
      name: "Veg Puff",
      price: "₹20",
      desc: "Crispy golden pastry stuffed with spiced potato & peas filling.",
      tag: "Hot",
      emoji: "🥐",
    },
    {
      name: "Egg Puff",
      price: "₹25",
      desc: "Flaky puff pastry with a perfectly seasoned egg inside.",
      tag: "Hot",
      emoji: "🥚",
    },
    {
      name: "Samosa",
      price: "₹15",
      desc: "Crunchy triangular pastry filled with spiced potato mixture.",
      tag: null,
      emoji: "🥟",
    },
    {
      name: "Bread Roll",
      price: "₹20",
      desc: "Deep-fried bread rolls stuffed with masala potato filling.",
      tag: null,
      emoji: "🍞",
    },
    {
      name: "Mini Cutlet",
      price: "₹25",
      desc: "Crispy pan-fried vegetable cutlets served with mint chutney.",
      tag: null,
      emoji: "🫓",
    },
  ],
  Pastries: [
    {
      name: "Chocolate Pastry",
      price: "₹60",
      desc: "Soft chocolate sponge slice with creamy ganache topping.",
      tag: "Favourite",
      emoji: "🍫",
    },
    {
      name: "Strawberry Pastry",
      price: "₹65",
      desc: "Light sponge with fresh cream and strawberry flavour.",
      tag: null,
      emoji: "🍓",
    },
    {
      name: "Butterscotch Pastry",
      price: "₹60",
      desc: "Caramel-flavoured sponge with crunchy butterscotch topping.",
      tag: null,
      emoji: "🧈",
    },
    {
      name: "Pineapple Pastry",
      price: "₹60",
      desc: "Tropical pineapple pastry with fresh cream and pineapple chunks.",
      tag: null,
      emoji: "🍍",
    },
  ],
  Biscuits: [
    {
      name: "Butter Biscuits",
      price: "₹80",
      desc: "Classic melt-in-mouth butter biscuits, perfect with tea.",
      tag: "Classic",
      emoji: "🍪",
    },
    {
      name: "Coconut Cookies",
      price: "₹90",
      desc: "Crunchy coconut-flavoured cookies baked to golden perfection.",
      tag: null,
      emoji: "🥥",
    },
    {
      name: "Jeera Biscuits",
      price: "₹70",
      desc: "Savory cumin-flavoured biscuits, a popular Indian snack treat.",
      tag: null,
      emoji: "🌾",
    },
    {
      name: "Chocolate Chip Cookies",
      price: "₹100",
      desc: "Chewy cookies loaded with dark chocolate chips.",
      tag: "New",
      emoji: "🍫",
    },
  ],
};

const categories = Object.keys(menuData);

const tagColors = {
  Bestseller: "bg-red-100 text-red-700",
  Popular: "bg-orange-100 text-orange-700",
  Hot: "bg-orange-100 text-orange-700",
  Favourite: "bg-pink-100 text-pink-700",
  Custom: "bg-purple-100 text-purple-700",
  Classic: "bg-blue-100 text-blue-700",
  New: "bg-green-100 text-green-700",
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Cakes");

  return (
    <div className="pt-16 min-h-screen bg-amber-50">
      {/* Header */}
      <div className="bg-stone-800 py-14 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-yellow-400 font-body text-sm tracking-widest uppercase font-semibold mb-2">
            Our Offerings
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-amber-50 mb-3">
            Fresh Baked Menu
          </h1>
          <p className="text-stone-400 font-body max-w-xl mx-auto">
            Everything is baked fresh daily. Made with love, served with a smile
            — from our bakery in Kanteru to your table.
          </p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="sticky top-16 z-40 bg-white shadow-sm border-b border-amber-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-5 py-2 rounded-lg font-body text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-yellow-500 text-stone-900 shadow-sm"
                    : "text-stone-600 hover:bg-amber-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <h2 className="font-display text-2xl font-bold text-stone-800 mb-6">
          {activeCategory}
          <span className="ml-2 text-base font-body font-normal text-stone-400">
            ({menuData[activeCategory].length} items)
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {menuData[activeCategory].map((item, i) => (
            <div
              key={i}
              className="menu-card bg-white rounded-2xl overflow-hidden border border-amber-100 shadow-warm"
            >
              {/* Image placeholder */}
              <div className="h-36 bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center">
                <span className="text-6xl">{item.emoji}</span>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-display font-bold text-stone-800 text-base leading-snug">
                    {item.name}
                  </h3>
                  {item.tag && (
                    <span
                      className={`flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded-full ${
                        tagColors[item.tag] || "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {item.tag}
                    </span>
                  )}
                </div>
                <p className="text-stone-500 font-body text-sm leading-relaxed mb-3">
                  {item.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-yellow-600 font-bold text-lg font-body">
                    {item.price}
                  </span>
                  <Link
                    to="/order"
                    className="text-xs font-medium text-stone-800 bg-amber-100 hover:bg-yellow-300 px-3 py-1.5 rounded-lg transition-colors duration-200"
                  >
                    Order →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order CTA */}
        <div className="mt-12 bg-stone-800 rounded-3xl p-8 text-center">
          <h3 className="font-display text-2xl font-bold text-amber-50 mb-2">
            Can't find what you're looking for?
          </h3>
          <p className="text-stone-400 font-body mb-5">
            We take custom orders for any occasion! Contact us on WhatsApp or
            fill in our order form.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/order"
              className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-stone-900 font-bold py-3 px-7 rounded-xl transition-colors"
            >
              📝 Place Custom Order
            </Link>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-medium py-3 px-7 rounded-xl transition-colors"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
