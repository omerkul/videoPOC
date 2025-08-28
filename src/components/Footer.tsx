import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="py-8 border-t border-slate-200 bg-white/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="container mx-auto px-6 text-center text-slate-500 text-sm">
        <motion.p
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {/*&copy; NiCE*/}
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
