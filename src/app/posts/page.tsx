export default function Posts() {
  return (
    <div className="space-y-8">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Blog Posts</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore articles about Frontend development, programming tips, and practical tutorials.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Posts List */}
        <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="text-sm text-gray-500 mb-2">Feb 12, 2025</div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Introduction to Next.js 14
            </h2>
            <p className="text-gray-600 mb-4">
              Discover the new features of Next.js 14 and how it can improve your Frontend development.
              In this article, we'll explore the main features and improvements of the new version.
            </p>
            <div className="flex items-center justify-between">
              <a
                href="/posts/nextjs-14"
                className="text-blue-600 hover:text-blue-800"
              >
                Read more →
              </a>
              <div className="flex space-x-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded">Next.js</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded">Frontend</span>
              </div>
            </div>
          </div>
        </article>

        <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="text-sm text-gray-500 mb-2">Feb 10, 2025</div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              TypeScript: Tips and Tricks
            </h2>
            <p className="text-gray-600 mb-4">
              Learn advanced TypeScript techniques to improve your code.
              We'll cover generic types, utility types, and advanced patterns.
            </p>
            <div className="flex items-center justify-between">
              <a
                href="/posts/typescript-tips"
                className="text-blue-600 hover:text-blue-800"
              >
                Read more →
              </a>
              <div className="flex space-x-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded">TypeScript</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-sm rounded">Tips</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
