"use client";

import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";

export default function Sidebar({ program, setProgram }) {
  const user = auth.currentUser;

  const logout = async () => {
    await signOut(auth);
    window.location.href = "/login";
  };

  return (
    <div className="w-64 bg-black text-white p-6 flex flex-col justify-between">
      <div>
        <h1 className="text-xl font-bold mb-6">
          BranchScope
        </h1>

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

      {/* 👇 USER INFO */}
      <div className="mt-6 border-t pt-4">
        <p className="text-sm">{user?.displayName}</p>
        <p className="text-xs text-gray-400">
          {user?.email}
        </p>

        <button
          onClick={logout}
          className="mt-3 bg-red-500 px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
