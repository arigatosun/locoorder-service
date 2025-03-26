"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#eff6ff] to-white dark:from-[#1e3a8a] dark:to-[#0a0a0a] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/sozai/footer-logo.png"
              alt="ロコリーチロゴ"
              width={300}
              height={80}
              className="mb-6"
              priority
            />
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 text-[#2563eb] dark:text-[#3b82f6]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Stripeを活用した
              <br />
              事前決済予約システム
            </motion.h1>
            <motion.p
              className="text-xl mb-8 text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              多業種向けの事前決済予約システム。予約から決済まで、シームレスな体験を提供します。
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <a
                href="#features"
                className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold py-3 px-8 rounded-full text-center transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                サービス詳細を見る
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
                src="/sozai/locoreach-hero.png"
                alt="ロコリーチ画面イメージ"
                fill
                style={{ objectFit: "contain" }}
                className="rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
