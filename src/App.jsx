import { useEffect, useState } from "react";
import { FaApple } from "react-icons/fa";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Search from "./pages/Search";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";

const BrandLoader = () => (
  <div className="brand-loader" aria-live="polite" aria-label="Loading Apple Store">
    <div className="brand-loader__logo">
      <FaApple />
    </div>
    <div className="brand-loader__label">Apple Store</div>
    <div className="brand-loader__bar">
      <span />
    </div>
  </div>
);

const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");

    revealItems.forEach((item) => {
      item.classList.remove("visible");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/search" element={<Search />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-shell">
      {isLoading ? (
        <BrandLoader />
      ) : (
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;