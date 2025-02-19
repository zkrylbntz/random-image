import Image from "next/image";
import Link from "next/link";
import { db } from "@/utils/dbConnection";

export default async function ImagePage({ params }) {
  const { id } = params;
  const images = await db.query(`SELECT * FROM images WHERE id = $1`, [id]);
  const wrangledImages = images.rows;

  return (
    <>
      {wrangledImages.map((image) => (
        <div key={image.id}>
          <Image
            className="border border-black p-2.5 hover:scale-110"
            src={image.image}
            alt={`Image ${image.id}`}
            width={400}
            height={200}
          />
          {/* <Link href={`main`}>Back</Link> */}
        </div>
      ))}
    </>
  );
}
