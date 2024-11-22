import { motion } from "framer-motion";
import Image from "next/image";

interface ProductCardProps {
    name: string;
    description: string;
    image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, image }) => {
    return (
        <motion.div
            whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0,0,0,0.3)" }}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 flex flex-col h-full"
        >
            <div className="relative h-48 sm:h-64">
                <Image
                    src={image}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 transform hover:scale-105"
                />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{name}</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">{description}</p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                    Learn More
                </motion.button>
            </div>
        </motion.div>
    );
};

export default ProductCard;

