import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import Cube from "../components/cube";
import StairTransition from "@/components/StairTransition";
import { icons } from "lucide-react";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["100","200", "300","400","500","600", "700","800"], variable: '--font-jetbrainsMono' });

export const metadata = {
  title: "HashCon",
  description: "Portfolio",
};

//Icons: https://stackoverflow.com/questions/75674866/adding-favicon-to-nextjs-app-router-application
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <Cube />
        <StairTransition />
        <PageTransition>
        {children}
        </PageTransition>
        </body>
    </html>
  );
}
