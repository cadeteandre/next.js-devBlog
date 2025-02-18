import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Blog",
  description: "A blog about Frontend development with React, TypeScript and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-white shadow-lg">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">
                      Dev Blog
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <Link
                      href="/"
                      className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Home
                    </Link>
                    <Link
                      href="/posts"
                      className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Posts
                    </Link>
                    <Link
                      href="/about"
                      className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      About
                    </Link>
                  </div>
                </div>
                {/* Mobile menu button */}
                <div className="sm:hidden flex items-center">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>
                    {/* Icon when menu is closed */}
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </nav>
            {/* Mobile menu, show/hide based on menu state */}
            <div className="sm:hidden hidden" id="mobile-menu">
              <div className="pt-2 pb-3 space-y-1">
                <Link
                  href="/"
                  className="text-gray-500 hover:bg-gray-50 hover:text-gray-700 block px-3 py-2 text-base font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/posts"
                  className="text-gray-500 hover:bg-gray-50 hover:text-gray-700 block px-3 py-2 text-base font-medium"
                >
                  Posts
                </Link>
                <Link
                  href="/about"
                  className="text-gray-500 hover:bg-gray-50 hover:text-gray-700 block px-3 py-2 text-base font-medium"
                >
                  About
                </Link>
              </div>
            </div>
          </header>

          <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>

          <footer className="bg-white border-t">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">About</h3>
                  <p className="mt-4 text-base text-gray-500">
                    A blog about Frontend development, sharing knowledge and experiences.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Navigation</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link href="/" className="text-base text-gray-500 hover:text-gray-900">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/posts" className="text-base text-gray-500 hover:text-gray-900">
                        Posts
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="text-base text-gray-500 hover:text-gray-900">
                        About
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Stay Updated</h3>
                  <p className="mt-4 text-base text-gray-500">
                    Coming soon: Subscribe to our newsletter for the latest updates.
                  </p>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-8 text-center">
                <p className="text-base text-gray-400">
                  &copy; {new Date().getFullYear()} Dev Blog. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
