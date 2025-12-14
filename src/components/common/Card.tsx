import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CardProps {
  image?: string;
  title?: string;
  subtitle?: string;
  url?: string;
  className?: string;
  children?: React.ReactNode;
}

const fallbackAvatar = "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747262948/avatar_xubp5u.webp";

const Card: React.FC<CardProps> = ({
  image,
  title = "",
  subtitle,
  url,
  className = "",
  children
}) => {
  // Manage image source with fallback
  const [src, setSrc] = useState<string>(image ?? fallbackAvatar);

  useEffect(() => {
    setSrc(image ?? fallbackAvatar);
  }, [image]);

  const handleClick = () => {
    if (url) window.location.href = url;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: 90 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className={`w-full p-4 rounded-xl shadow-md bg-background ${url ? 'cursor-pointer' : ''} ${className}`}
      onClick={handleClick}
    >
      <div className="w-full aspect-square overflow-hidden rounded-full mb-4 flex items-center justify-center bg-muted">
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover"
          onError={() => setSrc(fallbackAvatar)}
        />
      </div>

      {title && <h3 className="text-xl font-semibold">{title}</h3>}
      {subtitle && <p className="text-sm text-description">{subtitle}</p>}
      {children}
    </motion.div>
  );
};

export default Card;
