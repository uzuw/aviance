"use client"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-sky-50 p-6">
      <h1 className="text-4xl font-bold text-blue-800 mb-4">✈️ Aviance</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Buy, Sell, and Discover the Best Airplanes in the Sky.
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
        Browse Airplanes
      </button>
    </main>
  );
}

