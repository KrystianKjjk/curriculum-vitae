import React from "react";
import { motion } from "framer-motion";

interface InterestItemProps {
    name: string;
    index: number;
}

const InterestItem: React.FC<InterestItemProps> = ({ name, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ delay: 0.05 * index, duration: 0.4 }}
            className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full inline-block mr-2 mb-2 transition-transform hover:scale-105"
        >
            {name}
        </motion.div>
    );
};

export default InterestItem;
