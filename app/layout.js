import Logo from "./_components/Logo";
import "./_styles/globals.css";

import { Lato } from "next/font/google";

const firacode = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata = {
  title: {
    template: "%s / Hotel Booking System",
    default: "Hotel Booking System",
  },
  description: "Luxurious cabin hotel located in Nepal.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${firacode.className} bg-primary-950 text-primary-100 min-h-screen`}
      >
        <header>
          <Logo />
        </header>
        <main>{children}</main>
        <footer>Copyright by Nischal Tandukar</footer>
      </body>
    </html>
  );
}
