"use client"; // Ensure this runs on the client side
import { useState } from "react";
import { FiMenu, FiChevronDown, FiSearch } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false); // Sidenav visibility
  const [dropdownOpen, setDropdownOpen] = useState({}); // Dropdown toggles
  const [searchTerm, setSearchTerm] = useState(""); // Search term state

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const menuItems = [
    { title: "Home", link: "/" },
    {
      title: "Art Categories",
      submenu: [
        { title: "Paintings", link: "/categories/paintings" },
        { title: "Sculptures", link: "/categories/sculptures" },
        { title: "Photography", link: "/categories/photography" },
      ],
    },
    {
      title: "Library",
      submenu: [
        { title: "Books", link: "/library/books" },
        { title: "Magazines", link: "/library/magazines" },
      ],
    },
    { title: "About Us", link: "/about" },
    { title: "Contact", link: "/contact" },
  ];

  const filteredItems = menuItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex">
      {/* Toggle Button for Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 text-2xl md:hidden"
      >
        <FiMenu />
      </button>

      {/* Side Navigation */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 p-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform md:translate-x-0 md:relative`}
      >
        {/* Search Bar */}
        <div className="mb-4">
          <div className="flex items-center border-b border-gray-500">
            <FiSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent w-full p-2 outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Navigation Menu */}
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index} className="mb-2">
              {/* Main Menu Item */}
              <div
                className="flex items-center justify-between cursor-pointer hover:bg-gray-700 p-2 rounded"
                onClick={() => item.submenu && toggleDropdown(item.title)}
              >
                <a href={item.link} className="flex-1">
                  {item.title}
                </a>
                {item.submenu && (
                  <FiChevronDown
                    className={`transition-transform ${
                      dropdownOpen[item.title] ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {/* Submenu with Animation */}
              <AnimatePresence>
                {item.submenu && dropdownOpen[item.title] && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="ml-4 overflow-hidden"
                  >
                    {item.submenu.map((sub, subIndex) => (
                      <li
                        key={subIndex}
                        className="hover:bg-gray-700 p-2 rounded"
                      >
                        <a href={sub.link}>{sub.title}</a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <h1 className="text-3xl font-bold">Welcome to the Art Museum</h1>
        <p>Explore the art gallery using the sidebar!</p>
      </div>
    </div>
  );
}
