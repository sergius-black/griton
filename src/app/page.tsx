"use client";
import React, { useState } from "react";

// Define a type for the replacements object

export default function Home() {
  const [inputText, setInputText] = useState<string>("");
  const [outputText, setOutputText] = useState<string>("");

  type ReplacementMap = {
    [key: string]: string;
  };

  const replacements: ReplacementMap = {
    A: "𝞐",
    B: "𝞑",
    C: "𝘾",
    D: "𝘿",
    E: "𝙀",
    F: "𝙁",
    G: "𝙂",
    H: "𝞖",
    I: "𝙄",
    J: "𝙅",
    K: "𝞙",
    L: "𝙇",
    M: "𝙈",
    N: "𝞜",
    O: "𝞞",
    P: "𝞠",
    Q: "𝙌",
    R: "𝙍",
    S: "𝙎",
    T: "𝞣",
    U: "𝙐",
    V: "𝙑",
    W: "𝙒",
    X: "𝞦",
    Y: "𝞤",
    Z: "𝞕",
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const text = event.target.value;
    setInputText(text);

    const replacedText = text
      .split("")
      .map((char) => replacements[char.toUpperCase()] || char)
      .join("");
    setOutputText(replacedText);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(outputText);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="App min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex justify-center items-center">
      <div className="text-center">
        <div className="mb-4">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Que quieres decir..."
          />
        </div>
        <div className="text-white text-xl font-semibold">
          <span className="text-yellow-300">{outputText}</span>
        </div>
        <button
          onClick={copyToClipboard}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          GRITAAAAAR!
        </button>
      </div>
    </div>
  );
}
