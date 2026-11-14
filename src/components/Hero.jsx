import { Link } from "react-router-dom";

const Hero = () => (
  <section className="overflow-hidden bg-black pt-16 text-white">
    <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center justify-center px-4 py-20 text-center sm:px-6">
      <div>
        <p className="reveal fade-up font-semibold text-[var(--primary)]" data-reveal>
          The next generation
        </p>

        <h1 className="reveal fade-up mt-4 text-5xl font-bold tracking-tight sm:text-6xl md:text-8xl lg:text-9xl" data-reveal>
          iPhone
        </h1>

        <h2 className="reveal fade-up mt-5 text-2xl font-semibold sm:text-3xl md:text-5xl" data-reveal>
          Designed for the future.
        </h2>

        <p className="reveal mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-400 sm:text-base md:text-lg" data-reveal>
          Explore a premium collection of phones, tablets, computers, watches, and wireless audio.
        </p>

        <div className="reveal mt-9 flex flex-wrap justify-center gap-4" data-reveal>
          <Link
            to="/products/iPhone"
            className="rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-medium transition duration-300 hover:scale-105 hover:bg-[var(--primary-dark)] sm:px-7"
          >
            Explore Now
          </Link>
          <Link
            to="/products/iPhone"
            className="rounded-full border border-gray-600 px-6 py-3 text-sm font-medium transition duration-300 hover:scale-105 hover:bg-white hover:text-black sm:px-7"
          >
            Buy Now
          </Link>
        </div>

        <img
          src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=1400&q=85"
          alt="Featured smartphone"
          className="hero-image float reveal mx-auto mt-14 h-[320px] w-full max-w-2xl rounded-[32px] object-cover shadow-2xl sm:mt-16 sm:h-[420px] md:h-[520px]"
          data-reveal
        />
      </div>
    </div>
  </section>
);

export default Hero;