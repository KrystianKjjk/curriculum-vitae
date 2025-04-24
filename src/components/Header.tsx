import React from "react";
import { motion } from "framer-motion";
import { CircleUser } from "lucide-react";
import personalData from "../informations/personal.json";

const Header: React.FC = () => {
    return (
        <motion.header
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-8 rounded-md shadow-lg"
        >
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                    <div className="bg-white text-blue-600 p-3 rounded-full mr-4">
                        <CircleUser size={48} />
                    </div>
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="text-3xl md:text-4xl font-bold"
                        >
                            {personalData.name}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className="text-xl text-blue-100"
                        >
                            {personalData.title}
                        </motion.p>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="text-sm md:text-base space-y-1"
                >
                    <p>{personalData.contact.email}</p>
                    <p>{personalData.contact.phone}</p>
                    <p>{personalData.contact.location}</p>
                </motion.div>
            </div>
        </motion.header>
    );
};

export default Header;
