"use client";

import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RandomNumberGenerator({ min = 1, max = 100 }) {
  const [randomNumber, setRandomNumber] = (useState < number) | (null > null);

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(number);
  };

  return (
    <>
      {/* // <Card className="w-full max-w-md mx-auto">
    //   <CardHeader>
    //     <CardTitle>Random Number Generator</CardTitle>
    //   </CardHeader>
    //   <CardContent className="flex flex-col items-center space-y-4"> */}
      //{" "}
      <div
        className="text-4xl font-bold h-16 flex items-center justify-center"
        aria-live="polite"
      >
        {randomNumber !== null ? randomNumber : "Click to generate"}
      </div>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      <p className="text-sm text-muted-foreground">
        Generates a number between {min} and {max}
      </p>
      {/* //   </CardContent> */}
      {/* // </Card> */}
    </>
  );
}
