import React from "react";
import Link from "next/link";

async function page() {
  const res = await fetch("https://api.imgflip.com/get_memes");
  const { data } = await res.json();
  const memes = data.memes;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 py-10">
      <h1 className="text-center text-5xl font-extrabold text-white mb-12">
        Meme Gallery
      </h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {memes.map((memes: any) => (
          <Link href={`/detail/${memes.id}`} key={memes.id}>
            <div className="bg-white rounded-xl shadow-xl border-2 border-transparent hover:border-red-500 transform transition duration-300">
              <div className="h-64 w-full rounded-t-xl overflow-hidden flex items-center justify-center bg-gray-200">
                <img
                  src={memes.url}
                  alt={memes.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-4 flex flex-col items-center">
                <p className="text-xl font-bold text-gray-800 mb-2">
                  {memes.name}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default page;
