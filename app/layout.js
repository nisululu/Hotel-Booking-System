import Logo from "./_components/Logo";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
