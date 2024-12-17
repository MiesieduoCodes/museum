"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  "/images/gallery1.jpg", // Add your hero background images
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <motion.div
        key={currentImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold font-serif mb-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Steve Azaiki Art Museum & Gallery
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl font-light"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            Explore timeless art, culture, and creativity.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
