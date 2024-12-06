"use client"

import { useParams, useRouter } from 'next/navigation';
import { FC } from 'react';

export const WaitingPage: FC = () => {
  const router = useRouter();
  const { id } = useParams() as { id: string };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 font-[family-name:var(--font-geist-sans)]">
      {/* メインコンテンツ */}
      <div className="text-center space-y-6">
        <h1 className="text-2xl font-bold mb-2">ルームID: {decodeURIComponent(id)}</h1>

        {/* ローディングアニメーション */}
        <div className="flex justify-center my-8">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
        </div>

        {/* 待機メッセージ */}
        <p className="text-xl text-gray-700">
          ゲーム開始までお待ちください
        </p>
        <p className="text-sm text-gray-500">
          主催者がゲームを開始すると自動的に画面が切り替わります
        </p>
      </div>

      {/* 戻るボタン */}
      <button
        onClick={() => router.push('/join')}
        className="mt-12 px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200"
      >
        退出する
      </button>
    </div>
  );
};