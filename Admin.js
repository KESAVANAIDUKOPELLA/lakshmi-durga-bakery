import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, orderBy, query, deleteDoc, doc } from "firebase/firestore";

const Admin = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const fetchOrders = async () => {
    setLoading(true);
    setError(null);
    try {
      const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((d) => ({
        id: d.id,
        ...d.data(),
        createdAt: d.data().createdAt?.toDate?.() || null,
      }));
      setOrders(data);
    } catch (err) {
      console.error(err);
      setError(
        "Failed to load orders. Make sure Firebase is configured correctly."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleDelete = async (id) => {
    setDeleting(true);
    try {
      await deleteDoc(doc(db, "orders", id));
      setOrders((prev) => prev.filter((o) => o.id !== id));
      setDeleteConfirm(null);
    } catch (err) {
      console.error(err);
    } finally {
      setDeleting(false);
    }
  };

  const formatDate = (date) => {
    if (!date) return "—";
    return new Intl.DateTimeFormat("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  const filtered = orders.filter(
    (o) =>
      o.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.phone?.includes(searchTerm) ||
      o.product?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = {
    total: orders.length,
    today: orders.filter((o) => {
      if (!o.createdAt) return false;
      const now = new Date();
      return o.createdAt.toDateString() === now.toDateString();
    }).length,
  };

  return (
    <div className="pt-16 min-h-screen bg-stone-100">
      {/* Header */}
      <div className="bg-stone-900 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-yellow-400 font-body text-xs tracking-widest uppercase font-semibold mb-1">
              Admin Panel
            </p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-amber-50">
              Orders Dashboard
            </h1>
            <p className="text-stone-400 font-body text-sm mt-1">
              Lakshmi Durga Bakery — Kanteru, West Godavari
            </p>
          </div>
          <button
            onClick={fetchOrders}
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-stone-900 font-bold py-2.5 px-5 rounded-xl transition-colors font-body text-sm"
          >
            🔄 Refresh Orders
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Orders", value: stats.total, icon: "📦" },
            { label: "Today's Orders", value: stats.today, icon: "📅" },
            {
              label: "Pending Review",
              value: stats.total,
              icon: "⏳",
            },
            { label: "Bakery Status", value: "Open", icon: "✅" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 shadow-sm border border-stone-200"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <p className="font-display font-bold text-stone-800 text-2xl leading-none">
                {stat.value}
              </p>
              <p className="text-stone-400 font-body text-xs mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="mb-6 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400">
              🔍
            </span>
            <input
              type="text"
              placeholder="Search by name, phone or product..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 bg-white font-body text-sm text-stone-800 outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
            />
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-stone-200 text-stone-500 font-body text-sm">
            <span>📊</span>
            <span>
              {filtered.length} of {orders.length} orders
            </span>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-24 gap-3">
            <svg
              className="animate-spin w-8 h-8 text-yellow-500"
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
            <p className="text-stone-500 font-body text-sm">
              Loading orders from Firebase...
            </p>
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">⚠️</div>
            <p className="text-red-700 font-body font-medium">{error}</p>
            <p className="text-red-500 font-body text-sm mt-1">
              Check your Firebase configuration in{" "}
              <code className="bg-red-100 px-1 rounded">src/firebase.js</code>
            </p>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && orders.length === 0 && (
          <div className="text-center py-24">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="font-display text-xl font-bold text-stone-700 mb-2">
              No orders yet
            </h3>
            <p className="text-stone-400 font-body text-sm">
              When customers place orders, they'll appear here.
            </p>
          </div>
        )}

        {/* Orders Grid */}
        {!loading && !error && filtered.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {filtered.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
              >
                {/* Card Header */}
                <div className="bg-stone-800 px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-stone-900 font-bold text-sm">
                      {order.name?.[0]?.toUpperCase() || "?"}
                    </div>
                    <span className="font-display font-semibold text-amber-50 text-sm">
                      {order.name || "Unknown"}
                    </span>
                  </div>
                  <span className="text-stone-400 font-body text-xs">
                    {formatDate(order.createdAt)}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-stone-400 font-body text-xs uppercase tracking-wide mb-0.5">
                        Phone
                      </p>
                      <a
                        href={`tel:${order.phone}`}
                        className="text-yellow-600 font-medium text-sm hover:text-yellow-500"
                      >
                        {order.phone || "—"}
                      </a>
                    </div>
                    <div>
                      <p className="text-stone-400 font-body text-xs uppercase tracking-wide mb-0.5">
                        Quantity
                      </p>
                      <p className="text-stone-800 font-medium text-sm">
                        {order.quantity || "1"}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-stone-400 font-body text-xs uppercase tracking-wide mb-0.5">
                      Product
                    </p>
                    <p className="text-stone-800 font-semibold text-sm">
                      {order.product || "—"}
                    </p>
                  </div>

                  {order.deliveryDate && (
                    <div>
                      <p className="text-stone-400 font-body text-xs uppercase tracking-wide mb-0.5">
                        Delivery Date
                      </p>
                      <p className="text-stone-800 text-sm">
                        📅 {order.deliveryDate}
                      </p>
                    </div>
                  )}

                  {order.message && (
                    <div>
                      <p className="text-stone-400 font-body text-xs uppercase tracking-wide mb-0.5">
                        Message
                      </p>
                      <p className="text-stone-600 text-sm leading-relaxed bg-amber-50 rounded-lg px-3 py-2 border border-amber-100">
                        {order.message}
                      </p>
                    </div>
                  )}
                </div>

                {/* Card Actions */}
                <div className="px-5 pb-5 flex gap-2">
                  <a
                    href={`https://wa.me/91${order.phone}?text=${encodeURIComponent(
                      `Hello ${order.name}! Your order for ${order.product} from Lakshmi Durga Bakery has been confirmed. Thank you! 🎂`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-green-50 hover:bg-green-100 text-green-700 font-medium text-xs py-2 px-3 rounded-lg transition-colors border border-green-200"
                  >
                    💬 WhatsApp
                  </a>
                  <a
                    href={`tel:${order.phone}`}
                    className="flex-1 text-center bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium text-xs py-2 px-3 rounded-lg transition-colors border border-blue-200"
                  >
                    📞 Call
                  </a>
                  <button
                    onClick={() => setDeleteConfirm(order.id)}
                    className="bg-red-50 hover:bg-red-100 text-red-600 font-medium text-xs py-2 px-3 rounded-lg transition-colors border border-red-200"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No search results */}
        {!loading && !error && orders.length > 0 && filtered.length === 0 && (
          <div className="text-center py-16">
            <div className="text-4xl mb-3">🔍</div>
            <p className="text-stone-500 font-body">
              No orders match your search "{searchTerm}"
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="mt-3 text-yellow-600 font-medium text-sm underline"
            >
              Clear search
            </button>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl">
            <div className="text-4xl text-center mb-3">🗑️</div>
            <h3 className="font-display text-xl font-bold text-stone-800 text-center mb-2">
              Delete Order?
            </h3>
            <p className="text-stone-500 font-body text-sm text-center mb-5">
              This action cannot be undone. The order will be permanently
              removed from Firebase.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 py-2.5 rounded-xl border border-stone-200 text-stone-700 font-medium font-body text-sm hover:bg-stone-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                disabled={deleting}
                className="flex-1 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold font-body text-sm transition-colors disabled:opacity-60"
              >
                {deleting ? "Deleting..." : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
