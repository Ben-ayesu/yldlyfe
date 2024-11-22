"use client";

import { motion } from "framer-motion";
import PageLayout from "../components/layout/PageLayout";

export default function About() {
    return (
        <PageLayout title="ABOUT US">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <h2 className="text-3xl font-bold mb-6">Yldlyfe SZN 1</h2>
                <p className="text-xl mb-8">
                    Experience the extraordinary with Yldlyfe. We are not just a brand; we are a lifestyle.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="bg-white/5 backdrop-blur-sm rounded-lg p-6"
                    >
                        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                        <p>To inspire and empower individuals to live their best lives, pushing boundaries and embracing the extraordinary.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="bg-white/5 backdrop-blur-sm rounded-lg p-6"
                    >
                        <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                        <p>To create a global community of individuals who dare to dream big and live life to the fullest.</p>
                    </motion.div>
                </div>
            </motion.div>
        </PageLayout>
    );
}
