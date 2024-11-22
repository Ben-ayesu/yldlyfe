"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from 'lucide-react';
import NavMenu from "./NavMenu";

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            {isMobile ? (
                <div className="fixed top-4 right-4 z-50">
                    <motion.button
                        onClick={toggleMenu}
                        className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isOpen ? (
                            <X className="w-6 h-6 text-white" />
                        ) : (
                            <Menu className="w-6 h-6 text-white" />
                        )}
                    </motion.button>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="fixed top-16 right-4 bg-black/90 backdrop-blur-md rounded-lg p-4 border border-white/20"
                            >
                                <nav className="flex flex-col space-y-4">
                                    <NavMenu onItemClick={() => setIsOpen(false)} />
                                </nav>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ) : (
                <nav className="fixed top-4 right-4 z-50 flex space-x-6 bg-black/10 backdrop-blur-md rounded-full px-6 py-2 border border-white/20">
                    <NavMenu />
                </nav>
            )}
        </>
    );
};

export default HamburgerMenu;

