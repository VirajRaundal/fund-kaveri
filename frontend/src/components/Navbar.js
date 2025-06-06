import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/what", label: "What?" },
    { path: "/why", label: "Why?" },
    { path: "/contribute", label: "Contribute" },
  ];

  const isActive = (path) => {
    if (path === "/what") {
      return location.pathname === "/" || location.pathname === "/what";
    }
    return location.pathname === path;
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center"
    >
      <motion.div
        className={`transition-all duration-300 rounded-2xl px-6 py-3 ${
          scrolled
            ? "glass-effect shadow-elegant"
            : "glass-effect shadow-soft"
        }`}
        whileHover={{ scale: 1.02 }}
      >
        {/* Desktop Navigation */}
        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative group"
            >
              <motion.span
                whileHover={{ y: -1 }}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.label}
              </motion.span>
              {isActive(item.path) && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-900 rounded-full"
                  initial={false}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation
        <div className="md:hidden flex items-center space-x-4">
          {!isOpen ? (
            navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative group"
              >
                <motion.span
                  whileHover={{ y: -1 }}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </motion.span>
                {isActive(item.path) && (
                  <motion.div
                    layoutId="navbar-indicator-mobile"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-900 rounded-full"
                    initial={false}
                  />
                )}
              </Link>
            ))
          ) : (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <HiX size={20} />
            </motion.button>
          )}
          
          {!isOpen && (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none md:hidden"
            >
              <HiMenu size={20} />
            </motion.button>
          )}
        </div> */}
      </motion.div>

    </motion.nav>
  );
};

export default Navbar;