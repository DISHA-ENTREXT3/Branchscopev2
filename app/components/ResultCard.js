export default function ResultCard({ result }) {
  if (!result) return null;

  return (
    <div className="bg-gray-800 p-4 rounded text-white">
      <h2 className="font-bold mb-2">Analysis</h2>
      <p>Score: {result.score}</p>
      <p>Risk: {result.risk}</p>
      <p>ROI: {result.roi}</p>
    </div>
  );
}
