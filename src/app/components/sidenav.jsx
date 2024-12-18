"use client"; // Ensure this runs on the client side
import { useState } from "react";
import { FiMenu, FiChevronDown, FiSearch, FiHome, FiInfo, FiMail } from "react-icons/fi"; // Import relevant icons
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./themetoggle";
import { FaPaintBrush } from "react-icons/fa";
import { MdMonochromePhotos } from "react-icons/md"; 
import { GiMuscularTorso } from "react-icons/gi"; // Import the ThemeToggle component

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false); // Sidenav visibility
  const [dropdownOpen, setDropdownOpen] = useState({}); // Dropdown toggles
  const [searchTerm, setSearchTerm] = useState(""); // Search term state

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const menuItems = [
    { title: "Home", link: "/", icon: <FiHome /> },
    {
      title: "Art Categories",
      submenu: [
        { title: "Nigerian Art", link: "/categories/paintings", icon: <FaPaintBrush /> },
        { title: "Niger Delta Art", link: "/categories/sculptures", icon: <GiMuscularTorso /> },
        { title: "Digital Art", link: "/categories/photography", icon: <MdMonochromePhotos /> },
        { title: "Contemporary Art", link: "/categories/photography", icon: <MdMonochromePhotos /> },
        { title: "West African", link: "/categories/photography", icon: <MdMonochromePhotos /> },
      ],
    },
    { title: "About Us", link: "/about", icon: <FiInfo /> },
    { title: "Contact", link: "/contact", icon: <FiMail /> },
  ];

  const filteredItems = menuItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Toggle Button for Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 text-2xl md:hidden"
      >
        <FiMenu />
      </button>

      {/* Side Navigation */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 p-6 transition-transform transform 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:relative md:h-screen`}
      >
        {/* Search Bar */}
        <div className="mb-6">
          <div className="flex items-center border-b border-gray-500">
            <FiSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent w-full p-2 outline-none text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Theme Toggle Button */}
        <div className="mb-6">
          <ThemeToggle />
        </div>

        {/* Navigation Menu */}
        <ul className="h-[calc(100%-8rem)] overflow-auto">
          {filteredItems.map((item, index) => (
            <li key={index} className="mb-4">
              {/* Main Menu Item */}
              <div
                className="flex items-center justify-between cursor-pointer hover:bg-gray-700 p-3 rounded-md transition duration-200"
                onClick={() => item.submenu && toggleDropdown(item.title)}
              >
                <a href={item.link} className="flex items-center space-x-3 text-lg font-semibold">
                  {item.icon}
                  <span>{item.title}</span>
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
                      <li key={subIndex} className="hover:bg-gray-700 p-2 rounded-md transition duration-200">
                        <a href={sub.link} className="flex items-center space-x-3 text-sm">
                          {sub.icon}
                          <span>{sub.title}</span>
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}