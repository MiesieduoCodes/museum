// /pages/_app.js
import "src/app/globals.css";
import SideNavbar from "../components/SideNavbar";
import ThemeToggle from "../components/ThemeToggle"; // Import the ThemeToggle component

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="flex">
      <SideNavbar />
      <main className="ml-64 w-full">
        {/* Add the ThemeToggle component here */}
        <ThemeToggle />
        <Component {...pageProps} />
      </main>
    </div>
  );
}
