import Image from "next/image";

export default function Home() {
  return (
  <main className="min-h-screen bg-gray-600">
    <div className="container mx-auto px-4 py-8">
      <img className="flex flex-col items-center justify-center" src="https://img.pokemondb.net/sprites/black-white/anim/normal/rhydon.gif" width={200} height={200} alt="Pokémon Logo" />
      <h1 className="text-4xl font-bold text-center mb-8">
        Pokémon Showdown Team Tracker
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Track Your Teams</h2>
          <p className="text-gray-600">
            Organize and manage your Pokémon Showdown teams in one place.
          </p>
          <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Get Started
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Recent Teams</h2>
          <p className="text-gray-600">
            No teams added yet. Create your first team to get started!
          </p>
        </div>
      </div>
    </div>
  </main>
  );
}
