import Link from "next/link";

interface MenuItemProps {
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, onClick, children }) => (
  <Link
    href={href}
    className="block text-white text-lg md:text-xl lg:text-2xl hover:text-gray-300 transition-colors duration-200"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default MenuItem;
