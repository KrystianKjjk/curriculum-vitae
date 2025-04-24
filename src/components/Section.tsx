import React from "react";
import { motion } from "framer-motion";

interface SectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, className = "" }) => {
    return (
        <section className={`mb-8 ${className}`}>
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0%" }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold mb-4 pb-2 border-b-2 border-red-600 inline-block"
            >
                {title}
            </motion.h2>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0%" }}
                transition={{ delay: 0.1, duration: 0.6 }}
            >
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
