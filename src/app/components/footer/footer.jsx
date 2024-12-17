"use client"; // Ensure this runs on the client side
import { FiHome, FiImage, FiBook, FiInfo, FiMail } from "react-icons/fi"; // Import relevant icons

export default function Footer() {
  const menuItems = [
    { title: "Home", link: "/", icon: <FiHome /> },
    { title: "Art Categories", link: "/categories", icon: <FiImage /> },
    { title: "Library", link: "/library", icon: <FiBook /> },
    { title: "About Us", link: "/about", icon: <FiInfo /> },
    { title: "Contact", link: "/contact", icon: <FiMail /> },
  ];

  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto">
        {/* Footer Links */}
        <div className="flex flex-wrap justify-between">
          {/* Left Section */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="flex items-center space-x-2 hover:text-gray-400"
              >
                {item.icon}
                <span>{item.title}</span>
              </a>
            ))}
          </div>

          {/* Right Section (Optional: For copyright or other info) */}
          <div className="flex items-center justify-center text-sm">
            <span>© 2024 Your Website. All Rights Reserved.</span>
          </div>
        </div>

        {/* Mobile View */}
        <div className="block md:hidden text-center mt-4">
          <p>Follow Us:</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-gray-400">
              <FiHome />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FiImage />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FiBook />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FiInfo />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FiMail />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
