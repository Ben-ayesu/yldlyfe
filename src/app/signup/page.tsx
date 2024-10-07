"use client";
import PageLayout from "../components/layout/PageLayout";

export default function Signup() {
  return (
    <PageLayout>
      <h1 className="text-3xl text-center text-white font-bold mb-8">
        SIGN UP
      </h1>

      <form className="w-full max-w-sm">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-white text-sm font-bold mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sign Up
        </button>
      </form>
    </PageLayout>
  );
}
