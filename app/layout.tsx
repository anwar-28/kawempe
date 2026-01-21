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
import FadeInSection from "./Fade";
import NavBar from "./components/NavBar";

const montserratFont = Poppins({
  weight: ["500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kawempe Muslim Secondary School | Go Higher",
  description:
    "Kawempe Muslim Secondary School is a prestigious educational institution committed to academic excellence and holistic development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserratFont.className}`}>
        <NavBar />
        <main>
          <div className="relative bg-[url(/bg2.jpg)] bg-cover bg-center bg-fixed">
            <FadeInSection delay={0}>
              {children} {/* or first Hero section */}
            </FadeInSection>
          </div>
        </main>
      </body>
    </html>
  );
}
