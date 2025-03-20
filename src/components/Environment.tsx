import Image from 'next/image';

export default function Environment() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">動作環境</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            さまざまなデバイスで快適にご利用いただけます
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-12">
          <div className="md:w-1/2 bg-white dark:bg-[#121212] p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-6 pb-3 border-b border-gray-200 dark:border-gray-800">
              顧客側
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-[#f5ae16] rounded-full p-1.5 mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  モダンブラウザ搭載の<strong>スマートフォン</strong>または<strong>タブレット</strong>
                </p>
              </li>
              <li className="flex items-start">
                <div className="bg-[#f5ae16] rounded-full p-1.5 mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>iOS/Android</strong>両対応
                </p>
              </li>
              <li className="flex items-start">
                <div className="bg-[#f5ae16] rounded-full p-1.5 mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>アプリのインストール不要</strong>（WebアプリでQRコードから直接アクセス）
                </p>
              </li>
            </ul>
          </div>
          
          <div className="md:w-1/2 bg-white dark:bg-[#121212] p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-6 pb-3 border-b border-gray-200 dark:border-gray-800">
              店舗側
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-[#f5ae16] rounded-full p-1.5 mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Flutterベース</strong>の専用キッチンアプリ（iOS/Android対応）
                </p>
              </li>
              <li className="flex items-start">
                <div className="bg-[#f5ae16] rounded-full p-1.5 mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Square Terminal</strong>（決済用）
                </p>
              </li>
              <li className="flex items-start">
                <div className="bg-[#f5ae16] rounded-full p-1.5 mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>オフラインモード</strong>対応で一時的なネットワーク切断時も継続運用可能
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 