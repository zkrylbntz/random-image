"use client";

export default function SaveToPosted({ image_id, image, location, date }) {
  const handleSaveToPosted = async () => {
    await db.query(
      `INSERT INTO posted (image_id, image, location, date) VALUES ($1, $2, $3, $4)`,
      [image_id, image, location, date]
    );

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
