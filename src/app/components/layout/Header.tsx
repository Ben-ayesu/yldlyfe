import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center w-full">
      <Link href="/" className="text-4xl font-bold text-white p-4 lg:p-8">
        YLDLYFE
      </Link>
    </header>
  );
};

export default Header;
