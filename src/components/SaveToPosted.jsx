"use client";

export default function SaveToPosted({
  image_id,
  source,
  location,
  date,
  orientation,
  film_type,
  subject,
}) {
  const handleSaveToPosted = async () => {
    await db.query(
      `INSERT INTO posted (image_id, source, location, date, orientation, film_type, subject) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [image_id, source, location, date, orientation, film_type, subject]
    );
    router.push(`/main/${posted}`);

    return (
      <>
        <div>
          <button
            // onClick={handleSaveToPosted}
            className="border border-blue-500 px-4 py-2"
          >
            Save this image as posted
          </button>
        </div>
      </>
    );
  };
}
