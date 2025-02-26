import RandomNumber from "@/components/RandomNumber";

import NavBar from "@/components/NavBar";

export default async function Main({ params }) {
  return (
    <>
      <NavBar />
      <div className="parent">
        <div className="child">
          <h1>What image will it be today then?</h1>
          <RandomNumber />
          <h2>Care to filter?</h2>
        </div>
      </div>
    </>
  );
}
