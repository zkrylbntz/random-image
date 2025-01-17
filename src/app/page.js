import RandomNumberGenerator from "@/components/RandomNumber";
import Image from "next/image";

export default async function randomHomePage(props) {
  async function inputRandomNumber(formData) {
    "use server";
    const random_number = formData.get("random_number");

    await db.query(`INSERT INTO images (random_number) VALUES ($1)`, [
      random_number,
    ]);
  }

  return (
    <div className="parent">
      <div className="child">
        <h1>What image will it be today then?</h1>
        <Image
          src="https://plus.unsplash.com/premium_photo-1736520566943-78675ec3f42e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="nice picture"
          width={400}
          height={200}
          className="border border-black p-2.5"
        />
        <RandomNumberGenerator></RandomNumberGenerator>

        {/* <button className="border border-black">Flick through photos</button>
        <button className="border border-black">Save this photo</button> */}

        <h1>Previously posted photographs</h1>
      </div>
    </div>
  );
}
