"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    const headerBg = useTransform(
        scrollY,
        [0, 100],
        ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]
    );

    useEffect(() => {
        const updateScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", updateScroll);
        return () => window.removeEventListener("scroll", updateScroll);
    }, []);

    return (
        <motion.header
            style={{ backgroundColor: headerBg }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? "py-4" : "py-6"
            }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link
                        href="/"
                        className="text-4xl font-black text-white tracking-wider hover:text-primary transition-colors duration-300"
                    >
                        YLDLYFE
                    </Link>
                </motion.div>
            </div>
        </motion.header>
    );
};

export default Header;