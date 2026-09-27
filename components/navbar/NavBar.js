"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import style from './navbar.module.css'
import { useContext, useState } from 'react';
 import { UserContext } from '@/middlewares/authContext';
export default function NavBar() {
  const links = [{href:'/dashboard',text:"Dashboard"},{href:'/rooms',text:"Rooms"},{href:'/vacancy',text:"Vacancy"},{href:'/property',text:"Property"}]
  const {islogin,setIsLogin} = useContext(UserContext)
    const router = useRouter();
  // const [isLogin, setIsLogin] = useState(false)
  const menu = links.map((links,id)=>{
    return(
      <Link href={links.href} key={id+'a'}>
        <h5>
         {links.text}
        </h5>
      </Link>
    )
  })

   const handleLogout = async () => {
    const response = await fetch("/api/logout", {
      method: "POST",
    });

    const data = await response.json();

    alert(data.message);
    setIsLogin(false)
    router.push("/login");
    router.refresh(); // Refresh server components
  };
  // <Image
  //     src="/images/appLogo.png"
  //     alt="Room"
  //     width={50}
  //     height={50}
  //   />
  console.log("navbar",islogin)
  return (
    <div className={style.navbar_container}> 
     <Link href='/'> 
     <h2 className={style.navbar_Title}> Rent Buddy</h2>
     </Link>
     <div className={islogin? style.navbarMenu:style.navbarMenuToggle}>
     {menu}
     </div>
     <div>
      {islogin? <button className={style.loginButton} onClick={handleLogout}>Logout</button>:<Link href='/login'>
     <button className={style.loginButton}>Login</button>
     </Link>}
     
     &nbsp;&nbsp;&nbsp;
     <Link href='/signup'>
     <button className={islogin? style.addRenterButton:style.navbarMenuToggle}>+ &nbsp;&nbsp;&nbsp;Add renter</button>
     </Link>
     </div>

    </div>
  );
}
