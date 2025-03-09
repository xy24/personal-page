import Image from "next/image";

export default function Home() {
  return (
    <main className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">Your Name</h1>
        <nav>
          <button className="text-2xl">☰</button>
        </nav>
      </header>

      <section className="text-lg leading-relaxed">
        <p>
          Brief introduction about yourself and your current role. For example: I am a Software Engineer
          specializing in web development and artificial intelligence.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Short posts</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              First Blog Post Title
            </a>
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Essays</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Essay Title
            </a>
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Research</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Google Scholar
            </a>
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Interviews</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Interview Title (2024)
            </a>
          </li>
        </ul>
      </section>

      <footer className="pt-8 text-sm text-gray-600">
        <p>Subscribe for email alerts about new posts.</p>
      </footer>
    </main>
  );
}
