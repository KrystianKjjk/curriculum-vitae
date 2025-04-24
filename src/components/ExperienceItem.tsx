import React from "react";
import { motion } from "framer-motion";

interface ExperienceItemProps {
    title: string;
    company: string;
    period: string;
    description: string;
    index: number;
    isLast?: boolean;
    current?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
    title,
    company,
    period,
    description,
    index,
    isLast = false,
    current = false,
}) => {
    return (
        <div className="relative flex">
            {/* Timeline line */}
            {!isLast && <div className="absolute left-4 top-6 w-0.5 h-full bg-blue-200" />}

            {/* Timeline dot */}
            <div
                className={`absolute left-2.5 top-6 w-3 h-3 rounded-full border-2 border-blue-600 ${
                    current ? "bg-red border-blue-600 border-2" : "bg-blue-600"
                }`}
            />

            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="ml-12 mb-8 bg-white p-5 rounded-md shadow-md w-full"
            >
                <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h3 className="text-xl font-bold text-blue-700">{title}</h3>
                    <span className="text-gray-600 text-sm md:text-base">{period}</span>
                </div>
                <p className="text-gray-800 font-semibold mb-2">{company}</p>
                <p className="text-gray-600">{description}</p>
            </motion.div>
        </div>
    );
};

export default ExperienceItem;
