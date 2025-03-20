'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#fff8e6] to-white dark:from-[#1a1302] dark:to-[#0a0a0a] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image 
              src="/sozai/loco-icon-logotext.svg" 
              alt="ロコオーダーロゴ" 
              width={300} 
              height={80} 
              className="mb-6"
              priority
            />
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 text-[#f5ae16] dark:text-[#f5ae16]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              テーブルからスマートに<br />注文、決済まで完結
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              QRコードの読み取りから注文、キャッシュレス決済まで店内飲食に特化したモバイルオーダーシステム
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <a 
                href="#features" 
                className="bg-[#f5ae16] hover:bg-[#e09c00] text-white font-bold py-3 px-8 rounded-full text-center transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                サービス詳細を見る
              </a>
              <a 
                href="#contact" 
                className="border-2 border-[#f5ae16] text-[#f5ae16] hover:bg-[#fff8e6] dark:hover:bg-[#1a1302] font-bold py-3 px-8 rounded-full text-center transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                お問い合わせ
              </a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
              <Image 
                src="/sozai/top-image.png" 
                alt="ロコオーダー画面イメージ" 
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 