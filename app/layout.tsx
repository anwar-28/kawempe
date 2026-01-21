import type { Metadata } from "next";
import {
  Bebas_Neue,
  Inter,
  Lexend,
  Montserrat,
  Outfit,
  Poppins,
  TASA_Explorer,
  Zalando_Sans_Expanded,
} from "next/font/google";
import "./globals.css";

const montserratFont = Poppins({
  weight: ["700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kawempe Muslim Secondary School | Go Higher",
  description:
    "Kawempe Muslim Secondary School is a prestigious educational institution committed to academic excellence and holistic development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserratFont.className}>{children}</body>
    </html>
  );
}
