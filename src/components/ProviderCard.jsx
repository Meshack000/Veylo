// ProviderCard.jsx
// One provider card. We reuse it in the Hero and in the Featured section.
// "props" are the values we pass in, like name and service.

function ProviderCard({ name, service, rating, reviews, tag, className = "" }) {
  return (
    <div
      className={`overflow-hidden rounded-[20px] border border-line bg-surface ${className}`}
    >
      {/* Cover photo placeholder (we will swap in a real image later) */}
      <div className="h-[180px] bg-brand-soft" />

      <div className="flex flex-col gap-4 p-6">
        {/* Avatar, name and service */}
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 shrink-0 rounded-full bg-accent-soft" />
          <div>
            <h3 className="font-heading text-2xl font-semibold text-ink">{name}</h3>
            <p className="text-lg text-muted">{service}</p>
          </div>
        </div>

        {/* Rating and tag */}
        <div className="flex items-center justify-between gap-2 text-lg text-body">
          <span>
            {rating} rating · {reviews} reviews
          </span>
          <span className="rounded-full bg-brand-soft px-4 py-1 text-base text-brand">
            {tag}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProviderCard;