import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/One-life-wellness-logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAnatomyDropdownOpen, setIsAnatomyDropdownOpen] = useState(false);
  const lastScrollY = useRef(0);
  const menuRef = useRef(null);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Toggle anatomy dropdown
  const toggleAnatomyDropdown = () => {
    setIsAnatomyDropdownOpen((prev) => !prev);
  };

  // Close the menu when a link is clicked
  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false);
    setIsAnatomyDropdownOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setIsAnatomyDropdownOpen(false);
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
    { path: "/blog-page", label: "Blog" },
    { path: "/lets-talk", label: "Let's Talk" },
  ];

  // Human Anatomy submenu items
  const anatomySubmenuItems = [
    { path: "/organ-expand/brain", label: "Brain" },
    { path: "/organ-expand/heart", label: "Heart" },
    { path: "/organ-expand/stomach", label: "Digestive System" },
    { path: "/organ-expand/muscle-arm", label: "Musculoskeletal System" },
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
        staggerChildren: 0.08,
        delayChildren: 0.05,
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
      } !w-full`}
    >
      <div className="header-logo-container flex justify-between items-center !w-full">
        <NavLink to="/" className="nav-header-logo">
          <img src={logo} alt="One Life Wellness" className="header-logo" />
        </NavLink>

        {/* Desktop Menu - Visible on larger screens */}
        <div className="hidden lg:flex items-center !space-x-3">
          {menuItems.slice(0, 4).map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "header-menu-link active !text-gray-700 !font-medium !px-4 !py-2 !rounded-full !bg-white !bg-opacity-90 !backdrop-blur-sm transition-all duration-200 !shadow-sm"
                  : "header-menu-link !text-gray-600 hover:!text-white !hover:!bg-white !font-medium !px-4 !py-2 !rounded-full !backdrop-blur-sm transition-all duration-200"
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* Human Anatomy with Dropdown */}
          <div className="relative">
            <div className="flex items-center">
              <NavLink
                to="/human-anatomy"
                className={`header-menu-link font-medium !px-4 !py-2 !rounded-full !backdrop-blur-sm transition-all duration-200 ${
                  isAnatomyDropdownOpen
                    ? "!text-gray-700 !bg-white !bg-opacity-90 !shadow-sm"
                    : "!text-gray-600 hover:!text-white !hover:!bg-white"
                }`}
                onClick={handleMenuItemClick}
              >
                <span className="!font-bold">Human Anatomy</span>
              </NavLink>
              <button
                onClick={toggleAnatomyDropdown}
                className="!ml-1 !p-1 !rounded-full !hover:!bg-white transition-all duration-200"
              >
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    isAnatomyDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            <AnimatePresence>
              {isAnatomyDropdownOpen && (
                <motion.div
                  className="absolute !top-full !left-0 !w-64 !bg-white !bg-opacity-95 !backdrop-blur-sm shadow-xl !rounded-2xl !mt-2 !z-50 overflow-hidden border border-white border-opacity-20"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={dropdownVariants}
                >
                  <motion.ul className="!py-2">
                    {anatomySubmenuItems.map((item) => (
                      <motion.li
                        key={item.path}
                        variants={itemVariants}
                        className="!px-4 !py-2 !hover:!bg-white transition-all duration-150 !rounded-xl !mx-2"
                      >
                        <NavLink
                          to={item.path}
                          className={({ isActive }) =>
                            isActive
                              ? "header-menu-link active !text-[#BDF779] !font-medium"
                              : "header-menu-link !text-gray-700 hover:!text-white transition-colors duration-150"
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

          {menuItems.slice(4).map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "header-menu-link active !text-gray-700 !font-medium !px-4 !py-2 !rounded-full !bg-white !bg-opacity-90 !backdrop-blur-sm transition-all duration-200 !shadow-sm"
                  : "header-menu-link !text-gray-600 hover:!text-white !hover:!bg-white !font-medium !px-4 !py-2 !rounded-full !backdrop-blur-sm transition-all duration-200"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div
          className="!lg:hidden header-hamburger-container cursor-pointer hidden -center !bg-[#022759] hover:!bg-[#033a73] !p-3 !rounded-full transition-all duration-200 !shadow-sm"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <div className="!text-white">
              <X size={24} />
            </div>
          ) : (
            <div className="!text-white">
              <Menu size={24} />
            </div>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className="relative !w-full lg:hidden">
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={menuRef}
              className="absolute !top-full !right-0 !w-64 !bg-white !bg-opacity-95 !backdrop-blur-sm shadow-xl !rounded-2xl !mt-2 !z-50 overflow-hidden border border-white border-opacity-20"
              initial="closed"
              animate="open"
              exit="closed"
              variants={dropdownVariants}
            >
              <motion.ul className="!py-2">
                {menuItems.map((item) => (
                  <motion.li
                    key={item.path}
                    variants={itemVariants}
                    className="!px-4 !py-2 !hover:!bg-white transition-all duration-150 !rounded-xl !mx-2"
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive
                          ? "header-menu-link active !text-blue-600 !font-medium"
                          : "header-menu-link !text-gray-700 hover:!text-white transition-colors duration-150"
                      }
                      onClick={handleMenuItemClick}
                    >
                      {item.label}
                    </NavLink>
                  </motion.li>
                ))}

                {/* Mobile Human Anatomy Section */}
                <motion.li
                  variants={itemVariants}
                  className="!px-4 !py-3 border-t border-gray-100"
                >
                  <NavLink
                    to="/human-anatomy"
                    className="!bg-[#022759] hover:!bg-[#033a73] !text-white !font-medium !mb-3 block !px-4 !py-2 !rounded-lg transition-all duration-150 !text-center"
                    onClick={handleMenuItemClick}
                  >
                    Human Anatomy
                  </NavLink>
                  <div className="!pl-3 !space-y-2">
                    {anatomySubmenuItems.map((item) => (
                      <div key={item.path} className="block">
                        <NavLink
                          to={item.path}
                          className={({ isActive }) =>
                            isActive
                              ? "header-menu-link active !text-blue-600 !text-sm !font-medium block !py-1"
                              : "header-menu-link !text-gray-600 hover:!text-white !text-sm block !py-1 transition-colors duration-150"
                          }
                          onClick={handleMenuItemClick}
                        >
                          {item.label}
                        </NavLink>
                      </div>
                    ))}
                  </div>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
