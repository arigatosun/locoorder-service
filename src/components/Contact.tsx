export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">お問い合わせ</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            ロコオーダーについてのご質問・ご相談はこちらから
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white dark:bg-[#121212] rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-bold mb-6 pb-3 border-b border-gray-200 dark:border-gray-800">お問い合わせフォーム</h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  会社名
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] focus:ring-2 focus:ring-[#f5ae16] focus:border-transparent"
                  placeholder="株式会社〇〇"
                />
              </div>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] focus:ring-2 focus:ring-[#f5ae16] focus:border-transparent"
                  placeholder="山田 太郎"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] focus:ring-2 focus:ring-[#f5ae16] focus:border-transparent"
                  placeholder="example@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] focus:ring-2 focus:ring-[#f5ae16] focus:border-transparent"
                  placeholder="03-xxxx-xxxx"
                />
              </div>
              
              <div>
                <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="inquiry"
                  name="inquiry"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] focus:ring-2 focus:ring-[#f5ae16] focus:border-transparent"
                  placeholder="ご質問やご相談内容をご記入ください"
                ></textarea>
              </div>
              
              <div className="flex items-start">
                <input
                  id="privacy"
                  name="privacy"
                  type="checkbox"
                  required
                  className="h-5 w-5 text-[#f5ae16] focus:ring-[#f5ae16] rounded mt-1"
                />
                <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                  <a href="#" className="text-[#f5ae16] hover:underline">プライバシーポリシー</a>に同意します <span className="text-red-500">*</span>
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#f5ae16] hover:bg-[#e09c00] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                送信する
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-[#121212] rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-4 pb-3 border-b border-gray-200 dark:border-gray-800">会社情報</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#f5ae16] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                  <p><span className="font-semibold">会社名：</span>株式会社camomile</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#f5ae16] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <p><span className="font-semibold">所在地：</span>〒550-0014 大阪府大阪市西区南堀江１丁目２５−１２ ＲＥ－０１５ 407号室</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#f5ae16] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <p><span className="font-semibold">メール：</span>info@camomile.co.jp</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-[#fff8e6] to-[#fffcf2] dark:from-[#1a1302] dark:to-[#121008] rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-[#f5ae16]">お気軽にお問い合わせください</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                導入に関するご相談や料金体系、サービス詳細など、お気軽にお問い合わせください。専任スタッフが丁寧にご対応いたします。
              </p>
              <div className="flex items-center text-[#f5ae16]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-medium">通常、お問い合わせから1営業日以内にご返信いたします</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="mt-20 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} camomile Inc. All rights reserved.</p>
      </footer>
    </section>
  );
} 