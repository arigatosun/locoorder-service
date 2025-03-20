import Image from 'next/image';

export default function CustomerApp() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">お客様向けアプリ</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            アプリのインストール不要のWebアプリで、どのデバイスからでも快適に利用可能
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="bg-white dark:bg-[#121212] p-8 rounded-xl shadow-md">
              <ul className="space-y-8">
                <li className="flex items-start border-b border-gray-100 dark:border-gray-800 pb-6">
                  <div className="bg-[#f5ae16] rounded-md p-2 mr-4 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">インストール不要</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      QRコードをスキャンするだけで、すぐにメニューを閲覧して注文できます。専用アプリのインストールは不要です。
                    </p>
                  </div>
                </li>
                <li className="flex items-start border-b border-gray-100 dark:border-gray-800 pb-6">
                  <div className="bg-[#f5ae16] rounded-md p-2 mr-4 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">視覚的なメニュー</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      写真付きのメニューでより直感的に商品を選べます。オプションやカスタマイズも簡単に指定できます。
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#f5ae16] rounded-md p-2 mr-4 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">リアルタイム注文状況</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      注文した商品の調理状況や提供状況をリアルタイムで確認可能。待ち時間も可視化されます。
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center order-1 md:order-2 mb-10 md:mb-0">
            <div className="relative h-[600px] w-[300px] shadow-lg overflow-hidden">
              <Image 
                src="/sozai/order-image1.png" 
                alt="ロコオーダー商品一覧画面" 
                className="rounded-2xl"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="relative h-[600px] w-[300px] -ml-10 mt-20 shadow-lg overflow-hidden">
              <Image 
                src="/sozai/order-image2.png" 
                alt="ロコオーダーカート画面" 
                className="rounded-2xl"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 