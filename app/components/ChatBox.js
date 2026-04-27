export default function ChatBox({
  chat,
  question,
  setQuestion,
  ask,
  loading,
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col h-full">
      <div className="flex-1 overflow-y-auto space-y-3">
        {chat.map((c, i) => (
          <div
            key={i}
            className={`p-3 rounded-lg max-w-[80%] ${
              c.role === "user"
                ? "bg-blue-500 text-white ml-auto"
                : "bg-gray-200 text-black"
            }`}
          >
            {c.text}
          </div>
        ))}
      </div>

      <div className="flex mt-4 gap-2">
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask your career question..."
          className="flex-1 p-3 border rounded-lg"
        />

        <button
          onClick={ask}
          className="bg-blue-600 text-white px-4 rounded-lg"
        >
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}
