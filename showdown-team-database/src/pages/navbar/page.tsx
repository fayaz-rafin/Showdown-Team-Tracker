"use client";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full px-4 py-2 bg-gray-800">
      <div>
        <h1 className="text-xl font-bold text-white">Teams</h1>
      </div>
      <div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Login</button>
      </div>
    </nav>
  );
}