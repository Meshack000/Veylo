// HowItWorks.jsx
// The dark green section that explains booking in 3 steps.

function HowItWorks() {
  // The three steps. To change the text, we only edit this list.
  const steps = [
    {
      number: "1",
      title: "Search",
      text: "Choose a service and your area in Sunyani.",
    },
    {
      number: "2",
      title: "Compare",
      text: "View profiles, photos and reviews, then pick a provider.",
    },
    {
      number: "3",
      title: "Book",
      text: "Pick a date and time, and track your booking live.",
    },
  ];

  return (
    // id="how-it-works" lets the "How it works" link in the navbar scroll here
    <section id="how-it-works" className="bg-brand-dark">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-16 lg:px-20">
        {/* Heading */}
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-accent">
            How it works
          </p>
          <h2 className="font-heading text-3xl font-bold leading-[1.2] text-white lg:text-4xl">
            Book a service in 3 steps
          </h2>
        </div>

        {/* Step cards */}
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col gap-4 rounded-[20px] bg-surface p-6"
            >
              {/* Gold number circle */}
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent font-heading text-xl font-semibold text-ink">
                {step.number}
              </span>

              <h3 className="font-heading text-2xl font-semibold leading-[1.3] text-ink">
                {step.title}
              </h3>

              <p className="text-base leading-normal text-body">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;