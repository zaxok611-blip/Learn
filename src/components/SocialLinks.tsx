import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Send, Ghost, X, Share2 } from 'lucide-react';

const SocialLinks: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram size={22} />,
      url: 'https://www.instagram.com/dindar.krd?igsh=MXg0bGR3aGR2YXF2MA==',
      color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]',
      angle: -90, // Top
    },
    {
      name: 'Telegram',
      icon: <Send size={22} />,
      url: 'https://t.me/dindarkrd',
      color: 'bg-[#229ED9]',
      angle: -135, // Top-Left
    },
    {
      name: 'Snapchat',
      icon: <Ghost size={22} />,
      url: 'https://snapchat.com/t/I9BRAI4J',
      color: 'bg-[#FFFC00] text-black',
      angle: -45, // Top-Right
    },
  ];

  const radius = 80; 

  return (
    <div className="fixed bottom-8 right-12 z-[100]">
      <div className="relative">
        {/* Social Links shown when open in a radial pattern */}
        <AnimatePresence>
          {isOpen && socialLinks.map((link, index) => {
            const x = Math.cos((link.angle * Math.PI) / 180) * radius;
            const y = Math.sin((link.angle * Math.PI) / 180) * radius;

            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                animate={{ opacity: 1, scale: 1, x, y }}
                exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20,
                  delay: index * 0.05 
                }}
                whileHover={{ scale: 1.1, zIndex: 10 }}
                whileTap={{ scale: 0.9 }}
                className={`absolute w-12 h-12 rounded-full flex items-center justify-center text-white shadow-[0_8px_16px_rgba(0,0,0,0.2)] ${link.color} border-2 border-white cursor-pointer`}
                title={link.name}
                style={{ left: '50%', top: '50%', marginLeft: '-1.5rem', marginTop: '-1.5rem' }}
              >
                {link.icon}
              </motion.a>
            );
          })}
        </AnimatePresence>

        {/* Main Toggle Button */}
        <motion.button
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center border-4 transition-all relative z-10 ${
            isOpen 
            ? 'bg-[#8b5cf6] text-[#0f172a] border-white' 
            : 'bg-[#0f172a] text-white border-[#8b5cf6]/30 hover:border-[#8b5cf6]'
          }`}
        >
          {isOpen ? (
            <X size={32} />
          ) : (
            <div className="flex flex-col items-center">
              <Share2 size={28} />
              <span className="text-[8px] font-black kurdish-text mt-0.5">سۆشیال</span>
            </div>
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default SocialLinks;
