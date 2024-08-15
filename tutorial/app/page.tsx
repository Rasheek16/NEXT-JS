import Link from "next/link";

function Homepage() {
  return (
    <div>
      <h1 className="text-7xl">Home Page</h1>
      <Link href="/about" className="text-blue-500 mt-8">
        About Page
      </Link>
    </div>
  );
}

export default Homepage;
