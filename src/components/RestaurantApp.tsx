'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FC } from 'react';

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  alt: string;
};

type FeatureCardProps = {
  feature: Feature;
  index: number;
};

export default function RestaurantApp() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features: Feature[] = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#f5ae16] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      title: "リアルタイム通知機能",
      description: "新しい注文が入ると自動通知でスタッフに即時お知らせ。急ぎのオーダーも見逃しません。",
      image: "/sozai/order-kanri-image.png",
      alt: "注文管理画面"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#f5ae16] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Square Terminal連携",
      description: "キャッシュレス決済とインボイス発行に対応。会計業務がスムーズに完了します。",
      image: "/sozai/square-image.png",
      alt: "Square決済画面"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#f5ae16] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: "柔軟なテーブル管理",
      description: "テーブルごとの色分けや状況管理が可能。店内の状況を一目で把握できます。",
      image: "/sozai/kessai-image.png",
      alt: "テーブル管理画面"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#f5ae16] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "店舗側からの注文追加",
      description: "お客さんが口頭でオーダーした場合も、キッチンアプリから簡単に注文を追加できます。",
      image: "/sozai/new-order-image.png",
      alt: "新規オーダー追加画面"
    }
  ];

  const FeatureCard: FC<FeatureCardProps> = ({ feature, index }) => {
    const [cardRef, cardInView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <motion.div 
        ref={cardRef}
        className="bg-white dark:bg-[#121212] p-6 rounded-xl shadow-md"
        initial={{ opacity: 0, y: 30 }}
        animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        whileHover={{ y: -5 }}
      >
        <div className="mb-4 pb-4 border-b border-gray-100 dark:border-gray-800 flex items-center">
          {feature.icon}
          <h3 className="text-xl font-bold">{feature.title}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {feature.description}
        </p>
        <motion.div 
          className="relative h-48 sm:h-64 w-full overflow-hidden rounded-lg"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <Image 
            src={feature.image} 
            alt={feature.alt} 
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-500 hover:scale-105"
          />
        </motion.div>
      </motion.div>
    );
  };

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">店舗向け機能</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            キッチンアプリとSquare連携で、注文から会計までをスマートに管理
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 items-stretch">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
} 