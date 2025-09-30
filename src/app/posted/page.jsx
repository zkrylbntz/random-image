import NavBar from "@/components/NavBar";
import { db } from "@/utils/dbConnection";
import Image from "next/image";

export default async function Posted(params) {
  const { id } = await params;
  const images = await db.query(`SELECT * FROM posted`);
  const wrangledImages = images.rows;

  return (
    <div>
      <NavBar />

      <h1>Posted</h1>
      <div className="parent">
        <div className="child">
          {wrangledImages.map((image) => (
            <div key={image.id}>
              <Image
                className="border border-black p-2.5 hover:scale-110"
                src={image.src}
                alt={`Image ${image.id}`}
                width={400}
                height={200}
              />
              <p>{image.location}</p>
              <p>{image.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
