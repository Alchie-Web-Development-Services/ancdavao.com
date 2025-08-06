import React, { useState } from "react";
import { useRouter } from "next/router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import GoogleSignInButton from "@/components/GoogleSignInButton";
import FacebookSignInButton from "@/components/FacebookSignInButton";

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignup = async () => {
    try {
      setError(null);
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/my/account");
    } catch (err: unknown) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-lg min-w-96">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
        Create an Account
      </h2>
      <p className="text-center text-gray-600 mb-8">Sign up to get started</p>
      {error && (
        <p className="text-red-500 text-center mb-4 text-sm">{error}</p>
      )}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-semibold mb-2"
          htmlFor="email"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-semibold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Create a password"
        />
      </div>
      <button
        onClick={handleSignup}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-200"
      >
        Register
      </button>
      <div className="relative flex items-center justify-center my-6">
        <span className="absolute bg-white px-3 text-sm text-gray-500">
          Or continue with
        </span>
        <div className="w-full border-t border-gray-300"></div>
      </div>
      <GoogleSignInButton onError={setError} />
      <FacebookSignInButton onError={setError} />
      <p className="text-center text-gray-600 text-sm mt-6">
        Already have an account?{" "}
        <a
          onClick={() => router.push("/auth/login")}
          className="text-orange-600 hover:text-orange-700 font-medium cursor-pointer"
        >
          Login
        </a>
      </p>
    </div>
  );
};

export default RegisterForm;
