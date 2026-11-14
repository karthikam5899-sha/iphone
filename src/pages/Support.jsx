import { Link } from "react-router-dom";

const supportSections = [
  {
    id: "shipping",
    title: "Shipping & Delivery",
    description:
      "Free standard shipping is available on orders above ₹4,999. Most eligible orders are dispatched within 24 hours and delivered within 3–7 business days depending on your location.",
    items: [
      "Free express delivery on selected flagship products.",
      "Live order tracking after dispatch.",
      "Secure packaging with signature verification on premium items."
    ]
  },
  {
    id: "returns",
    title: "Returns & Exchanges",
    description:
      "We want your shopping experience to feel effortless. If your product arrives damaged or you change your mind, we’re happy to help with a simple return or exchange.",
    items: [
      "30-day return window for unused items in original packaging.",
      "Free exchanges for eligible products with manufacturing defects.",
      "Fast refunds returned to your original payment method within 5–7 business days."
    ]
  },
  {
    id: "contact",
    title: "Contact Support",
    description:
      "Our support specialists are available to answer questions about orders, products, delivery, and after-sales service.",
    items: [
      "Email: support@applestore-demo.com",
      "Phone: +91 98765 43210",
      "Hours: Monday–Saturday, 9:00 AM to 7:00 PM"
    ]
  }
];

const Support = () => (
  <main className="min-h-screen bg-[#f5f7fb] px-4 pb-20 pt-28 sm:px-6">
    <section className="mx-auto max-w-6xl">
      <div className="reveal text-center" data-reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
          Support
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          We’re here to help.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
          Find shipping updates, return policies, and the best way to get in touch with our team.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {supportSections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="reveal rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            data-reveal
          >
            <div className="mb-4 inline-flex rounded-full bg-[var(--primary-soft)] px-3 py-1 text-xs font-semibold text-[var(--primary)]">
              {section.title}
            </div>
            <p className="text-sm leading-6 text-slate-600">{section.description}</p>
          </a>
        ))}
      </div>

      <div className="mt-14 space-y-8">
        {supportSections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="reveal rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            data-reveal
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                  {section.title}
                </p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                  {section.title}
                </h2>
              </div>
              <Link to="/" className="text-sm font-medium text-[var(--primary)] transition hover:text-[var(--primary-dark)]">
                Back to Home
              </Link>
            </div>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">
              {section.description}
            </p>

            <ul className="mt-6 space-y-4">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--primary)]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="reveal mt-14 rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),transparent_60%),linear-gradient(135deg,#0f172a,#1d4ed8)] p-6 text-white shadow-xl sm:p-8" data-reveal>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Need a quick answer?</p>
            <h3 className="mt-2 text-2xl font-bold">Talk to the Apple Store support team</h3>
          </div>
          <a
            href="mailto:support@applestore-demo.com"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:scale-105"
          >
            Email Support
          </a>
        </div>
      </div>
    </section>
  </main>
);

export default Support;
