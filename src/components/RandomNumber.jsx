"use client";

import { useState } from "react";

export default function RandomNumber() {
  const [randomNumber, setRandomNumber] = useState(0);
  const generateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 1000));

    async function inputRandomNumber(formData) {
      const random_number = formData.get("random_number");

      await db.query(`INSERT INTO images (random_number) VALUES ($1)`, [
        random_number,
      ]);
    }
    return (
      <div>
        <form action={inputRandomNumber}>
          <input
            type="hidden"
            name="random_number"
            id="random_number"
            defaultValue={randomNumber}
          />
          <button onClick={generateRandomNumber} type="submit">
            Generate Random Number
          </button>
          <p>Random Number: {randomNumber}</p>
        </form>
      </div>
    );
  };
}
