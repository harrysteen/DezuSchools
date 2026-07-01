import type { Metadata } from "next";
import { Bakbak_One, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const bakbakOne = Bakbak_One({
  variable: "--font-bakbak-one",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Studio DEZU | Build Future Creators",
  description: "DEZU isn't a school — it's a design studio for the kids who will design what comes next. Taught by practicing professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bakbakOne.variable} ${inter.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
