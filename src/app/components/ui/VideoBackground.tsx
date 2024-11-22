"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const VideoBackground = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 w-full h-full z-0"
            style={{ scale }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 z-10" />
            <video
                src={"../video1.mp4"}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
            />
        </motion.div>
    );
};

export default VideoBackground;