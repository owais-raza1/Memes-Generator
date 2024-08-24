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
        {memes.map((meme: any) => (
          <Link href={`/detail/${meme.id}`} key={meme.id} passHref>
            <div className="bg-white rounded-xl shadow-xl border-2 border-transparent hover:border-red-500 transform transition duration-300 h-96">
              <div className="h-3/4 w-full rounded-t-xl overflow-hidden flex items-center justify-center bg-gray-200">
                <img
                  src={meme.url}
                  alt={meme.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4 flex flex-col items-center h-1/4">
                <p className="text-xl font-bold text-gray-800 text-center line-clamp-2">
                  {meme.name}
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
