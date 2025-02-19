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
      {/* <p>Random Number: {number}</p> */}
    </div>
  );
}

// export default function RandomNumber() {
//   const [randomNumber, setRandomNumber] = useState(0);
//   const generateRandomNumber = () => {
//     setRandomNumber(Math.floor(Math.random() * 3) + 1);
//   };
//   return (
// <div>
//   <button className="border border-black" onClick={generateRandomNumber}>
//     Generate Random Number
//   </button>
//   <p>Random Number: {randomNumber}</p>
// </div>
//   );
// }

// export function randomNumber() {
//   return Math.floor(Math.random() * 3) + 1;
// }

// export default function RandomNumber({ randomNumber }) {
//   return (
//     <div>
//       <button className="border border-black" onClick={randomNumber}>
//         Generate Random Number
//       </button>
//       <p>Random Number: {randomNumber}</p>
//     </div>
//   );
// }
