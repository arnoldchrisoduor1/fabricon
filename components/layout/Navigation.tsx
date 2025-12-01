"use client";
import { House, Menu, X, Home, Info, Settings, Phone } from "lucide-react";
import React, { useState, useMemo } from "react";

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

  return (
    <div className="relative">
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center items-center gap-8 p-4">
        {majorSections.map((section) => (
          <a
            key={section.id}
            href={section.href}
            onClick={() => handleLinkClick(section.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              activeLink === section.id
                ? "text-primary-green font-semibold bg-secondary-green/10"
                : "text-gray-700 hover:text-secondary-green"
            }`}
          >
            {section.icon}
            {section.label}
          </a>
        ))}
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center p-4 bg-white border-b">
        <span className="font-bold text-lg">FabriCon</span>
        <div className="flex gap-3 items-center">
          <button className="bg-primary-green text-white px-4 py-1.5 rounded-full text-sm font-medium">
            Sign Up
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-b z-50 animate-slideDown">
          <div className="flex flex-col p-2">
            {majorSections.map((section) => (
              <a
                key={section.id}
                href={section.href}
                onClick={() => handleLinkClick(section.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeLink === section.id
                    ? "text-primary-green font-semibold bg-secondary-green/40"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <div className={`${activeLink === section.id ? "text-primary-green" : "text-gray-500"}`}>
                  {section.icon}
                </div>
                <span className="text-base">{section.label}</span>
              </a>
            ))}
            <div className="mt-4 px-4 py-3">
              <button className="w-full bg-primary-green text-white py-2.5 rounded-lg font-medium">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;