import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const productOptions = [
  "Chocolate Truffle Cake",
  "Black Forest Cake",
  "Butterscotch Cake",
  "Vanilla Sponge Cake",
  "Pineapple Cake",
  "Custom Cake",
  "Veg Puff",
  "Egg Puff",
  "Samosa",
  "Bread Roll",
  "Chocolate Pastry",
  "Strawberry Pastry",
  "Butter Biscuits",
  "Coconut Cookies",
  "Other / Custom Item",
];

const initialForm = {
  name: "",
  phone: "",
  product: "",
  quantity: "1",
  deliveryDate: "",
  message: "",
};

const Order = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number.";
    }
    if (!form.product) newErrors.product = "Please select a product.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    try {
      await addDoc(collection(db, "orders"), {
        ...form,
        createdAt: serverTimestamp(),
      });
      setStatus("success");
      setForm(initialForm);
      setErrors({});
    } catch (err) {
      console.error("Error saving order:", err);
      setStatus("error");
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border font-body text-sm text-stone-800 bg-white outline-none transition-all duration-200 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 ${
      errors[field]
        ? "border-red-400 bg-red-50"
        : "border-amber-200 hover:border-amber-400"
    }`;

  return (
    <div className="pt-16 min-h-screen bg-amber-50">
      {/* Header */}
      <div className="bg-stone-800 py-14 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-yellow-400 font-body text-sm tracking-widest uppercase font-semibold mb-2">
            Place Your Order
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-amber-50 mb-3">
            Order & Contact
          </h1>
          <p className="text-stone-400 font-body max-w-xl mx-auto">
            Fill in your details and we'll get in touch to confirm your order.
            We're also available on WhatsApp!
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* ── Order Form ── */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-3xl shadow-warm border border-amber-100 p-6 sm:p-8">
            <h2 className="font-display text-2xl font-bold text-stone-800 mb-1">
              Order Form
            </h2>
            <p className="text-stone-400 font-body text-sm mb-6">
              All fields marked with * are required.
            </p>

            {/* Success State */}
            {status === "success" && (
              <div className="mb-6 bg-green-50 border border-green-200 rounded-2xl p-5 text-center">
                <div className="text-4xl mb-2">🎉</div>
                <h3 className="font-display font-bold text-green-800 text-lg mb-1">
                  Order Placed Successfully!
                </h3>
                <p className="text-green-700 font-body text-sm">
                  Thank you! We've received your order and will contact you
                  shortly on your phone number to confirm.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-sm font-medium text-green-700 underline"
                >
                  Place another order
                </button>
              </div>
            )}

            {/* Error State */}
            {status === "error" && (
              <div className="mb-6 bg-red-50 border border-red-200 rounded-2xl p-4">
                <p className="text-red-700 font-body text-sm">
                  ⚠️ Something went wrong. Please try again or contact us on
                  WhatsApp.
                </p>
              </div>
            )}

            {status !== "success" && (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-stone-700 font-body text-sm font-medium mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Ravi Kumar"
                    className={inputClass("name")}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-stone-700 font-body text-sm font-medium mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="e.g. 9876543210"
                    maxLength={10}
                    className={inputClass("phone")}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Product */}
                <div>
                  <label className="block text-stone-700 font-body text-sm font-medium mb-1.5">
                    Product / Item *
                  </label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className={inputClass("product")}
                  >
                    <option value="">-- Select a product --</option>
                    {productOptions.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                  {errors.product && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.product}
                    </p>
                  )}
                </div>

                {/* Quantity & Date */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-700 font-body text-sm font-medium mb-1.5">
                      Quantity
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      value={form.quantity}
                      onChange={handleChange}
                      min="1"
                      max="100"
                      className={inputClass("quantity")}
                    />
                  </div>
                  <div>
                    <label className="block text-stone-700 font-body text-sm font-medium mb-1.5">
                      Delivery Date
                    </label>
                    <input
                      type="date"
                      name="deliveryDate"
                      value={form.deliveryDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className={inputClass("deliveryDate")}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-stone-700 font-body text-sm font-medium mb-1.5">
                    Additional Message / Special Instructions
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="e.g. Write 'Happy Birthday Priya' on the cake. Eggless, please."
                    className={`${inputClass("message")} resize-none`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-yellow-500 hover:bg-yellow-400 disabled:bg-yellow-200 text-stone-900 font-bold font-body py-3.5 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <svg
                        className="animate-spin w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Placing Order...
                    </>
                  ) : (
                    "🛒 Place Order"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* ── Contact Info & Map ── */}
        <div className="lg:col-span-2 space-y-6">
          {/* Contact Card */}
          <div className="bg-white rounded-3xl shadow-warm border border-amber-100 p-6">
            <h3 className="font-display font-bold text-stone-800 text-xl mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <p className="font-body font-semibold text-stone-700 text-sm">
                    Address
                  </p>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    Kanteru & Kakileru, Near Vasavi,
                    <br />
                    Penugonda, West Godavari,
                    <br />
                    Andhra Pradesh – 534320
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-xl">📞</span>
                <div>
                  <p className="font-body font-semibold text-stone-700 text-sm">
                    Phone
                  </p>
                  <a
                    href="tel:+919999999999"
                    className="text-yellow-600 hover:text-yellow-500 font-medium text-sm"
                  >
                    +91 99999 99999
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-xl">⏰</span>
                <div>
                  <p className="font-body font-semibold text-stone-700 text-sm">
                    Hours
                  </p>
                  <p className="text-stone-500 text-sm">
                    Daily: 7:00 AM – 9:00 PM
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-xl">💬</span>
                <div>
                  <p className="font-body font-semibold text-stone-700 text-sm">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-500 font-medium text-sm"
                  >
                    Chat with us on WhatsApp →
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick WhatsApp Order */}
          <div className="bg-green-600 rounded-3xl p-6 text-white text-center">
            <div className="text-4xl mb-3">💬</div>
            <h3 className="font-display font-bold text-xl mb-2">
              Order via WhatsApp
            </h3>
            <p className="text-green-100 font-body text-sm mb-4">
              Prefer WhatsApp? Send us a message and we'll take your order
              directly!
            </p>
            <a
              href={`https://wa.me/919999999999?text=${encodeURIComponent(
                "Hello! I'd like to place an order from Lakshmi Durga Bakery 🎂"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-green-700 font-bold py-2.5 px-6 rounded-xl hover:bg-green-50 transition-colors font-body text-sm"
            >
              Open WhatsApp →
            </a>
          </div>

          {/* Google Maps Embed */}
          <div className="bg-white rounded-3xl shadow-warm border border-amber-100 overflow-hidden">
            <div className="p-4 border-b border-amber-100">
              <h3 className="font-display font-bold text-stone-800 text-base">
                📍 Find Us on the Map
              </h3>
              <p className="text-stone-400 text-xs mt-0.5">
                Penugonda, West Godavari, AP
              </p>
            </div>
            <iframe
              title="Lakshmi Durga Bakery Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15284.09843729963!2d81.16!3d16.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a95c65af3f85%3A0xd25cd9df7a46e97a!2sPenugonda%2C%20Andhra%20Pradesh%20534320!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
