"use client";
import Link from "next/link";
import React, { useState } from "react";

function DetailUI({ response }: any) {
  const { url, id, name } = response;

  const [inp1, setInp1] = useState("");
  const [inp2, setInp2] = useState("");
  const [generatedMeme, setGeneratedMeme] = useState<any>(null);

  const onSubmit = async () => {
    if (!response || !inp1 || !inp2) {
      alert("Please enter all the fields");
    }
    const userName = "SyedOwaisRaza";
    const userPassword = "imgflipowais123";
    const mainUrl = `https://api.imgflip.com/caption_image?username=${userName}&password=${userPassword}&template_id=${id}&text0=${inp1}&text1=${inp2}`;

    try {
      const res = await fetch(mainUrl, {
        method: "POST",
      });
      const newData = await res.json();

      setGeneratedMeme(newData.data);
    } catch (e: any) {
      alert(e.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 py-10 flex flex-col items-center">
      <h1 className="text-center text-5xl font-extrabold text-white mb-12 shadow-md">
        {name}
      </h1>

      {!generatedMeme ? (
        <>
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full transform transition duration-300 ease-in-out">
            <img
              src={url}
              alt={name}
              className="w-full h-72 object-contain rounded-lg mb-4"
            />
          </div>
          <div className="mt-10 w-full max-w-md space-y-6">
            <input
              type="text"
              onChange={(e) => setInp1(e.target.value)}
              placeholder="Text 1"
              className="w-full px-4 py-2 bg-gray-100 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-500 transition duration-300"
            />
            <input
              type="text"
              onChange={(e) => setInp2(e.target.value)}
              placeholder="Text 2"
              className="w-full px-4 py-2 bg-gray-100 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-500 transition duration-300"
            />
            <button
              className="w-full bg-gradient-to-r from-red-500 to-yellow-500 text-white font-semibold py-3 rounded-lg hover:bg-gradient-to-l hover:from-red-600 hover:to-yellow-600"
              onClick={onSubmit}
            >
              Generate Meme
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full transform transition duration-300 ease-in-out">
            <img
              src={generatedMeme.url}
              alt="Generated Meme"
              className="w-full h-72 object-contain rounded-lg mb-4"
            />
          </div>
          <button
            onClick={() => setGeneratedMeme(null)}
            className="w-full mt-5 max-w-md bg-gradient-to-r from-red-500 to-yellow-500 text-white font-semibold py-3 rounded-lg hover:bg-gradient-to-l hover:from-red-600 hover:to-yellow-600"
          >
            Back
          </button>
        </>
      )}
    </div>
  );
}

export default DetailUI;
