import { FC } from 'react';

type BenefitCategoryProps = {
  title: string;
  benefits: { title: string; description: string }[];
  color: string;
  icon: React.ReactNode;
};

const BenefitCategory: FC<BenefitCategoryProps> = ({ title, benefits, color, icon }) => {
  return (
    <div className="bg-white dark:bg-[#121212] p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-6 ${color}`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 text-[#f5ae16] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <span className="font-semibold">{benefit.title}</span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{benefit.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Benefits() {
  const benefits = [
    {
      title: "業務効率化",
      icon: (
        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      color: "bg-blue-100 dark:bg-blue-900/30",
      benefits: [
        {
          title: "人手不足解消",
          description: "注文取りの負担を軽減し、接客サービスの質を向上"
        },
        {
          title: "オーダーミス削減",
          description: "お客様が直接入力するため、聞き間違いなどのミスを防止"
        },
        {
          title: "待ち時間の短縮",
          description: "顧客が自分のペースで注文でき、スタッフの手間と時間を削減"
        },
        {
          title: "ピーク時の混雑緩和",
          description: "同時に複数の注文を処理できるため、繁忙時の対応力が向上"
        }
      ]
    },
    {
      title: "売上向上",
      icon: (
        <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
        </svg>
      ),
      color: "bg-green-100 dark:bg-green-900/30",
      benefits: [
        {
          title: "客単価アップ",
          description: "写真付きメニューとオプション選択で追加注文を促進"
        },
        {
          title: "回転率向上",
          description: "注文から提供までのスピードアップによりテーブル回転率が向上"
        },
        {
          title: "データ活用",
          description: "注文データを分析し、メニュー改善やマーケティングに活用可能"
        }
      ]
    },
    {
      title: "コスト削減",
      icon: (
        <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      color: "bg-amber-100 dark:bg-amber-900/30",
      benefits: [
        {
          title: "人件費削減",
          description: "注文取りや会計業務の効率化によりスタッフの最適配置が可能"
        },
        {
          title: "紙メニュー削減",
          description: "印刷コストの削減とメニュー更新の柔軟性向上"
        },
        {
          title: "決済手数料の最適化",
          description: "Square連携による合理的な決済手数料"
        }
      ]
    },
    {
      title: "デジタル対応",
      icon: (
        <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
        </svg>
      ),
      color: "bg-purple-100 dark:bg-purple-900/30",
      benefits: [
        {
          title: "インボイス制度対応",
          description: "Square連携によるインボイス発行に完全対応"
        },
        {
          title: "キャッシュレス対応",
          description: "多様な決済方法に対応し、現代のニーズに合致"
        },
        {
          title: "IT導入補助金対象",
          description: "飲食店のDX化を支援する政府施策の活用が可能"
        }
      ]
    }
  ];

  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">導入メリット</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            ロコオーダーは単なる注文システムではなく、<br />
            飲食店運営全体の効率とクオリティを高めるソリューションです
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((category, index) => (
            <BenefitCategory
              key={index}
              title={category.title}
              benefits={category.benefits}
              color={category.color}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 