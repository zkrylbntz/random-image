import RandomNumber from "@/components/RandomNumber";

import Image from "next/image";
import { db } from "@/utils/dbConnection";

export default async function Main({ params }) {
  // const { randomNumber } = params;
  // const images = await db.query(`SELECT * FROM images WHERE id = $1`, [
  //   randomNumber,
  // ]);
  // const wrangledImages = images.rows;

  return (
    <>
      {/* {wrangledImages.map((image) => (
        <div key={image.id}> */}
      <div className="parent">
        <div className="child">
          <h1>What image will it be today then?</h1>
          {/* <Image
                className="border border-black p-2.5 hover:scale-110"
                src={image.image}
                alt={`Image ${image.id}`}
                width={400}
                height={200}
              /> */}
          <RandomNumber />
          <h1>Previously posted photographs</h1>
        </div>
      </div>
      {/* </div>
      ))} */}
    </>
  );
}
