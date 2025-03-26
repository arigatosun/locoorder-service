"use client";

import { motion } from "framer-motion";

export default function Support() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2563eb] dark:text-[#3b82f6]">
            導入サポート
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            充実したサポート体制で、スムーズな導入をサポートします
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#eff6ff] dark:bg-[#1e3a8a] p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-[#2563eb] dark:text-[#3b82f6]">
                導入サポート
              </h3>
              <ul className="text-left space-y-2 text-gray-700 dark:text-gray-300">
                <li>• 初期設定サポート</li>
                <li>• システム導入支援</li>
                <li>• スタッフトレーニング</li>
                <li>• カスタマイズ対応</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-[#eff6ff] dark:bg-[#1e3a8a] p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-[#2563eb] dark:text-[#3b82f6]">
                運用サポート
              </h3>
              <ul className="text-left space-y-2 text-gray-700 dark:text-gray-300">
                <li>• 24時間365日のサポート</li>
                <li>• システムアップデート</li>
                <li>• トラブルシューティング</li>
                <li>• 定期メンテナンス</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
