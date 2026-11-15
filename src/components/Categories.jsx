// Categories.jsx
// The "Browse by category" section: a heading and six clickable tiles.

function Categories() {
  // The list of categories. To add one later, we only add a name here.
  const categories = [
    "Plumbing",
    "Electrical",
    "Hair and Beauty",
    "Tailoring",
    "Catering",
    "Tutoring",
  ];

  return (
    // id="services" lets the "Find services" link in the navbar scroll here
    <section id="services" className="bg-surface">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20 lg:px-20">
        {/* Heading row */}
        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold uppercase tracking-[0.08em] text-brand">
              Popular services
            </p>
            <h2 className="font-heading text-4xl font-bold leading-[1.2] text-ink lg:text-[40px]">
              Browse by category
            </h2>
          </div>

          <a href="#" className="text-lg font-medium text-brand hover:underline">
            View all →
          </a>
        </div>

        {/* Tiles */}
        <div className="mt-12 grid grid-cols-2 gap-7 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((name) => (
            <a
              key={name}
              href="#"
              className="group flex h-40 flex-col items-center justify-center gap-4 rounded-[20px] bg-brand-soft text-lg font-medium text-ink transition hover:bg-brand hover:text-white"
            >
              {/* Icon circle (we will add real icons later) */}
              <span className="h-14 w-14 rounded-full bg-surface transition group-hover:bg-accent" />
              {name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;