import { motion } from "framer-motion";

interface ModernTextProps {
  text: string;
  className?: string;
}

export default function ModernText({ text, className = "", ...props }: ModernTextProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      {...props}
    >
      <motion.h1
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          textShadow: [
            "0 0 20px rgba(6, 182, 212, 0.3)",
            "0 0 40px rgba(6, 182, 212, 0.5)",
            "0 0 20px rgba(6, 182, 212, 0.3)",
          ]
        }}
        transition={{
          opacity: { duration: 0.8 },
          y: { duration: 0.8 },
          textShadow: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }
        }}
      >
        {text}
      </motion.h1>
      
      {/* Subtle underline animation */}
      <motion.div
        className="absolute bottom-0 left-1/2 h-1 bg-gradient-to-r from-primary to-secondary"
        initial={{ width: 0, x: "-50%" }}
        animate={{ 
          width: ["0%", "60%", "0%"],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}