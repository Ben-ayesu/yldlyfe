"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import SocialLinks from "./SocialLinks";
import MenuItem from "./MenuItem";

interface MobileMenuProps {
  isMobile: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isMobile,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  if (!isMobile) return null;

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          key="menu"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full h-screen bg-black z-40 flex flex-col justify-center items-center"
        >
          <div className="text-center justify-center items-center">
            <MenuItem href="/" onClick={() => setIsMenuOpen(false)}>
              HOME
            </MenuItem>
            <MenuItem href="/products" onClick={() => setIsMenuOpen(false)}>
              PRODUCTS
            </MenuItem>
            <MenuItem href="/about" onClick={() => setIsMenuOpen(false)}>
              ABOUT
            </MenuItem>
            <MenuItem href="/signup" onClick={() => setIsMenuOpen(false)}>
              SIGN UP
            </MenuItem>
            <SocialLinks />
          </div>

          <div className="absolute bottom-4 right-4 flex flex-col items-end">
            <button
              className="text-white text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaTimes />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
