"use client"

import { useRouter } from 'next/navigation';
import { useState, FormEvent, ChangeEvent } from 'react';

interface FormState {
  quizId: string;
  error: string;
}

export default function JoinQuiz(): JSX.Element {
  const router = useRouter();
  const [formState, setFormState] = useState<FormState>({
    quizId: '',
    error: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!formState.quizId.trim()) {
      setFormState(prev => ({
        ...prev,
        error: 'クイズIDを入力してください'
      }));
      return;
    }

    // クイズIDの検証とゲーム画面への遷移
    // 実際のアプリでは、ここでクイズIDの有効性を確認する処理を追加
    router.push(`/game/${formState.quizId}`);
  };

  const handleQuizIdChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setFormState(prev => ({
      ...prev,
      quizId: value,
      error: '', // エラーメッセージをクリア
    }));
  };

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-md mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold mb-4">クイズに参加</h1>
          <p className="text-gray-600">クイズIDを入力してゲームに参加しましょう！</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="quizId" className="block font-medium">
              クイズID
            </label>
            <input
              type="text"
              id="quizId"
              value={formState.quizId}
              onChange={handleQuizIdChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="例: QUIZ123"
            />
            {formState.error && (
              <p className="text-red-500 text-sm">{formState.error}</p>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              ゲームに参加
            </button>
            <button
              type="button"
              onClick={() => router.push('/')}
              className="w-full px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200"
            >
              戻る
            </button>
          </div>
        </form>

        {/* 補足情報 */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h2 className="font-medium mb-2">📝 参加方法</h2>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• クイズの主催者からクイズIDを受け取ってください</li>
            <li>• IDを入力して「ゲームに参加」をクリックしてください</li>
            <li>• ゲーム画面に移動したら、開始の合図をお待ちください</li>
          </ul>
        </div>
      </main>
    </div>
  );
}