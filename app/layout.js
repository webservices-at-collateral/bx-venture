import localFont from "next/font/local";
import "./globals.css";

const produkt = localFont({
  src: "../public/fonts/produkt-regular.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-produkt",
  display: "swap",
});

export const metadata = {
  title: "Bx Venture Capital — Forward Thinking, Equity",
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
