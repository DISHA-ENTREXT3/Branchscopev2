"use client";

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const login = async () => {
    try {
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-xl shadow-xl text-center">
        <h1 className="text-2xl font-bold mb-4">
          BranchScope 🚀
        </h1>

        <p className="mb-4 text-gray-600">
          Login to continue
        </p>

        <button
          onClick={login}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
