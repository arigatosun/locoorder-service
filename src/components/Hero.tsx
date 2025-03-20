import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#fff8e6] to-white dark:from-[#1a1302] dark:to-[#0a0a0a] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <Image 
              src="/sozai/loco-icon-logotext.svg" 
              alt="ロコオーダーロゴ" 
              width={300} 
              height={80} 
              className="mb-6"
              priority
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#f5ae16] dark:text-[#f5ae16]">
              テーブルからスマートに<br />注文、決済まで完結
            </h1>
            <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
              QRコードの読み取りから注文、キャッシュレス決済まで店内飲食に特化したモバイルオーダーシステム
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#features" 
                className="bg-[#f5ae16] hover:bg-[#e09c00] text-white font-bold py-3 px-8 rounded-full text-center"
              >
                サービス詳細を見る
              </a>
              <a 
                href="#contact" 
                className="border-2 border-[#f5ae16] text-[#f5ae16] hover:bg-[#fff8e6] dark:hover:bg-[#1a1302] font-bold py-3 px-8 rounded-full text-center"
              >
                お問い合わせ
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative w-full h-[500px]">
              <Image 
                src="/sozai/top-image.png" 
                alt="ロコオーダー画面イメージ" 
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 