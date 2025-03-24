'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <footer className="bg-gray-100 dark:bg-[#121212] pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          ref={ref}
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-gray-600 dark:text-gray-300 mb-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">会社情報</h3>
                <p className="mb-1">株式会社camomile</p>
                <p className="mb-1">〒550-0014 大阪府大阪市西区南堀江１丁目２５−１２ ＲＥ－０１５ 407号室</p>
                <p className="mb-1">Email: info@camomile.co.jp</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="border-t border-gray-200 dark:border-gray-800 pt-8 flex justify-center text-sm text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>© 2025 camomile Inc. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
} 