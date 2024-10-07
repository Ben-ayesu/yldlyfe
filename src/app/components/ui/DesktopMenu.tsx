"use client";

import MenuItem from "./MenuItem";

interface DesktopMenuProps {
  isMobile: boolean;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ isMobile }) => {
  if (isMobile) return null;

  return (
    <div className="absolute bottom-4 right-4 flex flex-col items-end text-white">
      <MenuItem href="/">PRODUCTS</MenuItem>
      <MenuItem href="/about">ABOUT</MenuItem>
      <MenuItem href="/shop">SIGN UP</MenuItem>
    </div>
  );
};

export default DesktopMenu;
