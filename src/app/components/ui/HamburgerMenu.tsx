"use client";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const HamburgerMenu = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative z-50 text-white text-2xl rounded-md bg-black bg-opacity-20">
      {isMobile && (
        <div className="w-full flex justify-center p-2">
          <button
            className="text-white text-2xl h-100%"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars />
          </button>
        </div>
      )}

      <MobileMenu
        isMobile={isMobile}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <DesktopMenu isMobile={isMobile} />
    </div>
  );
};

export default HamburgerMenu;
