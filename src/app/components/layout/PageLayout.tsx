"use client";

import { motion } from "framer-motion";
import Header from "./Header";
import SocialLinks from "../ui/SocialLinks";
import HamburgerMenu from "../ui/HamburgerMenu";
import Link from "next/link";

interface PageLayoutProps {
    children: React.ReactNode;
    title: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title }) => {
    const pageVariants = {
        initial: { opacity: 0, y: 20 },
        enter: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.5 }}
            className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden"
        >
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />
            <Header />
            <HamburgerMenu />
            <main className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-5xl md:text-7xl font-black mb-8 mt-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
                >
                    {title}
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="w-full max-w-4xl"
                >
                    {children}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="mt-12"
                >
                    <Link
                        href="/"
                        className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                    >
                        BACK HOME
                    </Link>
                </motion.div>
            </main>
            <SocialLinks />
        </motion.div>
    );
};

export default PageLayout;

