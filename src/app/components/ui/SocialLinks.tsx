import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaPinterest } from "react-icons/fa";

const SocialLinks = () => {
    const socialLinks = [
        { Icon: FaInstagram, href: "https://www.instagram.com/yylddash9/", label: "Instagram" },
        { Icon: FaFacebookF, href: "https://www.facebook.com/hoopboidash.harper", label: "Facebook" },
        { Icon: FaPinterest, href: "https://ca.pinterest.com/dash_famz/?invite_code=e5219dad08634dbc98eefafa13cdb96b&sender=843439973872003818", label: "Pinterest" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-8 right-8 z-50"
        >
            <div className="flex flex-col gap-6">
                {socialLinks.map(({ Icon, href, label }, i) => (
                    <motion.div
                        key={label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                    >
                        <Link
                            href={href}
                            className="group relative flex items-center"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
              <span className="absolute right-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm whitespace-nowrap">
                {label}
              </span>
                            <div className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20">
                                <Icon className="w-6 h-6 text-white" />
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default SocialLinks;