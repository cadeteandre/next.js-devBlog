export default function About() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">About Dev Blog</h1>
        <p className="text-xl text-gray-600">
          A space dedicated to sharing knowledge and experiences in Frontend development
        </p>
      </header>

      <section className="prose lg:prose-lg mx-auto">
        <p>
          Welcome to Dev Blog, your go-to resource for modern web development. This blog is dedicated to
          sharing in-depth knowledge about React, TypeScript, Next.js, and other cutting-edge Frontend
          technologies.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to provide high-quality, practical content that helps developers build better
          web applications. We focus on:
        </p>
        <ul>
          <li>In-depth technical tutorials</li>
          <li>Best practices and design patterns</li>
          <li>Performance optimization techniques</li>
          <li>Modern development workflows</li>
        </ul>

        <h2>Topics We Cover</h2>
        <div className="flex flex-wrap gap-2 not-prose">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">React</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Next.js</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">TypeScript</span>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">Frontend Development</span>
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">Web Performance</span>
          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">UI/UX</span>
        </div>

        <h2>Get in Touch</h2>
        <p>
          Have questions or suggestions? We'd love to hear from you! Feel free to reach out through any
          of our social media channels or drop us an email.
        </p>
      </section>

      <section className="flex justify-center space-x-6 py-8">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-500 transition-colors"
        >
          Twitter
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          GitHub
        </a>
        <a
          href="mailto:contact@devblog.com"
          className="text-gray-600 hover:text-blue-500 transition-colors"
        >
          Email
        </a>
      </section>
    </div>
  );
}
