import Image from "next/image";
import Link from "next/link";
import { db } from "@/utils/dbConnection";
import NavBar from "@/components/NavBar";
import HandleSaveToPosted from "@/components/SaveToPosted";

export default async function ImagePage({ params }) {
  const { id } = await params;
  const images = await db.query(`SELECT * FROM images WHERE id = $1`, [id]);
  const wrangledImages = images.rows;

  // async function handleSaveAsPosted(formData) {
  //   "use server";
  //   const image_id = formData.get("image_id");
  //   const image = formData.get("image");
  //   const location = formData.get("location");
  //   const date = formData.get("date");

  //   await db.query(
  //     `INSERT INTO posted (image_id, image, location, date) VALUES ($1, $2, $3, $4)`,
  //     [image_id, image, location, date]
  //   );

  return (
    <>
      <NavBar />
      <div className="parent">
        <div className="child">
          {wrangledImages.map((image) => (
            <div key={image.id}>
              <Image
                className="border border-black p-2.5 hover:scale-110"
                src={image.image}
                alt={`Image ${image.id}`}
                width={400}
                height={200}
              />
              <p>{image.location}</p>
              <p>{image.date}</p>
              <HandleSaveToPosted />
              {/* <form action={handleSaveAsPosted}>
              <label htmlFor="image_id"></label>
              <input
                type="hidden"
                name="image_id"
                id="image_id"
                defaultValue={image.id}
              />
              <label htmlFor="image"></label>

              <input
                type="hidden"
                name="image"
                id="image"
                defaultValue={image.image}
              />
              <label htmlFor="location"></label>

              <input
                type="hidden"
                name="location"
                id="location"
                defaultValue={image.location}
              />
              <label htmlFor="date"></label>

              <input
                type="hidden"
                name="date"
                id="date"
                defaultValue={image.date}
              />
              <button className="border border-red">Save to posted</button>
            </form> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

{
  /* <form
          action={handleSubmitPost}
          className="flex flex-col items-center p-4 justify-evenly h-2/5"
        ></form> */
}

{
  /* <label htmlFor="user_profile_clerk_id"></label>
<input
  type="hidden"
  name="users_profile_clerk_id"
  id="users_profile_clerk_id"
  defaultValue={userId}
/>
<button className="border p-2 m-4" type="submit">
  POST
</button> */
}
