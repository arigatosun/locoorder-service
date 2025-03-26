"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "キャンセルリスクの軽減",
    description: "事前決済により、予約のキャンセルリスクを大幅に軽減します。",
    icon: "🎯",
  },
  {
    title: "収益の安定化",
    description:
      "確実な予約と決済により、収益の予測が容易になり、経営の安定化を実現します。",
    icon: "💰",
  },
  {
    title: "業務効率の向上",
    description:
      "予約管理や決済処理を自動化することで、スタッフの業務負荷を軽減します。",
    icon: "⚡",
  },
  {
    title: "顧客満足度の向上",
    description:
      "スムーズな予約・決済プロセスにより、顧客満足度を向上させます。",
    icon: "😊",
  },
];

export default function Benefits() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2563eb] dark:text-[#3b82f6]">
            導入メリット
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            ビジネスの成長をサポート
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#eff6ff] dark:bg-[#1e3a8a] p-6 rounded-lg text-center"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-[#2563eb] dark:text-[#3b82f6]">
                {benefit.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
