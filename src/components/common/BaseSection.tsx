import React, { ReactNode } from "react";
import {motion} from "framer-motion";

interface BaseSectionProps {
  title?: string;
  children: ReactNode;
  className?: string;
  id?: string;
}

const BaseSection: React.FC<BaseSectionProps> = ({title, children, className = "",id=""}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      viewport={{ once: true }}
      className={`relative max-w-screen-xl mx-auto py-10${className}`}
      id={id}
    >
      <div className="container mx-auto bg-background backdrop-blur-sm p-4 rounded-lg shadow-lg px-2 py-10 z-10 space-y-6 mb-30">
        {title && <h2 className="text-3xl font-bold text-center pb-6">{title}</h2>}
        {children}
      </div>
    </motion.div>
  );
};

export default BaseSection;