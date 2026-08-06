import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rent Buddy",
  description: 'Streamline your property management. track collected rent, track expenses, manage leases, and screen tenants effortlessly with our secure software.',
  keywords: ['rent management', 'landlord software', 'tenant tracking', ' renting property management app'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar/>
        <main>
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
