"use client";

import { motion } from "framer-motion";

const environments = [
  {
    title: "Webブラウザ",
    description: "PCやスマートフォンから、ブラウザで簡単にアクセスできます。",
    icon: "🌐",
  },
  {
    title: "モバイル対応",
    description:
      "スマートフォンやタブレットでも快適に操作できるレスポンシブデザイン。",
    icon: "📱",
  },
  {
    title: "タブレット",
    description: "店舗での予約管理や受付に最適なタブレット対応。",
    icon: "📱",
  },
];

export default function Environment() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#eff6ff] dark:bg-[#1e3a8a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2563eb] dark:text-[#3b82f6]">
            対応環境
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            様々なデバイスでご利用いただけます
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {environments.map((env, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#1a1a1a] p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{env.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-[#2563eb] dark:text-[#3b82f6]">
                {env.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {env.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
