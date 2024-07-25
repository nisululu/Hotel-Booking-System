import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <img src="logo.png" alt="Hotel Management Website" width="50" />
      <span className="text-xl font-semibold">Hotel Booking System</span>
    </Link>
  );
}

export default Logo;
