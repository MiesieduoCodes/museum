import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideNavbar from "../app/components/sidenav";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Art Gallery and Museum",
  description: "Explore the beauty of art and history",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}
      >
        <SideNavbar />
        <main className="ml-64 w-full">{children}</main>
      </body>
    </html>
  );
}
