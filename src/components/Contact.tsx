'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          ref={headerRef}
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">お問い合わせ</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            ロコオーダーに関するご質問やお見積りのご依頼など、お気軽にお問い合わせください
          </p>
        </motion.div>
        
        <motion.div 
          ref={formRef}
          className="bg-white dark:bg-[#121212] rounded-xl shadow-md overflow-hidden max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-2 bg-gradient-to-br from-[#f5ae16] to-[#ffcd57] p-6 sm:p-8 md:p-10 text-white">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold mb-6">お問い合わせ方法</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <svg className="h-6 w-6 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium">Eメール</p>
                      <p className="mt-1">info@locoorder.jp</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-medium">電話</p>
                      <p className="mt-1">03-1234-5678</p>
                      <p className="text-sm mt-1">平日 9:00〜18:00</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="md:col-span-3 p-6 sm:p-8 md:p-10">
              <form>
                <div className="space-y-5">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-[#f5ae16] focus:border-[#f5ae16] dark:bg-[#1a1a1a] dark:text-white"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-[#f5ae16] focus:border-[#f5ae16] dark:bg-[#1a1a1a] dark:text-white"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                  >
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      会社名
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-[#f5ae16] focus:border-[#f5ae16] dark:bg-[#1a1a1a] dark:text-white"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-[#f5ae16] focus:border-[#f5ae16] dark:bg-[#1a1a1a] dark:text-white"
                    ></textarea>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                    className="pt-2"
                  >
                    <motion.button
                      type="submit"
                      className="w-full bg-[#f5ae16] hover:bg-[#e09c00] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      送信する
                    </motion.button>
                  </motion.div>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 