'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Support() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [cardsRef, cardsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [bannerRef, bannerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const supportTypes = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#f5ae16] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "初期設定サポート",
      description: "導入時のメニュー登録や設定をサポート。お客様の負担を最小限に抑え、スムーズな立ち上げをお手伝いします。"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#f5ae16] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "運用サポート",
      description: "サーバー監視やバージョンアップ対応など安心の保守体制を整えています。システムの安定稼働を24時間365日見守ります。"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#f5ae16] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "問い合わせ窓口",
      description: "導入後も安心の専任サポート体制。お電話やメールでのお問い合わせに、経験豊富なスタッフが迅速に対応いたします。"
    }
  ];

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">安心のサポート体制</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            導入から運用まで、しっかりとサポートいたします
          </p>
        </motion.div>
        
        <motion.div 
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          {supportTypes.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-[#121212] rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
                {item.icon}
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          ref={bannerRef}
          className="mt-16 bg-gradient-to-r from-[#fff8e6] to-[#fffcf2] dark:from-[#1a1302] dark:to-[#121008] rounded-xl p-8 shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={bannerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4 text-[#f5ae16]">サポートプランについて</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                ロコオーダーでは、お客様のニーズに合わせた複数のサポートプランをご用意しています。初期設定から運用まで、店舗の規模や要件に応じた最適なプランをご提案いたします。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a 
                  href="#contact" 
                  className="bg-[#f5ae16] hover:bg-[#e09c00] text-white font-bold py-3 px-6 rounded-lg text-center transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  詳細を問い合わせる
                </motion.a>
              </div>
            </div>
            <motion.div 
              className="md:w-1/3 flex justify-center"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 3, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 5,
                ease: "easeInOut" 
              }}
            >
              <div className="w-32 h-32 relative">
                <Image 
                  src="/sozai/loco-icon.png" 
                  alt="ロコオーダーアイコン" 
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 