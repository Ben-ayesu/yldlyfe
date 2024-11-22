"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";

export default function Signup() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Submitted email:", email);
    };

    return (
        <PageLayout title="SIGN UP">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md mx-auto"
            >
                <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-lg p-8 shadow-lg">
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            EMAIL
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 bg-white/10 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        SIGN UP
                    </motion.button>
                </form>
            </motion.div>
        </PageLayout>
    );
}

