import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground dark:bg-dark-background dark:text-dark-foreground">
      {/* Content Section */}
      <section className="py-16 px-6 text-center ml-64">
        <h2 className="text-4xl font-serif font-bold mb-4">
          Welcome to the Heart of Art
        </h2>
        <p className="text-lg max-w-3xl mx-auto">
          Discover a curated collection of masterpieces that span centuries of
          creativity and expression. From classical works to contemporary art,
          immerse yourself in a journey through human imagination.
        </p>
      </section>

      {/* Social Icons */}
      <footer className="flex justify-center space-x-6 py-8 bg-gray-900 text-white dark:bg-gray-800">
        <a href="#" className="hover:text-gray-400">
          <FaInstagram size={28} />
        </a>
        <a href="#" className="hover:text-gray-400">
          <FaFacebook size={28} />
        </a>
        <a href="#" className="hover:text-gray-400">
          <FaTwitter size={28} />
        </a>
      </footer>
    </main>
  );
}
