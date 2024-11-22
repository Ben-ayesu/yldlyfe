"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import VideoBackground from "./components/ui/VideoBackground";
import Header from "./components/layout/Header";
import ShopButton from "./components/ui/ShopButton";
import SocialLinks from "./components/ui/SocialLinks";
import HamburgerMenu from "./components/ui/HamburgerMenu";
import ParallaxText from "./components/ui/ParallaxText";

export default function Home() {
    const [isMounted, setIsMounted] = useState(false);
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
            className="relative min-h-[200vh] overflow-hidden"
        >
            <VideoBackground/>

            <motion.div
                style={{ opacity, scale }}
                className="fixed inset-0 z-10 flex flex-col items-center justify-center"
            >
                <Header />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="flex-grow flex flex-col items-center justify-center px-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
                            Experience the extraordinary
                        </p>
                    </motion.div>

                    <ShopButton />
                </motion.div>
            </motion.div>

            <SocialLinks />
            <HamburgerMenu />

            <motion.div
                className="absolute top-[100vh] left-0 w-full"
            >
                <ParallaxText baseVelocity={-5}>YLDLYFE SZN 1</ParallaxText>
                <ParallaxText baseVelocity={5}>COMING SOON</ParallaxText>
            </motion.div>
        </motion.div>
    );
}



