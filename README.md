# 🎂 Lakshmi Durga Bakery — Full Stack Web App

A production-ready bakery website built with **React.js**, **Tailwind CSS**, and **Firebase Firestore**.

> **Location:** Kanteru & Kakileru, Near Vasavi, Penugonda, West Godavari, Andhra Pradesh – 534320

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Firebase

Open `src/firebase.js` and replace the placeholder config with your actual Firebase project credentials:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

**How to get Firebase credentials:**
1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. Create a new project (e.g., `lakshmi-durga-bakery`)
3. Click **Add App** → **Web App**
4. Copy the `firebaseConfig` object
5. In Firebase Console → **Firestore Database** → Create database (start in test mode)

### 3. Update WhatsApp Number

In `src/components/WhatsAppButton.js` and `src/pages/Order.js`, replace:
```
919999999999
```
With your actual WhatsApp number (country code + number, no spaces or +).

### 4. Update Phone Number

Search and replace `+91 99999 99999` and `9999999999` with your actual business phone number.

### 5. Run the Development Server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Sticky responsive navbar
│   ├── Footer.js          # Footer with links & info
│   ├── Card.js            # Reusable card component
│   └── WhatsAppButton.js  # Floating WhatsApp button
├── pages/
│   ├── Home.js            # Landing page with hero, features, CTA
│   ├── Menu.js            # Full menu with category tabs
│   ├── Order.js           # Order form + contact + map
│   └── Admin.js           # Admin dashboard (/admin)
├── firebase.js            # Firebase config & Firestore init
├── App.js                 # Router setup
├── index.js               # React entry point
└── index.css              # Tailwind + custom styles
```

---

## 🌐 Pages

| Route     | Page            | Description                                    |
|-----------|-----------------|------------------------------------------------|
| `/`       | Home            | Hero, features, popular items, testimonials    |
| `/menu`   | Menu            | All items by category (Cakes, Snacks, etc.)    |
| `/order`  | Order & Contact | Order form, WhatsApp, address, Google Maps     |
| `/admin`  | Admin Dashboard | View, search & delete all orders from Firebase |

---

## 🔥 Firebase Features

- **`addDoc()`** — Saves orders to `orders` collection when form is submitted
- **`getDocs()`** — Fetches all orders in Admin dashboard
- **`deleteDoc()`** — Delete orders from Admin with confirmation modal
- **`serverTimestamp()`** — Records exact order time

### Firestore Collection: `orders`

Each document stores:
```json
{
  "name": "Ravi Kumar",
  "phone": "9876543210",
  "product": "Black Forest Cake",
  "quantity": "2",
  "deliveryDate": "2024-12-25",
  "message": "Write Happy Birthday on cake",
  "createdAt": "<timestamp>"
}
```

---

## 🎨 Design System

| Color     | Usage                          |
|-----------|-------------------------------|
| Stone/Brown | Primary background, navbar   |
| Amber/Cream | Subtle backgrounds, cards    |
| Yellow-500  | CTA buttons, accents, prices |
| Green-500   | WhatsApp buttons             |

**Fonts:**
- `Playfair Display` — Headings & display text (elegant serif)
- `Lato` — Body text (clean sans-serif)

---

## ☁️ Deployment on Vercel

### Option 1: Vercel CLI

```bash
npm install -g vercel
npm run build
vercel --prod
```

### Option 2: Vercel Dashboard

1. Push your project to **GitHub**
2. Go to [https://vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Framework: **Create React App**
5. Click **Deploy**

> ✅ No environment variables needed — Firebase config is in `firebase.js`

---

## 📱 Features

- ✅ Fully responsive (mobile + desktop)
- ✅ Sticky navbar with mobile hamburger menu
- ✅ Floating WhatsApp button with pulse animation
- ✅ Order form with validation saved to Firebase
- ✅ Admin dashboard with search & delete
- ✅ Google Maps embed (Penugonda location)
- ✅ Category tabs on Menu page
- ✅ SEO meta tags (title, description, keywords, OG)
- ✅ Smooth page transitions
- ✅ Custom CSS animations (fadeInUp, pulse)

---

## 🛠️ Tech Stack

| Layer      | Technology               |
|------------|--------------------------|
| Frontend   | React.js 18              |
| Styling    | Tailwind CSS 3           |
| Routing    | React Router DOM v6      |
| Database   | Firebase Firestore v10   |
| Fonts      | Google Fonts             |
| Deployment | Vercel                   |

---

## 📞 Business Info

- **Bakery:** Lakshmi Durga Bakery
- **Location:** Kanteru & Kakileru, Near Vasavi, Penugonda, West Godavari, AP – 534320
- **Tagline:** *Freshly Baked Happiness*

---

*Built with ❤️ for West Godavari, Andhra Pradesh*
