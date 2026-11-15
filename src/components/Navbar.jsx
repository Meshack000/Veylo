// Navbar.jsx
// The bar at the top of the page: logo, links and the two buttons.

function Navbar() {
  return (
    <header className="h-16 border-b border-line bg-surface">
      <nav className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between px-6 lg:px-20">
        {/* Logo: green square with a V, then the brand name */}
        <a href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand font-heading text-lg font-bold text-white">
            V
          </span>
          <span className="font-heading text-xl font-semibold text-ink">Veylo</span>
        </a>

        {/* Links (hidden on small screens) */}
        <ul className="hidden items-center gap-12 text-base font-medium text-ink md:flex">
          <li><a href="#services">Find services</a></li>
          <li><a href="#how-it-works">How it works</a></li>
          <li><a href="#providers">For providers</a></li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <a
            href="/login"
            className="hidden h-11 items-center justify-center rounded-xl border-2 border-brand px-6 text-base font-semibold text-brand transition hover:bg-brand-soft sm:flex"
          >
            Log in
          </a>
          <a
            href="/signup"
            className="flex h-11 items-center justify-center rounded-xl bg-brand px-6 text-base font-semibold text-white transition hover:bg-brand-dark"
          >
            Sign up
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;