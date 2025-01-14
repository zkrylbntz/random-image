import Image from "next/image";

export default function randomHomePage() {
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
        <button className="border border-black">Find image</button>
      </div>
    </div>
  );
}
