"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RandomNumber() {
  const router = useRouter();
  const [number, setNumber] = useState(null);

  const handleRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    setNumber(randomNumber);
    router.push(`/main/${randomNumber}`);
  };

  return (
    <div>
      <button onClick={handleRandomNumber} className="border border-black">
        Generate Random Image
      </button>
    </div>
  );
}
