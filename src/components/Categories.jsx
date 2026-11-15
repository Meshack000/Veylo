// Categories.jsx
// The "Browse by category" section: a heading and six clickable tiles with icons.

import { Wrench, Zap, Scissors, Shirt, ChefHat, GraduationCap } from "lucide-react";

function Categories() {
  // The list of categories. Each one has a name and an icon.
  // To add a category later, we add one line here.
  const categories = [
    { name: "Plumbing", Icon: Wrench },
    { name: "Electrical", Icon: Zap },
    { name: "Hair and Beauty", Icon: Scissors },
    { name: "Tailoring", Icon: Shirt },
    { name: "Catering", Icon: ChefHat },
    { name: "Tutoring", Icon: GraduationCap },
  ];

  return (
    // id="services" lets the "Find services" link in the navbar scroll here
    <section id="services" className="bg-surface">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-16 lg:px-20">
        {/* Heading row */}
        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-brand">
              Popular services
            </p>
            <h2 className="font-heading text-3xl font-bold leading-[1.2] text-ink lg:text-4xl">
              Browse by category
            </h2>
          </div>

          <a href="#" className="text-base font-medium text-brand hover:underline">
            View all →
          </a>
        </div>

        {/* Tiles */}
        <div className="mt-10 grid grid-cols-2 gap-7 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map(({ name, Icon }) => (
            <a
              key={name}
              href="#"
              className="group flex h-36 flex-col items-center justify-center gap-3 rounded-[20px] bg-brand-soft text-base font-medium text-ink transition hover:bg-brand hover:text-white"
            >
              {/* Icon circle: white by default, gold when you hover the tile */}
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-surface text-brand transition group-hover:bg-accent group-hover:text-ink">
                <Icon size={24} strokeWidth={2} />
              </span>
              {name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;