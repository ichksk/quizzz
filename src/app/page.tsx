"use client"

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleCreateQuiz = () => {
    router.push('/new');
  };

  const handleJoinQuiz = () => {
    router.push('/join');
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-6 items-center">
          <h1 className="text-3xl font-bold text-center mb-8">クイズアプリへようこそ！</h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 min-w-[200px] font-medium"
              onClick={handleCreateQuiz}
            >
              クイズを作る
            </button>
            <button
              className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 min-w-[200px] font-medium"
              onClick={handleJoinQuiz}
            >
              クイズに参加する
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}