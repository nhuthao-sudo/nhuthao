import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import Home from "./pages/Home";

export default function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [query, setQuery] = useState("");

  function addToCart(product) {
    setCart((prev) => {
      const found = prev.find((p) => p.id === product.id);
      if (found) return prev.map((p) =>
        p.id === product.id ? { ...p, qty: p.qty + 1 } : p
      );
      return [...prev, { ...product, qty: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((p) => p.id !== id));
  }

  function changeQty(id, delta) {
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: Math.max(1, p.qty + delta) } : p))
        .filter(Boolean)
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Header
        cartCount={cart.length}
        onToggleCart={() => setShowCart((s) => !s)}
        query={query}
        setQuery={setQuery}
      />

      <Home addToCart={addToCart} query={query} />

      <Footer />

      {showCart && (
        <CartDrawer
          cart={cart}
          onClose={() => setShowCart(false)}
          changeQty={changeQty}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
}
