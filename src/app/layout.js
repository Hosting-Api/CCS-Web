import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/Whatsapp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CCS",
  description: "Developed By CCS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {/* <link rel="icon" href="/logo.png" sizes="any" /> */}
      <Navbar />
        {children}

        <WhatsAppButton />
        <br />
      <Footer />
        </body>
    </html>
  );
}
