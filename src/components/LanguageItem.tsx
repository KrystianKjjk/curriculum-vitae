import React from "react";
import { motion } from "framer-motion";

interface LanguageItemProps {
    language: string;
    proficiency: string;
    index: number;
}

const LanguageItem: React.FC<LanguageItemProps> = ({ language, proficiency, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ delay: 0.1 * index, duration: 0.4 }}
            className="flex justify-between py-2 border-b last:border-0 border-gray-200"
        >
            <span className="font-medium text-gray-800">{language}</span>
            <span className="text-red-600">{proficiency}</span>
        </motion.div>
    );
};

export default LanguageItem;
