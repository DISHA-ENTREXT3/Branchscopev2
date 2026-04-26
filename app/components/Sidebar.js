export default function Sidebar({ program, setProgram }) {
  return (
    <div className="w-64 bg-black text-white p-6">
      <h1 className="text-xl font-bold mb-6">BranchScope</h1>

      <label className="block mb-2">Program</label>

      <select
        value={program}
        onChange={(e) => setProgram(e.target.value)}
        className="w-full p-2 text-black rounded"
      >
        <option value="cse">CSE</option>
        <option value="mba">MBA</option>
        <option value="law">Law</option>
      </select>
    </div>
  );
}
