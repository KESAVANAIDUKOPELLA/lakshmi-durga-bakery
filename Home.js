import React from "react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: "🎂",
    title: "Fresh Cakes",
    desc: "Baked fresh daily with premium ingredients. From classic sponge to rich chocolate truffle.",
  },
  {
    icon: "✏️",
    title: "Custom Orders",
    desc: "Personalized cakes for birthdays, weddings & celebrations. Your dream cake, our craft.",
  },
  {
    icon: "💰",
    title: "Affordable Prices",
    desc: "Quality baked goods at prices that make every occasion sweet — without breaking the bank.",
  },
  {
    icon: "⚡",
    title: "Same-Day Ready",
    desc: "Order early and enjoy fresh-baked goodness ready for pickup or local delivery the same day.",
  },
];

const testimonials = [
  {
    name: "Priya Lakshmi",
    text: "The Black Forest cake was absolutely divine! Perfect for my daughter's birthday. Will order again!",
    location: "Penugonda",
  },
  {
    name: "Ravi Kumar",
    text: "Best veg puffs in the area! Crispy, hot and so tasty. My whole family loves them.",
    location: "Kakileru",
  },
  {
    name: "Sudha Rani",
    text: "Ordered a custom cake for our anniversary — it was beautiful and delicious. Highly recommend!",
    location: "Kanteru",
  },
];

const popularItems = [
  { emoji: "🎂", name: "Chocolate Cake", price: "₹350" },
  { emoji: "🍰", name: "Black Forest", price: "₹380" },
  { emoji: "🧁", name: "Butterscotch", price: "₹320" },
  { emoji: "🥐", name: "Veg Puff", price: "₹20" },
  { emoji: "🥟", name: "Samosa", price: "₹15" },
  { emoji: "🍪", name: "Biscuits", price: "₹80" },
];

const Home = () => {
  const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent(
    "Hello! I'd like to place an order from Lakshmi Durga Bakery 🎂"
  )}`;

  return (
    <div className="pt-16">
      {/* ── Hero ── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #4e342e 0%, #795548 40%, #5d4037 100%)",
        }}
      >
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10 blur-3xl bg-yellow-400" />
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-10 blur-2xl bg-amber-100" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="text-center lg:text-left fade-in-up">
            <div className="inline-flex items-center gap-2 text-yellow-300 text-xs font-body tracking-widest uppercase px-4 py-2 rounded-full mb-6 border border-yellow-500 border-opacity-30 bg-white bg-opacity-10">
              <span>🌟</span> West Godavari, Andhra Pradesh
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-50 leading-tight mb-4">
              Lakshmi Durga
              <br />
              <span className="text-yellow-400 italic">Bakery</span>
            </h1>
            <p className="text-yellow-300 font-display italic text-xl mb-4">
              ✦ Freshly Baked Happiness Every Day ✦
            </p>
            <p className="text-amber-200 font-body text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              From our oven to your heart — handcrafted cakes, snacks &
              pastries made with the finest ingredients and a whole lot of love
              in Kanteru, West Godavari.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start flex-wrap">
              <Link
                to="/order"
                className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-stone-900 font-bold font-body py-3 px-8 rounded-xl transition-all duration-200 shadow-lg"
              >
                🛒 Order Now
              </Link>
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 border border-amber-200 border-opacity-50 text-amber-100 hover:bg-white hover:bg-opacity-10 font-medium font-body py-3 px-8 rounded-xl transition-all duration-200"
              >
                📋 View Menu
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-medium font-body py-3 px-8 rounded-xl transition-all duration-200"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>

          {/* Hero Card */}
          <div className="flex justify-center lg:justify-end fade-in-up">
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-3xl flex flex-col items-center justify-center shadow-2xl border-4 border-yellow-500 border-opacity-30 bg-amber-50">
                <span className="text-8xl mb-3">🎂</span>
                <p className="font-display text-stone-800 font-bold text-xl text-center px-4">
                  Baked with Love
                </p>
                <p className="text-stone-600 font-body text-sm text-center px-6 mt-1">
                  Every bite tells a story
                </p>
              </div>
              <div className="absolute -top-4 -right-4 bg-yellow-500 text-stone-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                100% Fresh ✓
              </div>
              <div className="absolute -bottom-4 -left-4 bg-stone-800 text-amber-100 text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                Custom Orders ✨
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full fill-amber-50">
            <path d="M0,32L80,37.3C160,43,320,53,480,53.3C640,53,800,43,960,37.3C1120,32,1280,32,1360,32L1440,32L1440,60L0,60Z" />
          </svg>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-16 sm:py-20 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-yellow-600 font-body text-sm tracking-widest uppercase font-semibold mb-2">
              Why Choose Us
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-800">
              What Makes Us Special
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 text-center shadow-warm border border-amber-100 hover:border-yellow-400 transition-all duration-300 menu-card"
              >
                <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 border border-amber-200">
                  {f.icon}
                </div>
                <h3 className="font-display font-bold text-stone-800 text-lg mb-2">
                  {f.title}
                </h3>
                <p className="font-body text-stone-500 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Popular Items ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-yellow-600 font-body text-sm tracking-widest uppercase font-semibold mb-2">
              Customer Favourites
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-800">
              Our Popular Items
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularItems.map((item, i) => (
              <div
                key={i}
                className="menu-card bg-amber-50 rounded-2xl p-4 text-center border border-amber-100"
              >
                <div className="text-4xl mb-2">{item.emoji}</div>
                <p className="font-display font-semibold text-stone-800 text-sm leading-tight">
                  {item.name}
                </p>
                <p className="text-yellow-600 font-bold text-sm mt-1">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 bg-stone-800 hover:bg-stone-700 text-amber-50 font-medium font-body py-3 px-8 rounded-xl transition-colors duration-200"
            >
              View Full Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-16 sm:py-20 bg-stone-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-yellow-400 font-body text-sm tracking-widest uppercase font-semibold mb-2">
              Testimonials
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-amber-50">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 border border-white border-opacity-10 bg-white bg-opacity-10"
              >
                <div className="text-yellow-400 text-2xl mb-3">❝</div>
                <p className="font-body text-amber-100 leading-relaxed mb-4 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-yellow-500 flex items-center justify-center text-stone-900 font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-amber-50 text-sm">
                      {t.name}
                    </p>
                    <p className="text-stone-400 text-xs">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-16 bg-yellow-500">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
            Ready to Order Something Delicious?
          </h2>
          <p className="font-body text-stone-700 mb-8 text-base">
            Place your order online or call us directly. We'll bake your
            happiness!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/order"
              className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-amber-50 font-bold py-3 px-8 rounded-xl transition-colors duration-200 shadow-lg"
            >
              🛒 Place an Order
            </Link>
            <a
              href="tel:+919999999999"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-amber-50 text-stone-900 font-bold py-3 px-8 rounded-xl transition-colors duration-200 shadow-lg"
            >
              📞 Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
