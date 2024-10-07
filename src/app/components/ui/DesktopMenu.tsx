"use client";
import MenuItem from "./MenuItem";

const DesktopMenu = () => {
  return (
    <div className="flex flex-col text-white text-3xl p-2 z-10 hidden-on-mobile">
      <MenuItem href="/">HOME</MenuItem>
      <MenuItem href="/products">PRODUCTS</MenuItem>
      <MenuItem href="/about">ABOUT</MenuItem>
      <MenuItem href="/signup">SIGN UP</MenuItem>
    </div>
  );
};

export default DesktopMenu;
