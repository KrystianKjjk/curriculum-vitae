import React from "react";
import { motion } from "framer-motion";

interface EducationItemProps {
    degree: string;
    institution: string;
    period: string;
    details?: string;
    index: number;
}

const EducationItem: React.FC<EducationItemProps> = ({ degree, institution, period, details, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            className="mb-5 bg-white p-5 rounded-md shadow-md"
        >
            <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold text-blue-700">{degree}</h3>
                <span className="text-gray-600 text-sm md:text-base">{period}</span>
            </div>
            <p className="text-gray-800 font-semibold mb-1">{institution}</p>
            {details && <p className="text-gray-600">{details}</p>}
        </motion.div>
    );
};

export default EducationItem;
