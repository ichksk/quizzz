"use client"

import { ChangeEvent, useState } from 'react';

export default function CreateQuizPage() {
  const [imagePreview, setImagePreview] = useState('');

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">クイズを作成</h1>

        <form className="space-y-6">
          {/* 問題文入力 */}
          <div className="space-y-2">
            <label htmlFor="question" className="block font-medium">
              問題文
            </label>
            <textarea
              id="question"
              rows={3}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="問題文を入力してください（例：日本で最も高い山は？）"
            />
          </div>

          {/* 画像アップロード */}
          <div className="space-y-2">
            <label htmlFor="image" className="block font-medium">
              画像（任意）
            </label>
            <div className="flex flex-col items-center p-6 border-2 border-dashed rounded-lg bg-gray-50">
              <input
                type="file"
                id="image"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
              <label
                htmlFor="image"
                className="flex flex-col items-center gap-2 cursor-pointer"
              >
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <span className="text-sm text-gray-600">
                  クリックして画像をアップロード
                </span>
                <span className="text-xs text-gray-400">
                  PNG, JPG, GIF (最大 2MB)
                </span>
              </label>
            </div>
            {/* 画像プレビュー */}
            {imagePreview && (
              <div className="mt-4">
                <img
                  src={imagePreview}
                  alt="アップロードした画像のプレビュー"
                  className="max-w-full h-auto max-h-64 rounded-lg mx-auto"
                />
              </div>
            )}
          </div>

          {/* 選択肢入力 */}
          <div className="space-y-4">
            <label className="block font-medium">選択肢</label>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="flex items-center gap-4">
                  <input
                    type="radio"
                    id={`correct-${num}`}
                    name="correct-answer"
                    className="w-4 h-4"
                  />
                  <input
                    type="text"
                    id={`choice-${num}`}
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={`選択肢 ${num}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ボタン */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              作成
            </button>
            <button
              type="button"
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200"
              onClick={() => window.history.back()}
            >
              戻る
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}