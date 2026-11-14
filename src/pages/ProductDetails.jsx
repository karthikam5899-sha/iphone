import { useEffect, useState } from "react";
import { FaHeart, FaCheck } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import products from "../data/products";
import ProductGrid from "../components/ProductGrid";
import { useShop } from "../context/ShopContext";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  const { addToCart, toggleWishlist, isWishlisted } = useShop();

  const [selectedImage, setSelectedImage] = useState(product?.images?.[0]);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]);
  const [selectedStorage, setSelectedStorage] = useState(product?.storage?.[0]);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.images?.[0]);
      setSelectedColor(product.colors?.[0]);
      setSelectedStorage(product.storage?.[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6 pt-16 text-center">
        <div>
          <h1 className="text-4xl font-bold">Product Not Found</h1>
          <Link to="/" className="mt-6 inline-block text-blue-600">Back to Home</Link>
        </div>
      </main>
    );
  }

  const related = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 4);

  const addSelectedProduct = () => addToCart(product, {
    color: selectedColor,
    storage: selectedStorage
  });

  return (
    <main className="px-6 pb-20 pt-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="overflow-hidden rounded-[32px] bg-white">
              <img
                src={selectedImage}
                alt={product.name}
                className="h-[430px] w-full object-cover sm:h-[560px]"
              />
            </div>

            <div className="mt-5 flex gap-3 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={image}
                  onClick={() => setSelectedImage(image)}
                  className={`h-20 w-20 flex-none overflow-hidden rounded-2xl border-2 ${
                    selectedImage === image ? "border-blue-600" : "border-transparent"
                  }`}
                  aria-label={`View image ${index + 1}`}
                >
                  <img src={image} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold text-blue-600">{product.category}</p>
            <h1 className="mt-2 text-5xl font-bold tracking-tight">{product.name}</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">{product.description}</p>

            <div className="mt-8">
              <span className="text-3xl font-bold">₹{product.price.toLocaleString("en-IN")}</span>
              {product.oldPrice && (
                <span className="ml-3 text-gray-400 line-through">
                  ₹{product.oldPrice.toLocaleString("en-IN")}
                </span>
              )}
            </div>

            <div className="mt-9">
              <h3 className="font-semibold">Color</h3>
              <div className="mt-3 flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`rounded-full border px-5 py-2 text-sm ${
                      selectedColor === color
                        ? "border-blue-600 bg-blue-50 text-blue-700"
                        : "border-gray-300 bg-white"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7">
              <h3 className="font-semibold">Storage / Variant</h3>
              <div className="mt-3 flex flex-wrap gap-3">
                {product.storage.map((storage) => (
                  <button
                    key={storage}
                    onClick={() => setSelectedStorage(storage)}
                    className={`rounded-full border px-5 py-2 text-sm ${
                      selectedStorage === storage
                        ? "border-blue-600 bg-blue-50 text-blue-700"
                        : "border-gray-300 bg-white"
                    }`}
                  >
                    {storage}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-9 flex gap-3">
              <button
                onClick={addSelectedProduct}
                className="flex-1 rounded-full bg-blue-600 py-4 font-medium text-white transition hover:bg-blue-700"
              >
                Add to Cart
              </button>
              <button
                onClick={() => toggleWishlist(product)}
                className="flex h-14 w-14 items-center justify-center rounded-full border bg-white"
                aria-label="Toggle wishlist"
              >
                <FaHeart className={isWishlisted(product.id) ? "text-red-500" : "text-gray-500"} />
              </button>
            </div>

            <button
              onClick={addSelectedProduct}
              className="mt-3 w-full rounded-full bg-black py-4 font-medium text-white transition hover:bg-gray-800"
            >
              Buy Now
            </button>

            <div className="mt-12">
              <h2 className="text-2xl font-bold">Specifications</h2>
              <div className="mt-5 space-y-3">
                {product.specs.map((spec) => (
                  <div key={spec} className="flex gap-3 rounded-2xl bg-white p-4">
                    <FaCheck className="mt-1 text-blue-600" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-24">
            <h2 className="mb-8 text-3xl font-bold">You may also like</h2>
            <ProductGrid products={related} />
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductDetails;