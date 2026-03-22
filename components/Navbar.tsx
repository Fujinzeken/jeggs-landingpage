import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-0 z-50 w-full bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-orange text-white">
            <span className="text-xl font-bold">S</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            SOJEGGS <span className="text-brand-orange">MUSIC</span>
          </span>
        </div>

        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-white/90 hover:text-brand-orange transition-colors"
            >
              Home
            </Link>
            <Link
              href="#courses"
              className="text-sm font-medium text-white/90 hover:text-brand-orange transition-colors"
            >
              Courses
            </Link>
            <div className="group relative">
              <button className="flex items-center gap-1 text-sm font-medium text-white/90 hover:text-brand-orange transition-colors">
                Pages
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            <Link
              href="#mentors"
              className="text-sm font-medium text-white/90 hover:text-brand-orange transition-colors"
            >
              Mentors
            </Link>
            <Link
              href="#blog"
              className="text-sm font-medium text-white/90 hover:text-brand-orange transition-colors"
            >
              Blog
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-white/90 hover:text-brand-orange transition-colors cursor-pointer">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <Link
            href="#join"
            className="rounded-full bg-brand-orange px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-orange/90 shadow-lg shadow-brand-orange/20 cursor-pointer"
          >
            Join Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
