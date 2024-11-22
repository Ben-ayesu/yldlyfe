"use client";

import { motion } from "framer-motion";
import PageLayout from "../components/layout/PageLayout";
import ProductCard from "@/app/components/ui/ProductCard";

const products = [
    { name: "Yld Essence", description: "Capture the spirit of extraordinary living with our signature fragrance.", image: "/placeholder.svg?height=300&width=300" },
    { name: "Yld Threads", description: "Elevate your style with our premium, eco-conscious clothing line.", image: "/placeholder.svg?height=300&width=300" },
    { name: "Yld Tech", description: "Cutting-edge gadgets designed to enhance your daily life.", image: "/placeholder.svg?height=300&width=300" },
];

export default function Products() {
    return (
        <PageLayout title="OUR PRODUCTS">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, index) => (
                    <motion.div
                        key={product.name}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.2 * index, duration: 0.5}}
                    >
                        <ProductCard {...product} />
                    </motion.div>
                ))}
            </div>
        </PageLayout>
    );
}