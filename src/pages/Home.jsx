import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import products from "../data/products";

const Home = () => {
  const featuredProducts = products.slice(0, 8);

  const categories = [
    ["iPhone", "📱"],
    ["iPad", "📱"],
    ["Mac", "💻"],
    ["Watch", "⌚"],
    ["AirPods", "🎧"]
  ];

  return (
    <>
      <Hero />

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-12 text-center" data-reveal>
            <p className="font-semibold text-[var(--primary)]">Explore</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl md:text-5xl">The Apple Ecosystem</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-500 sm:text-base">
              Browse product categories and discover a clean, connected shopping experience.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-5">
            {categories.map(([name, icon]) => (
              <Link
                key={name}
                to={`/products/${name}`}
                className="reveal rounded-3xl bg-white p-5 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-7"
                data-reveal
              >
                <div className="text-4xl sm:text-5xl">{icon}</div>
                <h3 className="mt-4 font-semibold sm:mt-5">{name}</h3>
                <p className="mt-2 text-xs text-[var(--primary)] sm:text-sm">Explore →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end" data-reveal>
            <div>
              <p className="font-semibold text-[var(--primary)]">Featured</p>
              <h2 className="mt-1 text-3xl font-bold sm:text-4xl">Latest Products</h2>
            </div>
            <Link to="/products/all" className="text-sm font-medium text-[var(--primary)] transition hover:text-[var(--primary-dark)]">View All →</Link>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#f7f7f8_0%,#eef3ff_100%)] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-10 text-center" data-reveal>
            <p className="font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">Customer Love</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">What our buyers say</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-5">
            {[
              { name: "Arun", text: "Beautiful design, lightning-fast delivery, and premium packaging. I loved it." },
              { name: "Meera", text: "The product quality felt premium from the first click. Easy ordering and great support." },
              { name: "Karthik", text: "I ordered an iPhone and got it quickly in Chennai. The service was excellent." },
              { name: "Nisha", text: "Smooth checkout and the device looked exactly as promised. Highly recommended." },
              { name: "Vikram", text: "Very satisfied with the product, support team, and overall buying experience." }
            ].map(({ name, text }) => (
              <article key={name} className="reveal rounded-[1.75rem] border border-slate-200 bg-white/80 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm" data-reveal>
                <div className="mb-3 flex text-yellow-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={`${name}-${index}`}>★</span>
                  ))}
                </div>
                <p className="text-sm leading-6 text-slate-600">“{text}”</p>
                <div className="mt-5 border-t border-slate-200 pt-4 text-sm font-semibold text-slate-800">
                  {name}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-20 text-center text-white sm:px-6 sm:py-28">
        <div className="reveal mx-auto max-w-4xl" data-reveal>
          <p className="font-semibold text-blue-300">MacBook Pro</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            Power meets portability.
          </h2>
          <p className="mt-6 text-base text-gray-400 sm:text-lg">
            Professional performance for demanding work and creative workflows.
          </p>
          <Link to="/products/Mac" className="mt-8 inline-block rounded-full bg-[var(--primary)] px-6 py-3 font-medium transition duration-300 hover:scale-105 hover:bg-[var(--primary-dark)] sm:px-7">
            Explore Mac
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;