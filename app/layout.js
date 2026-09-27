import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import { AuthenticateUser } from "@/middlewares/authContext";


export const metadata = {
  title: "Rent Buddy",
  description: 'Streamline your property management. track collected rent, track expenses, manage leases, and screen tenants effortlessly with our secure software.',
  keywords: ['rent management', 'landlord software', 'tenant tracking', ' renting property management app'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
         <AuthenticateUser>
        <NavBar/>
        
        {children}
        
        <Footer/>
      
       </AuthenticateUser>
      </body>
    </html>
  );
}
