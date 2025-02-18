import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Welcome to Dev Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Sharing knowledge about React, TypeScript, Next.js and the latest trends in Frontend development.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Featured Posts */}
        <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="text-sm text-gray-500 mb-2">Feb 12, 2025</div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Introduction to Next.js 14
            </h2>
            <p className="text-gray-600">
              Discover the new features of Next.js 14 and how it can improve your Frontend development.
            </p>
            <Link
              href="/posts/nextjs-14"
              className="inline-block mt-4 text-blue-600 hover:text-blue-800"
            >
              Read more →
            </Link>
          </div>
        </article>

        <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="text-sm text-gray-500 mb-2">Feb 10, 2025</div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              TypeScript: Tips and Tricks
            </h2>
            <p className="text-gray-600">
              Learn advanced TypeScript techniques to improve your code.
            </p>
            <Link
              href="/posts/typescript-tips"
              className="inline-block mt-4 text-blue-600 hover:text-blue-800"
            >
              Read more →
            </Link>
          </div>
        </article>

        <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="text-sm text-gray-500 mb-2">Feb 8, 2025</div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              React Server Components
            </h2>
            <p className="text-gray-600">
              Understand how Server Components can revolutionize your React applications.
            </p>
            <Link
              href="/posts/server-components"
              className="inline-block mt-4 text-blue-600 hover:text-blue-800"
            >
              Read more →
            </Link>
          </div>
        </article>
      </section>

      <section className="text-center">
        <Link
          href="/posts"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View all posts
        </Link>
      </section>
    </div>
  );
}
