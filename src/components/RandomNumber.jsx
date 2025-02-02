"use client";

import { useState } from "react";

export default function RandomNumber({ params }) {
  const [randomNumber, setRandomNumber] = useState(0);
  const generateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 3) + 1);
  };
  return (
    <div>
      <button className="border border-black" onClick={generateRandomNumber}>
        Generate Random Number
      </button>
      <p>Random Number: {randomNumber}</p>
    </div>
  );
}
