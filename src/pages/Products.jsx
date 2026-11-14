import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import products from "../data/products";

const Products = () => {
  const { category = "all" } = useParams();
  const [sort, setSort] = useState("default");

  const filteredProducts = useMemo(() => {
    let result = category.toLowerCase() === "all"
      ? products
      : products.filter((product) => product.category.toLowerCase() === category.toLowerCase());

    if (sort === "low") result = [...result].sort((a, b) => a.price - b.price);
    if (sort === "high") result = [...result].sort((a, b) => b.price - a.price);

    return result;
  }, [category, sort]);

  const title = category.toLowerCase() === "all" ? "All Products" : category;

  return (
    <main className="min-h-screen px-6 pb-20 pt-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-semibold text-blue-600">Apple Store</p>
            <h1 className="mt-1 text-5xl font-bold">{title}</h1>
            <p className="mt-3 text-gray-500">{filteredProducts.length} products</p>
          </div>

          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="rounded-full border border-gray-200 bg-white px-5 py-3 outline-none"
          >
            <option value="default">Sort Products</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>

        {filteredProducts.length ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="rounded-3xl bg-white px-6 py-20 text-center">
            <h2 className="text-2xl font-semibold">No products found</h2>
            <p className="mt-2 text-gray-500">Try another category.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Products;