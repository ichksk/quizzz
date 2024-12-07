export const QuestionField = () => {
  return (
    <textarea
      id="question"
      rows={3}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="例：日本で最も高い山は？"
    />
  )
}