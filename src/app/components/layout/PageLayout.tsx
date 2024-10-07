import Header from "./Header";
import SocialLinks from "../ui/SocialLinks";
import Link from "next/link";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => (
  <div className="relative min-h-screen">
    <div className="z-10 flex flex-col items-center min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center flex-grow w-full px-4">
        {children}
        <Link
          href="/"
          className="
            bg-white 
            text-black 
            py-2 
            px-6 
            mt-8 
            text-lg 
            font-medium 
            hover:bg-gray-200 
            transition-colors 
            rounded-lg 
            shadow-md 
            border-none 
            outline-none 
            focus:ring-2 
            focus:ring-blue-500 
          "
        >
          BACK HOME
        </Link>
      </div>
    </div>

    <div className="absolute bottom-4 right-4">
      <SocialLinks />
    </div>
  </div>
);

export default PageLayout;
