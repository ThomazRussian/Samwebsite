import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import { BackGroundImg } from "./components/backGroundImage";




const lato = Lato({
  subsets: ['latin'],
  weight: ['400','700']
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
          <Header />
          <BackGroundImg />
          {children}
      </body>
    </html>
  );
}
