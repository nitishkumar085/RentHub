"use client"

import Link from 'next/link';
import Image from 'next/image';

import style from './navbar.module.css'
import { useState } from 'react';

export default function NavBar() {
  const links = [{href:'/dashboard',text:"Dashboard"},{href:'/rooms',text:"Rooms"},{href:'/vacancy',text:"Vacancy"},{href:'/property',text:"Property"}]
  const [isLogin, setIsLogin] = useState(false)
  const menu = links.map((links,id)=>{
    return(
      <Link href={links.href} key={id+'a'}>
        <h5>
         {links.text}
        </h5>
      </Link>
    )
  })
  // <Image
  //     src="/images/appLogo.png"
  //     alt="Room"
  //     width={50}
  //     height={50}
  //   />
  return (
    <div className={style.navbar_container}> 
     <Link href='/'> 
     <h2 className={style.navbar_Title}> Rent Buddy</h2>
     </Link>
     <div className={isLogin? style.navbarMenu:style.navbarMenuToggle}>
     {menu}
     </div>
     <div>
     <Link href='/login'>
     <button className={style.loginButton}>Login</button>
     </Link>
     &nbsp;&nbsp;&nbsp;
     <Link href='/signup'>
     <button className={isLogin? style.addRenterButton:style.navbarMenuToggle}>+ &nbsp;&nbsp;&nbsp;Add renter</button>
     </Link>
     </div>

    </div>
  );
}
