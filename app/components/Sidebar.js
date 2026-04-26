export default function Sidebar({ program, setProgram }) {
  return (
    <div className="w-60 bg-gray-900 p-4 text-white">
      <h2 className="mb-4 font-bold">Select Program</h2>
      <select
        value={program}
        onChange={(e) => setProgram(e.target.value)}
        className="w-full p-2 bg-gray-700"
      >
        <option value="cse">CSE</option>
        <option value="mba">MBA</option>
        <option value="law">Law</option>
      </select>
    </div>
  );
}
