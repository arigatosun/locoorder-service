import Image from 'next/image';

export default function RestaurantApp() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">店舗向け機能</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            キッチンアプリとSquare連携で、注文から会計までをスマートに管理
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          <div className="bg-white dark:bg-[#121212] p-6 rounded-xl shadow-md">
            <div className="mb-4 pb-4 border-b border-gray-100 dark:border-gray-800 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#f5ae16] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <h3 className="text-xl font-bold">リアルタイム通知機能</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              新しい注文が入ると自動通知でスタッフに即時お知らせ。急ぎのオーダーも見逃しません。
            </p>
            <div className="relative h-64 w-full overflow-hidden rounded-lg">
              <Image 
                src="/sozai/order-kanri-image.png" 
                alt="注文管理画面" 
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
          
          <div className="bg-white dark:bg-[#121212] p-6 rounded-xl shadow-md">
            <div className="mb-4 pb-4 border-b border-gray-100 dark:border-gray-800 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#f5ae16] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h3 className="text-xl font-bold">Square Terminal連携</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              キャッシュレス決済とインボイス発行に対応。会計業務がスムーズに完了します。
            </p>
            <div className="relative h-64 w-full overflow-hidden rounded-lg">
              <Image 
                src="/sozai/square-image.png" 
                alt="Square決済画面" 
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
          
          <div className="bg-white dark:bg-[#121212] p-6 rounded-xl shadow-md">
            <div className="mb-4 pb-4 border-b border-gray-100 dark:border-gray-800 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#f5ae16] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <h3 className="text-xl font-bold">柔軟なテーブル管理</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              テーブルごとの色分けや状況管理が可能。店内の状況を一目で把握できます。
            </p>
            <div className="relative h-64 w-full overflow-hidden rounded-lg">
              <Image 
                src="/sozai/kessai-image.png" 
                alt="テーブル管理画面" 
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
          
          <div className="bg-white dark:bg-[#121212] p-6 rounded-xl shadow-md">
            <div className="mb-4 pb-4 border-b border-gray-100 dark:border-gray-800 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#f5ae16] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold">店舗側からの注文追加</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              お客さんが口頭でオーダーした場合も、キッチンアプリから簡単に注文を追加できます。
            </p>
            <div className="relative h-64 w-full overflow-hidden rounded-lg">
              <Image 
                src="/sozai/new-order-image.png" 
                alt="新規オーダー追加画面" 
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 