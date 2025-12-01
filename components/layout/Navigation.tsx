"use client";
import { House, Menu, X, Home, Info, Settings, Phone, MoveUpRight } from "lucide-react";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./ui/Button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const majorSections = [
    {
      id: "home",
      label: "Home",
      href: "/home",
      icon: <Home size={18} />
    },
    {
      id: "about",
      label: "About",
      href: "/about",
      icon: <Info size={18} />
    },
    {
      id: "services",
      label: "Services",
      href: "/services",
      icon: <Settings size={18} />
    },
    {
      id: "contact",
      label: "Contact",
      href: "/contact",
      icon: <Phone size={18} />
    },
  ];

  const handleLinkClick = (sectionId: string) => {
    setActiveLink(sectionId);
    setIsMenuOpen(false);
  };

  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeInOut" as const
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: -20
    },
    open: {
      opacity: 1,
      x: 0
    }
  };

  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 90 }
  };

  const desktopLinkVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  const mobileLinkVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.02 },
    tap: { scale: 0.98 }
  };

  const signUpButtonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
    },
    tap: { scale: 0.95 }
  };

  return (
    <div className="relative max-w-[1200px] mx-auto">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between">
        <motion.span 
          className="font-bold text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          FabriCon
        </motion.span>
      <div className="hidden md:flex justify-center items-center gap-8 p-4">
        {majorSections.map((section) => (
          <motion.a
            key={section.id}
            href={section.href}
            onClick={() => handleLinkClick(section.id)}
            variants={desktopLinkVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              activeLink === section.id
                ? "text-primary-green font-semibold bg-secondary-green/10"
                : "text-gray-700 hover:text-primary-green"
            }`}
          >
            <motion.div
              animate={{
                rotate: activeLink === section.id ? [0, 10, -10, 0] : 0
              }}
              transition={{ duration: 0.5 }}
            >
              {section.icon}
            </motion.div>
            {section.label}
          </motion.a>
        ))}
      </div>
      <div>
        <Button variant="primary" size="sm">
            Sign In
          </Button>
      </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center p-4 bg-white border-b">
        <motion.span 
          className="font-bold text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          FabriCon
        </motion.span>
        <div className="flex gap-3 items-center">
          <Button variant="primary" size="sm">
            Sign In
          </Button>
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
            variants={iconVariants}
            animate={isMenuOpen ? "open" : "closed"}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-b z-50 overflow-hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col p-2">
              {majorSections.map((section, index) => (
                <motion.a
                  key={section.id}
                  href={section.href}
                  onClick={() => handleLinkClick(section.id)}
                  variants={itemVariants}
                  custom={index}
                  whileHover="hover"
                  whileTap="tap"
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeLink === section.id
                      ? "text-primary-green font-semibold bg-secondary-green/40"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <motion.div
                    className={`${activeLink === section.id ? "text-primary-green" : "text-gray-500"}`}
                    animate={{
                      rotate: activeLink === section.id ? [0, 360] : 0
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {section.icon}
                  </motion.div>
                  <span className="text-base">{section.label}</span>
                </motion.a>
              ))}
              <motion.div 
                className="mt-4 px-4 py-3"
                variants={itemVariants}
                custom={majorSections.length}
              >
                <motion.button
                  variants={signUpButtonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="w-full bg-primary-green text-white py-2.5 rounded-lg font-medium"
                >
                  Sign Up
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navigation;