import HeroSection from "./components/herosection";
import SideNav from "./components/sidenav";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <SideNav/>
      {/* Hero Section */}
      <HeroSection />

      {/* Content Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-serif font-bold mb-4 text-gray-800">
          Welcome to the Heart of Art
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover a curated collection of masterpieces that span centuries of
          creativity and expression. From classical works to contemporary art,
          immerse yourself in a journey through human imagination.
        </p>
      </section>

      {/* Social Icons */}
      <footer className="flex justify-center space-x-6 py-8 bg-gray-900 text-white">
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
