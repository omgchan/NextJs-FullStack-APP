import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";
import { ThemeProvider } from "../Context/ThemeContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Italia ",
  description: "ABC INC. is a leading technology company specializing in innovative solutions for businesses worldwide. With a commitment to excellence and a passion for innovation, we strive to empower our clients with cutting-edge technology and exceptional service.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
       >
        <ThemeProvider>

        <div className='container'>
        <NavBar />
        {children}
        <Footer />
        </div>
        </ThemeProvider>


      </body>
    </html>
  );
}
