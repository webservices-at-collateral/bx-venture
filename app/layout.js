import localFont from "next/font/local";
import "./globals.css";

const produkt = localFont({
  src: "./fonts/produkt-regular.woff2",
  variable: "--font-produkt",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const metadata = {
  title: "Bx Venture Capital — Forward Thinking Investments",
  description:
    "A venture capital platform that backs early- and growth-stage companies in proptech, fintech, intellectual property, and operating businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={produkt.variable}>{children}</body>
    </html>
  );
}
