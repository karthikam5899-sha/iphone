import ProductGrid from "../components/ProductGrid";
import { useShop } from "../context/ShopContext";

const Wishlist = () => {
  const { wishlist } = useShop();

  return (
    <main className="min-h-screen px-6 pb-20 pt-28">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-3 text-5xl font-bold">Wishlist</h1>
        <p className="mb-10 text-gray-500">Save products you love.</p>

        {wishlist.length ? (
          <ProductGrid products={wishlist} />
        ) : (
          <div className="rounded-3xl bg-white py-20 text-center">
            <h2 className="text-2xl font-semibold">Your wishlist is empty</h2>
            <p className="mt-2 text-gray-500">Tap the heart icon on a product to save it.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Wishlist;