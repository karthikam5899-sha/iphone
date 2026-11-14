import { useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import products from "../data/products";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return [];
    return products.filter((product) =>
      `${product.name} ${product.category} ${product.description}`
        .toLowerCase()
        .includes(normalized)
    );
  }, [query]);

  return (
    <div>
      <div className="relative">
        <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          autoFocus
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search iPhone, iPad, Mac..."
          className="w-full rounded-full border border-gray-200 bg-white py-4 pl-12 pr-5 outline-none transition focus:border-blue-600"
        />
      </div>

      {query.trim() && (
        <div className="mt-5 overflow-hidden rounded-3xl bg-white shadow-sm">
          {results.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="flex items-center gap-4 border-b border-gray-100 p-4 transition last:border-0 hover:bg-gray-50"
            >
              <img src={product.image} alt={product.name} className="h-16 w-16 rounded-xl object-cover" />
              <div>
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-500">
                  {product.category} · ₹{product.price.toLocaleString("en-IN")}
                </p>
              </div>
            </Link>
          ))}

          {results.length === 0 && (
            <p className="p-8 text-center text-gray-500">No products found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;