import React from "react";

// Types of meme data
interface Meme {
  id: string;
  name: string;
  url: string;
}

async function page({ params }: { params: { id: string } }) {
  const { id } = params;

  const res = await fetch("https://api.imgflip.com/get_memes");
  const { data } = await res.json();
  const memes: Meme[] = data.memes;

  const meme = memes.find((meme) => meme.id === id);
  console.log("meme", meme);
  if (!meme) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-500 to-purple-600">
        <h1 className="text-4xl font-bold text-white">Meme not found!</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 py-10 flex flex-col items-center">
      <h1 className="text-center text-5xl font-extrabold text-white mb-12 shadow-md">
        {meme.name}
      </h1>

      <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full transform transition duration-300 ease-in-out">
        <img
          src={meme.url}
          alt={meme.name}
          className="w-full h-72 object-contain rounded-lg mb-4"
        />
      </div>
      <div className="mt-10 w-full max-w-md space-y-6">
        <input
          type="text"
          placeholder="Text 1"
          className="w-full px-4 py-2 bg-gray-100 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-500 transition duration-300"
        />
        <input
          type="text"
          placeholder="Text 2"
          className="w-full px-4 py-2 bg-gray-100 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-500 transition duration-300"
        />
        <button className="w-full bg-gradient-to-r from-red-500 to-yellow-500 text-white font-semibold py-3 rounded-lg hover:bg-gradient-to-l hover:from-red-600 hover:to-yellow-600">
          Generate Meme
        </button>
      </div>
    </div>
  );
}

export default page;
