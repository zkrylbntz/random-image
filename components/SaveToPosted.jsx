"use client";

import { useRouter } from "next/navigation";

export default function SaveToPosted({
  image_id,
  source,
  location,
  date,
  orientation,
  film_type,
  subject,
}) {
  const router = useRouter();

  const handleSaveToPosted = async () => {
    await db.query(
      `INSERT INTO posted (image_id, source, location, date, orientation, film_type, subject) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [image_id, source, location, date, orientation, film_type, subject]
    );
    router.push(`/main/posted`);

    return (
      <>
        <div>
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
      </>
    );
  };
}
