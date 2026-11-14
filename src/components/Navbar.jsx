import { useState } from "react";
import { FaApple, FaBars, FaTimes, FaSearch, FaShoppingBag, FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount, wishlist } = useShop();
  const navigate = useNavigate();

  const links = [
    ["Home", "/"],
    ["iPhone", "/products/iPhone"],
    ["iPad", "/products/iPad"],
    ["Mac", "/products/Mac"],
    ["Watch", "/products/Watch"],
    ["AirPods", "/products/AirPods"],
    ["Support", "/support"]
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-black/10 glass">
      <div className="mx-auto max-w-7xl px-4 sm:px-5">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" onClick={closeMenu} aria-label="Apple Store home" className="text-2xl transition hover:scale-110 hover:text-[var(--primary)]">
            <FaApple />
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {links.map(([name, path]) => (
              <Link
                key={name}
                to={path}
                className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-700 transition duration-300 hover:text-[var(--primary)]"
              >
                {name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 sm:gap-5">
            <button aria-label="Search" onClick={() => navigate("/search")} className="transition hover:scale-110 hover:text-blue-600">
              <FaSearch />
            </button>

            <Link to="/wishlist" aria-label="Wishlist" className="relative transition hover:scale-110 hover:text-red-500">
              <FaHeart />
              {wishlist.length > 0 && (
                <span className="absolute -right-3 -top-3 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] text-white">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <Link to="/cart" aria-label="Cart" className="relative transition hover:scale-110 hover:text-blue-600">
              <FaShoppingBag />
              {cartCount > 0 && (
                <span className="absolute -right-3 -top-3 flex h-4 min-w-4 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="transition hover:scale-110 md:hidden"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        <nav className={`mobile-nav ${menuOpen ? "open" : ""} md:hidden`}>
          {links.map(([name, path]) => (
            <Link
              key={name}
              to={path}
              onClick={closeMenu}
              className="block rounded-xl px-4 py-3 text-center text-sm transition hover:bg-black/5"
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;