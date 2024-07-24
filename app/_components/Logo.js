import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <img src="logo.png" alt="Hotel Management Website" />
      <span className="text-xl">Hotel Mangement Website</span>
    </Link>
  );
}

export default Logo;
