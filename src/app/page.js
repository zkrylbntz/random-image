import Link from "next/link";

export default function StartPage() {
  return (
    <>
      <h1>Hello there</h1>
      <Link href={`/main`}>Click to get started</Link>
    </>
  );
}
