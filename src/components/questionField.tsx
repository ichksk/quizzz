import { useState } from "react";

export const QuestionField = () => {
  const [quizText, setQuizText] = useState('');

  return (
    <textarea
      // className="w-full min-w-[300px] h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
      className="w-full px-4 py-2  h-32 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"

      placeholder="例：日本で最も高い山は？"
      value={quizText}
      onChange={(e) => setQuizText(e.target.value)}
    />
  )
}