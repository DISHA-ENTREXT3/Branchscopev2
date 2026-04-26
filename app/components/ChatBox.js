export default function ChatBox({
  chat,
  question,
  setQuestion,
  ask,
  loading,
}) {
  return (
    <div className="bg-gray-800 p-4 rounded text-white flex flex-col">
      <div className="flex-1 overflow-y-auto">
        {chat.map((c, i) => (
          <p key={i} className="mb-2">
            <b>{c.role}:</b> {c.text}
          </p>
        ))}
      </div>

      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="p-2 mt-2 text-black"
      />

      <button
        onClick={ask}
        className="bg-blue-600 mt-2 p-2 rounded"
      >
        {loading ? "Loading..." : "Ask"}
      </button>
    </div>
  );
}
