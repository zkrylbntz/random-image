import { db } from "@/utils/dbConnection";

export default async function handleSaveToPosted({
  image_id,
  image,
  location,
  date,
}) {
  //   const { id } = await params;
  //   const { image_id } = await params;
  //   const { image } = await params;
  //   const { location } = await params;
  //   const { date } = await params;

  await db.query(
    `INSERT INTO posted (image_id, image, location, date) VALUES ($1, $2, $3, $4)`,
    [image_id, image, location, date]
  );

  return (
    <>
      <div>
        <button onClick={handleSaveToPosted} className="border border-black">
          Save this image as posted
        </button>
      </div>
    </>
  );
}
