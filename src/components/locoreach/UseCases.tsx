"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const useCases = [
  {
    title: "美容院・サロン",
    description:
      "予約時に事前決済を行うことで、キャンセルを防ぎ、予約管理を効率化します。",
    image: "/sozai/salon.png",
  },
  {
    title: "レストラン・カフェ",
    description:
      "特別なコース料理やイベントの予約時に、事前決済で確実な予約を実現します。",
    image: "/sozai/restaurant.png",
  },
  {
    title: "ホテル・宿泊施設",
    description:
      "宿泊予約時の事前決済で、キャンセルリスクを軽減し、収益を安定させます。",
    image: "/sozai/hotel.png",
  },
  {
    title: "フィットネスジム・スポーツ施設",
    description:
      "レッスンや施設利用の予約時に、事前決済で確実な予約を実現します。",
    image: "/sozai/fitness.png",
  },
];

export default function UseCases() {
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
            活用シーン
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            様々な業種でご活用いただけます
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={useCase.image}
                  alt={useCase.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#2563eb] dark:text-[#3b82f6]">
                  {useCase.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {useCase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
