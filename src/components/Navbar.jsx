// Navbar.jsx
// The bar at the top of the page: logo, links and the two buttons.

function Navbar() {
  return (
    <header className="h-20 border-b border-line bg-white">
      <nav className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between px-6 lg:px-20">
        {/* Logo: grey square placeholder + brand name */}
        <a href="/" className="flex items-center gap-3">
          <span className="h-10 w-10 rounded-lg bg-line" />
          <span className="text-2xl font-semibold text-ink">Veylo</span>
        </a>

        {/* Links (hidden on small screens) */}
        <ul className="hidden items-center gap-12 text-lg font-medium text-ink md:flex">
          <li><a href="#services">Find services</a></li>
          <li><a href="#how-it-works">How it works</a></li>
          <li><a href="#providers">For providers</a></li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <a
            href="/login"
            className="hidden h-11 w-[100px] items-center justify-center rounded-lg border-2 border-ink text-lg font-medium text-ink sm:flex"
          >
            Log in
          </a>
          <a
            href="/signup"
            className="flex h-11 w-[120px] items-center justify-center rounded-lg bg-ink text-lg font-medium text-white"
          >
            Sign up
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;