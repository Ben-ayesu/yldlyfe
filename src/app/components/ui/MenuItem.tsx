import Link from "next/link";

interface MenuItemProps {
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, onClick, children }) => (
  <Link
    href={href}
    className="block mb-4 text-white text-2xl"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default MenuItem;
