import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/One-life-wellness-logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const menuRef = useRef(null);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Close the menu when a link is clicked
  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY.current || currentScrollY < 50);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // All routes from the router configuration
  const menuItems = [
    { path: "/welcome", label: "Welcome" },
    { path: "/who-we-are", label: "Who We Are" },
    { path: "/how-we-work", label: "How We Work" },
    { path: "/why-it-matters", label: "Why It Matters" },
    { path: "/human-anatomy", label: "Human Anatomy" },
    { path: "/blog-page", label: "Blog" },
    { path: "/lets-talk", label: "Let's Talk" },
  ];

  // Animation variants for dropdown effect
  const dropdownVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: -10,
    },
    open: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div
      className={`header-menu-container ${
        isVisible ? "visible" : "hidden"
      } !w-full `}
    >
      <div className="header-logo-container flex justify-between items-center !px-4 !w-full">
        <NavLink to="/" className="nav-header-logo">
          <img src={logo} alt="One Life Wellness" className="header-logo" />
        </NavLink>
      </div>

      {/* Dropdown Menu with Framer Motion */}
      <div className="relative w-full">
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={menuRef}
              className="absolute !top-full !right-0 !w-64 bg-white shadow-lg !rounded-lg !mt-2 !z-50 overflow-hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={dropdownVariants}
            >
              <motion.ul className="py-2">
                {menuItems.map((item) => (
                  <motion.li
                    key={item.path}
                    variants={itemVariants}
                    className="!px-4 !py-2 hover:bg-gray-100"
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive
                          ? "header-menu-link active"
                          : "header-menu-link"
                      }
                      onClick={handleMenuItemClick}
                    >
                      {item.label}
                    </NavLink>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div
        className="header-hamburger-container cursor-pointer flex items-center bg-blue-900 !p-2 rounded-xl"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
        style={{ display: "flex" }}
      >
        {isMobileMenuOpen ? (
          <div className="text-white">
            {" "}
            <X size={24} />
          </div>
        ) : (
          <div className="!right-0 text-white">
            <Menu size={24} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
