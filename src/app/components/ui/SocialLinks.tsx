import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex space-x-4 text-white text-2xl p-2 rounded-md bg-black bg-opacity-20">
      <SocialLink href="#" label={<FaFacebookF />} />
      <SocialLink href="#" label={<FaInstagram />} />
      <SocialLink href="#" label={<FaTwitter />} />
    </div>
  );
};

const SocialLink: React.FC<{ href: string; label: React.ReactNode }> = ({
  href,
  label,
}) => {
  return (
    <Link
      href={href}
      className="hover:text-gray-300 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </Link>
  );
};

export default SocialLinks;
