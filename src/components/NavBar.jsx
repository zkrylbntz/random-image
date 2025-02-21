import Link from "next/link";

export default function NavBar() {
  return (
    <>
      {/* <div className="parent">
        <div className="child"> */}
      <Link className="flex justify-center" href={`/main`}>
        Main
      </Link>
      {/* </div>
      </div> */}
    </>
  );
}
