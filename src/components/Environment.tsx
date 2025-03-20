'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Environment() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [cardLeftRef, cardLeftInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [cardRightRef, cardRightInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">動作環境</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            さまざまなデバイスで快適にご利用いただけます
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-8 lg:gap-12">
          <motion.div 
            ref={cardLeftRef}
            className="md:w-1/2 bg-white dark:bg-[#121212] p-6 sm:p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, x: -30 }}
            animate={cardLeftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-2xl font-bold mb-6 pb-3 border-b border-gray-200 dark:border-gray-800">
              顧客側
            </h3>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={cardLeftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="bg-[#f5ae16] rounded-full p-1.5 mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  モダンブラウザ搭載の<strong>スマートフォン</strong>または<strong>タブレット</strong>
                </p>
              </motion.li>
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={cardLeftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <div className="bg-[#f5ae16] rounded-full p-1.5 mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>iOS/Android</strong>両対応
                </p>
              </motion.li>
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={cardLeftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <div className="bg-[#f5ae16] rounded-full p-1.5 mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>アプリのインストール不要</strong>（WebアプリでQRコードから直接アクセス）
                </p>
              </motion.li>
            </ul>
          </motion.div>
          
          <motion.div 
            ref={cardRightRef}
            className="md:w-1/2 bg-white dark:bg-[#121212] p-6 sm:p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, x: 30 }}
            animate={cardRightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-2xl font-bold mb-6 pb-3 border-b border-gray-200 dark:border-gray-800">
              店舗側
            </h3>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: 20 }}
                animate={cardRightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="bg-[#f5ae16] rounded-full p-1.5 mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Flutterベース</strong>の専用キッチンアプリ（iOS/Android対応）
                </p>
              </motion.li>
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: 20 }}
                animate={cardRightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <div className="bg-[#f5ae16] rounded-full p-1.5 mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Square Terminal</strong>（決済用）
                </p>
              </motion.li>
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: 20 }}
                animate={cardRightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <div className="bg-[#f5ae16] rounded-full p-1.5 mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>オフラインモード</strong>対応で一時的なネットワーク切断時も継続運用可能
                </p>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 