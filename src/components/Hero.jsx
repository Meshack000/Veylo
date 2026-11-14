// Hero.jsx
// The big section under the navbar: headline, search bar and image.

import { useState } from "react";

function Hero() {
  // These two values remember what the user types in the search bar
  const [service, setService] = useState("");
  const [area, setArea] = useState("");

  // Runs when the user clicks Search (for now it only logs the values)
  function handleSearch(event) {
    event.preventDefault();
    console.log("Searching for:", service, "in", area);
  }

  return (
    <section className="bg-surface">
      <div className="mx-auto flex min-h-[640px] w-full max-w-[1440px] items-center justify-between gap-12 px-6 py-16 lg:px-20">
        {/* Left side: text and search */}
        <div className="w-full max-w-[860px]">
          <h1 className="max-w-[700px] text-5xl font-bold leading-[1.2] text-ink lg:text-[64px]">
            Find trusted local services in Sunyani.
          </h1>

          <p className="mt-6 max-w-[600px] text-2xl leading-normal text-body">
            Book plumbers, tailors, caterers, tutors and more, all in one place.
          </p>

          {/* Search bar */}
          <form
            onSubmit={handleSearch}
            className="mt-10 flex h-[72px] w-full items-center rounded-xl border-2 border-ink bg-white pl-8 pr-2"
          >
            <input
              type="text"
              value={service}
              onChange={(e) => setService(e.target.value)}
              placeholder="What service do you need?"
              className="min-w-0 flex-1 bg-transparent text-xl text-ink outline-none placeholder:text-muted"
            />

            {/* Thin line between the two fields */}
            <span className="mx-6 hidden h-10 w-px bg-line sm:block" />

            <input
              type="text"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="Area in Sunyani"
              className="hidden min-w-0 flex-1 bg-transparent text-xl text-ink outline-none placeholder:text-muted sm:block"
            />

            <button
              type="submit"
              className="ml-4 h-14 w-[140px] rounded-[10px] bg-ink text-xl font-medium text-white"
            >
              Search
            </button>
          </form>
        </div>

        {/* Right side: image placeholder (hidden on small screens) */}
        <div className="hidden h-[440px] w-[360px] shrink-0 items-center justify-center rounded-[20px] bg-line text-xl font-medium text-muted lg:flex">
          Image
        </div>
      </div>
    </section>
  );
}

export default Hero;