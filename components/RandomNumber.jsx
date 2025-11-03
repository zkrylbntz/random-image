"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RandomNumber() {
  const router = useRouter();
  const [number, setNumber] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRandomNumber = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/available-images", { cache: "no-store" });
      const availableIds = await res.json();

      if (!availableIds || availableIds.length === 0) {
        alert("No unused images left!");
        setLoading(false);
        return;
      }

      // const randomIndex = Math.floor(Math.random() * availableIds.length);
      const randomId =
        availableIds[Math.floor(Math.random() * availableIds.length)];

      setNumber(randomId);
      router.push(`/main/${randomId}`);
    } catch (err) {
      console.error(err);
      alert("Failed to load available images");
    } finally {
      setLoading(false);
    }
  };

  //   const randomNumber = Math.floor(Math.random() * 5) + 1;
  //   setNumber(randomNumber);
  //   router.push(`/main/${randomNumber}`);
  // };

  return (
    <div>
      <button
        onClick={handleRandomNumber}
        disabled={loading}
        className="border border-black"
      >
        {loading ? "Loading ..." : "Generate Random Image"}
      </button>
    </div>
  );
}
