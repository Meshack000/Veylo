// Hero.jsx
// The big section under the navbar: headline, search bar and the green visual.

import { useState } from "react";
import ProviderCard from "./ProviderCard";

function Hero() {
  // These two values remember what the user types in the search bar
  const [service, setService] = useState("");
  const [area, setArea] = useState("");

  // Popular service chips under the search bar
  const popular = ["Plumbing", "Tailoring", "Catering", "Tutoring"];

  // Runs when the user clicks Search (for now it only logs the values)
  function handleSearch(event) {
    event.preventDefault();
    console.log("Searching for:", service, "in", area);
  }

  return (
    <section className="bg-page">
      <div className="mx-auto flex w-full max-w-[1440px] items-center gap-16 px-6 py-12 lg:px-20 lg:py-16">
        {/* Left side: text and search */}
        <div className="flex flex-1 flex-col gap-5">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-brand">
            Trusted local services · Sunyani
          </p>

          <h1 className="font-heading text-4xl font-bold leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-[56px]">
            Find trusted local services in Sunyani.
          </h1>

          <p className="text-lg leading-normal text-body lg:text-xl">
            Book plumbers, tailors, caterers, tutors and more, all in one place.
          </p>

          {/* Search bar */}
          <form
            onSubmit={handleSearch}
            className="flex h-16 items-center gap-4 rounded-xl border-2 border-ink bg-surface pl-6 pr-2"
          >
            <input
              type="text"
              value={service}
              onChange={(e) => setService(e.target.value)}
              placeholder="What service do you need?"
              className="min-w-0 flex-1 bg-transparent text-base text-ink outline-none placeholder:text-muted"
            />

            {/* Thin line between the two fields */}
            <span className="hidden h-8 w-px bg-line sm:block" />

            <input
              type="text"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="Area in Sunyani"
              className="hidden w-44 shrink-0 bg-transparent text-base text-ink outline-none placeholder:text-muted sm:block"
            />

            <button
              type="submit"
              className="h-12 shrink-0 rounded-xl bg-brand px-6 text-base font-semibold text-white transition hover:bg-brand-dark"
            >
              Search
            </button>
          </form>

          {/* Popular chips */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-muted">Popular:</span>
            {popular.map((item) => (
              <span
                key={item}
                className="rounded-full bg-subtle px-4 py-1 text-sm text-body"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right side: green visual (hidden on small screens) */}
        <div className="relative hidden h-[460px] w-[400px] shrink-0 overflow-hidden rounded-[20px] bg-brand lg:block">
          {/* Decorative circles */}
          <div className="absolute -top-[120px] left-[190px] h-[380px] w-[380px] rounded-full bg-brand-dark" />
          <div className="absolute -left-[50px] top-[410px] h-[150px] w-[150px] rounded-full bg-accent" />

          {/* Badges */}
          <span className="absolute left-6 top-10 rounded-full bg-accent-soft px-4 py-1 text-sm text-ink">
            Verified providers
          </span>
          <span className="absolute left-6 top-[88px] rounded-full bg-brand-soft px-4 py-1 text-sm text-brand">
            Student and teacher gigs
          </span>

          {/* Sample provider card */}
          <ProviderCard
            className="absolute left-[17px] top-[150px] w-[360px]"
            name="Adom Plumbing Works"
            service="Plumbing · Sunyani"
            rating="4.8"
            reviews="24"
            tag="Available today"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;