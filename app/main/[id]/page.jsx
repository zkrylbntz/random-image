import Image from "next/image";
import { db } from "../../../utils/dbConnection";
import NavBar from "../../../components/NavBar";
import Link from "next/link";
import RandomNumber from "../../../components/RandomNumber";
import { redirect } from "next/navigation";

export default async function ImagePage({ params }) {
  const { id } = await params;

  // const images = await db.query(`SELECT * FROM image WHERE id = $1 except FROM posted`, [id]);
  // const images = await db.query(
  //   `SELECT * from image i WHERE i.id = $1 AND NOT EXISTS (SELECT 1 FROM posted p WHERE p.image_id = i.id)) OR (i.id <> $1 AND NOT EXISTS ( SELECT 1 FROM posted p WHERE p.image_id = i.id))`,
  //   [id]
  // );

  // const images = await db.query(
  //   `SELECT * FROM image i WHERE NOT EXISTS (SELECT 1 FROM posted p WHERE p.image_id = i.id) OR (i.id <> $1 AND NOT EXISTS (SELECT 1 FROM posted p WHERE p.image_id = i.id)) ORDER BY (i.id = $1) DESC LIMIT 1`,
  //   [id]
  // );

  const images = await db.query(
    `SELECT *
   FROM image i
   WHERE NOT EXISTS (
       SELECT 1 FROM posted p WHERE p.image_id = i.id
   )
   AND (i.id = $1 OR i.id <> $1)
   ORDER BY (i.id = $1) DESC
   LIMIT 1`,
    [id]
  );

  const wrangledImages = images.rows;

  async function handleSaveToPosted(formData) {
    "use server";

    const image_id = formData.get("image_id");
    const src = formData.get("src");
    const location = formData.get("location");
    const date = formData.get("date");
    const orientation = formData.get("orientation");
    const film_type = formData.get("film_type");
    const subject = formData.get("subject");

    await db.query(
      `INSERT INTO posted (image_id, src, location, date, orientation, film_type, subject) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [image_id, src, location, date, orientation, film_type, subject]
    );

    redirect(`/posted`);
  }

  return (
    <>
      <NavBar />
      <div className="parent">
        <div className="child">
          {wrangledImages.map((image) => (
            <div key={image.id}>
              <RandomNumber />
              {/* <Link href={`/main`}>Try again?</Link> */}
              <Image
                className="border border-black p-2.5 hover:scale-110"
                src={image.src}
                alt={`Image ${image.id}`}
                width={400}
                height={200}
              />
              <p>{image.location}</p>
              <p>{image.date}</p>
              {/* <p>{image.orientation}</p>
              <p>{image.film_type}</p>
              <p>{image.subject}</p> */}
              <form action={handleSaveToPosted}>
                <label htmlFor="image_id"></label>
                <input
                  type="hidden"
                  name="image_id"
                  id="image_id"
                  defaultValue={image.id}
                  required
                />
                <label htmlFor="src"></label>
                <input
                  type="hidden"
                  name="src"
                  id="src"
                  defaultValue={image.src}
                  required
                />
                <label htmlFor="location"></label>
                <input
                  type="hidden"
                  name="location"
                  id="location"
                  defaultValue={image.location}
                  required
                />
                <label htmlFor="date"></label>
                <input
                  type="hidden"
                  name="date"
                  id="date"
                  defaultValue={image.date}
                  required
                />
                <label htmlFor="orientation"></label>
                <input
                  type="hidden"
                  name="orientation"
                  id="orientation"
                  defaultValue={image.orientation}
                  required
                />
                <label htmlFor="film_type"></label>
                <input
                  type="hidden"
                  name="film_type"
                  id="film_type"
                  defaultValue={image.film_type}
                  required
                />
                <label htmlFor="subject"></label>
                <input
                  type="hidden"
                  name="subject"
                  id="subject"
                  defaultValue={image.subject}
                  required
                />
                <button className="border border-red-500" type="submit">
                  Save to posted
                </button>
              </form>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
