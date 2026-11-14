import { FaHeart, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

const ProductCard = ({ product }) => {
  const { addToCart, toggleWishlist, isWishlisted } = useShop();

  return (
    <article
      className="product-card reveal group rounded-3xl bg-white p-4 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)]"
      data-reveal
    >
      <div className="relative overflow-hidden rounded-2xl bg-gray-100">
        <Link to={`/product/${product.id}`} aria-label={`View ${product.name}`}>
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="product-image h-64 w-full object-cover transition duration-500 sm:h-72"
          />
        </Link>

        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
            {product.badge}
          </span>
        )}

        <button
          aria-label={`Toggle ${product.name} wishlist`}
          onClick={() => toggleWishlist(product)}
          className="absolute right-4 top-4 rounded-full bg-white/90 p-3 shadow transition duration-300 hover:scale-110 hover:bg-white"
        >
          <FaHeart className={isWishlisted(product.id) ? "text-red-500" : "text-gray-500"} />
        </button>
      </div>

      <div className="pt-5">
        <p className="text-sm text-gray-500">{product.category}</p>

        <Link to={`/product/${product.id}`}>
          <h3 className="mt-1 text-xl font-semibold transition-colors duration-300 hover:text-blue-600">{product.name}</h3>
        </Link>

        <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-gray-500">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div>
            <p className="font-semibold">
              ₹{product.price.toLocaleString("en-IN")}
            </p>
            {product.oldPrice && (
              <p className="text-xs text-gray-400 line-through">
                ₹{product.oldPrice.toLocaleString("en-IN")}
              </p>
            )}
          </div>

          <button
            onClick={() => addToCart(product)}
            className="rounded-full bg-black p-3 text-white transition duration-300 hover:scale-105 hover:bg-blue-600"
            aria-label={`Add ${product.name} to cart`}
          >
            <FaShoppingBag />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;