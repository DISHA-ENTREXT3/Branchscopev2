export default function ResultCard({ result }) {
  if (!result) return null;

  return (
    <div className="bg-white shadow-lg rounded-xl p-5">
      <h2 className="text-xl font-bold mb-4">Career Analysis</h2>

      <div className="space-y-2">
        <p>📊 Score: {result.score}</p>
        <p>⚠️ Risk: {result.risk}</p>
        <p>💰 ROI: {result.roi}</p>
      </div>

      <div className="mt-4 p-3 bg-gray-100 rounded">
        {result.suggestion}
      </div>
    </div>
  );
}
