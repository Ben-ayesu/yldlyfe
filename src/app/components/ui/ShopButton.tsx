"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ShopButton = () => {
  return (
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group"
      >
        <Link
            href="/shop"
            className="relative inline-flex items-center gap-4 text-5xl font-black text-white hover:text-primary transition-all duration-300 tracking-wider"
        >
        <span className="relative">
          SHOP NOW
          <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-primary transform origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
          />
        </span>
          <motion.div
              className="inline-flex"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight className="w-12 h-12" />
          </motion.div>
        </Link>
      </motion.div>
  );
};

export default ShopButton;