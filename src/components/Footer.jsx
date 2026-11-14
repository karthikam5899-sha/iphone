import {
  FaApple,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt
} from "react-icons/fa";
import { Link } from "react-router-dom";

const socialLinks = [
  { icon: FaInstagram, label: "Instagram", url: "https://instagram.com" },
  { icon: FaFacebookF, label: "Facebook", url: "https://facebook.com" },
  { icon: FaTwitter, label: "Twitter", url: "https://twitter.com" },
  { icon: FaYoutube, label: "YouTube", url: "https://youtube.com" }
];

const Footer = () => (
  <footer className="bg-black text-gray-400">
    <div className="mx-auto max-w-7xl px-6 py-14">
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <FaApple className="mb-5 text-3xl text-white" />
          <p className="max-w-xs text-sm leading-6 text-gray-300">
            Premium devices, accessories, and support tailored for customers across Tamil Nadu.
          </p>

          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
              >
                <Icon className="text-sm" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Products</h3>
          {['iPhone', 'iPad', 'Mac', 'Watch', 'AirPods'].map((item) => (
            <Link key={item} to={`/products/${item}`} className="mb-2 block text-sm hover:text-white">
              {item}
            </Link>
          ))}
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Store</h3>
          <Link to="/cart" className="mb-2 block text-sm hover:text-white">Shopping Bag</Link>
          <Link to="/wishlist" className="mb-2 block text-sm hover:text-white">Wishlist</Link>
          <Link to="/search" className="block text-sm hover:text-white">Search</Link>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Support</h3>
          <Link to="/support#shipping" className="mb-2 block text-sm hover:text-white">Shipping</Link>
          <Link to="/support#returns" className="mb-2 block text-sm hover:text-white">Returns</Link>
          <Link to="/support#contact" className="block text-sm hover:text-white">Contact</Link>
        </div>
      </div>

      <div className="mt-10 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-[1.3fr_1fr]">
        <div className="space-y-3 text-sm text-gray-300">
          <div className="flex items-start gap-3">
            <FaPhoneAlt className="mt-1 text-white" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="mt-1 text-white" />
            <span>45, Anna Salai, Chennai, Tamil Nadu 600002</span>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-xs text-gray-400 md:flex-row">
        <p>© 2026 Apple Store Tamil Nadu. All rights reserved.</p>
        <p>Customer support available daily</p>
      </div>
    </div>
  </footer>
);

export default Footer;