import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${raleway.variable}`}>
      <body className="font-cmu">{children}</body>
    </html>
  );
}
