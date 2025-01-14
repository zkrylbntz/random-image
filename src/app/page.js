import RandomNumberGenerator from "@/components/RandomNumber";
import Image from "next/image";

export default async function randomHomePage() {
  // const saved = await db.query(`SELECT * FROM saved`)

  // let photograph = Math.floor(Math.random() * 100 + 1);
  // document.getElementById(("photograph".innerHTML = x));

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log("Random integer (5 to 15):", getRandomInt(1, 1000));

  return (
    <div className="parent">
      <div className="child">
        <h1>What image will it be today then?</h1>
        <Image
          src="https://plus.unsplash.com/premium_photo-1736520566943-78675ec3f42e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="nice picture"
          width={400}
          height={200}
          className="border border-black p-2.5"
        />
        <button className="border border-black">Flick through photos</button>
        <button className="border border-black">Save this photo</button>

        <h1>Previously posted photographs</h1>
        <RandomNumberGenerator></RandomNumberGenerator>

        {/* <p id="photograph"></p> */}
      </div>
    </div>
  );
}
