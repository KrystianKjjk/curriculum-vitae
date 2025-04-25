import React from "react";
import { motion } from "framer-motion";

interface EducationItemProps {
    degree: string;
    institution: string;
    period: string;
    details?: string;
    index: number;
    isLast?: boolean;
}

const EducationItem: React.FC<EducationItemProps> = ({
    degree,
    institution,
    period,
    details,
    index,
    isLast = false,
}) => {
    return (
        <div className="relative flex">
            {/* Timeline line */}
            {!isLast && <div className="absolute left-4 top-6 w-0.5 h-full bg-red-200" />}

            {/* Timeline dot */}
            <div className="absolute left-2.5 top-6 w-3 h-3 rounded-full bg-red-600 border-2 border-white" />

            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="ml-12 mb-8 bg-white p-5 rounded-md shadow-md w-full"
            >
                <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h3 className="text-xl font-bold text-red-700">{degree}</h3>
                    <span className="text-gray-600 text-sm md:text-base">{period}</span>
                </div>
                <p className="text-gray-800 font-semibold mb-1">{institution}</p>
                {details && <p className="text-gray-600">{details}</p>}
            </motion.div>
        </div>
    );
};

export default EducationItem;
