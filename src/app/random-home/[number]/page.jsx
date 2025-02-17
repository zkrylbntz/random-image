import RandomNumber from "@/components/RandomNumber";

import Image from "next/image";
import { db } from "@/utils/dbConnection";

export default async function randomHomePage({ params }) {
  const number = params.number;
  const images = await db.query(`SELECT * FROM images WHERE id = $1`, [number]);
  const wrangledImages = images.rows;

  return (
    <>
      {wrangledImages.map((image) => (
        <div key={image.id}>
          <div className="parent">
            <div className="child">
              <h1>What image will it be today then?</h1>
              <h1>Image for Random Number: {number}</h1>

              {/* <Image
          src="https://plus.unsplash.com/premium_photo-1736520566943-78675ec3f42e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="nice picture"
          width={400}
          height={200}
          className="border border-black p-2.5"
        /> */}
              <Image
                className="border border-black p-2.5 hover:scale-110"
                src={image.image}
                alt={`Image ${image.id}`}
                width={400}
                height={200}
              />
              <RandomNumber />
              {/* <div>
                <button className="border border-black" onClick={randomNumber}>
                  Generate Random Number
                </button>
                <p>Random Number: {randomNumber}</p>
              </div> */}

              {/* <button className="border border-black">Flick through photos</button>
        <button className="border border-black">Save this photo</button> */}

              <h1>Previously posted photographs</h1>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
