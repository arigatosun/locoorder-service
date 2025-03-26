"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Stripe決済対応",
    description:
      "安全で信頼性の高いStripe決済システムを採用。クレジットカード、電子マネーなど、様々な決済方法に対応しています。",
    icon: "💳",
  },
  {
    title: "予約管理システム",
    description:
      "予約状況をリアルタイムで管理。カレンダー形式で視覚的に予約状況を確認できます。",
    icon: "📅",
  },
  {
    title: "多業種対応",
    description:
      "美容院、レストラン、ホテル、フィットネスジムなど、様々な業種に対応した予約システムを提供します。",
    icon: "🏢",
  },
  {
    title: "自動リマインダー",
    description:
      "予約日時が近づくと、自動的にメールやSMSでリマインダーを送信。予約のキャンセルを防ぎます。",
    icon: "🔔",
  },
  {
    title: "カスタマイズ可能",
    description:
      "お客様のニーズに合わせて、予約フォームや決済フローをカスタマイズできます。",
    icon: "⚙️",
  },
  {
    title: "分析機能",
    description:
      "予約状況や売上データを分析し、ビジネスの最適化に役立つレポートを提供します。",
    icon: "📊",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2563eb] dark:text-[#3b82f6]">
            主な機能
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            ビジネスの効率化をサポートする充実した機能
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#eff6ff] dark:bg-[#1e3a8a] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-[#2563eb] dark:text-[#3b82f6]">
                {feature.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
