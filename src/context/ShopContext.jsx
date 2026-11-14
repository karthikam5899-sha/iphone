import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ShopContext = createContext(null);

const readStorage = (key, fallback = []) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState(() => readStorage("apple-cart"));
  const [wishlist, setWishlist] = useState(() => readStorage("apple-wishlist"));

  useEffect(() => {
    localStorage.setItem("apple-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("apple-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product, options = {}) => {
    const color = options.color || product.colors?.[0] || "Default";
    const storage = options.storage || product.storage?.[0] || "Standard";
    const key = `${product.id}-${color}-${storage}`;

    setCart((current) => {
      const existing = current.find((item) => item.key === key);
      if (existing) {
        return current.map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...current, { ...product, key, selectedColor: color, selectedStorage: storage, quantity: 1 }];
    });
  };

  const removeFromCart = (key) => {
    setCart((current) => current.filter((item) => item.key !== key));
  };

  const increaseQuantity = (key) => {
    setCart((current) =>
      current.map((item) =>
        item.key === key ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (key) => {
    setCart((current) =>
      current
        .map((item) =>
          item.key === key ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const toggleWishlist = (product) => {
    setWishlist((current) => {
      const exists = current.some((item) => item.id === product.id);
      return exists
        ? current.filter((item) => item.id !== product.id)
        : [...current, product];
    });
  };

  const isWishlisted = (id) => wishlist.some((item) => item.id === id);

  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart]
  );

  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart]
  );

  const value = {
    cart,
    wishlist,
    cartCount,
    cartTotal,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    toggleWishlist,
    isWishlisted
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) throw new Error("useShop must be used inside ShopProvider");
  return context;
};