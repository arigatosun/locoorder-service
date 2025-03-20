'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function CustomerApp() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">お客様向けアプリ</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            アプリのインストール不要のWebアプリで、どのデバイスからでも快適に利用可能
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
          <motion.div 
            ref={contentRef}
            className="md:w-1/2 order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-[#121212] p-6 sm:p-8 rounded-xl shadow-md">
              <ul className="space-y-6 sm:space-y-8">
                <motion.li 
                  className="flex items-start border-b border-gray-100 dark:border-gray-800 pb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="bg-[#f5ae16] rounded-md p-2 mr-4 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">インストール不要</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      QRコードをスキャンするだけで、すぐにメニューを閲覧して注文できます。専用アプリのインストールは不要です。
                    </p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start border-b border-gray-100 dark:border-gray-800 pb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="bg-[#f5ae16] rounded-md p-2 mr-4 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">視覚的なメニュー</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      写真付きのメニューでより直感的に商品を選べます。オプションやカスタマイズも簡単に指定できます。
                    </p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <div className="bg-[#f5ae16] rounded-md p-2 mr-4 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">リアルタイム注文状況</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      注文した商品の調理状況や提供状況をリアルタイムで確認可能。待ち時間も可視化されます。
                    </p>
                  </div>
                </motion.li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            ref={imageRef}
            className="md:w-1/2 flex justify-center order-1 md:order-2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: 30 }}
            animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <motion.div 
              className="relative h-[500px] sm:h-[600px] w-[250px] sm:w-[300px] shadow-lg overflow-hidden"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Image 
                src="/sozai/order-image1.png" 
                alt="ロコオーダー商品一覧画面" 
                className="rounded-2xl"
                fill
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
            <motion.div 
              className="relative h-[500px] sm:h-[600px] w-[250px] sm:w-[300px] -ml-10 mt-20 shadow-lg overflow-hidden"
              initial={{ x: 20 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Image 
                src="/sozai/order-image2.png" 
                alt="ロコオーダーカート画面" 
                className="rounded-2xl"
                fill
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 