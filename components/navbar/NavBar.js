
// 

import Link from 'next/link';

import style from './navbar.module.css'

export default function NavBar() {
  const links = [{href:'/dashboard',text:"Dashboard"},{href:'/rooms',text:"Rooms"},{href:'/vacancy',text:"Vacancy"},{href:'/property',text:"Property"}]

  const menu = links.map((links,id)=>{
    return(
      <Link href={links.href} key={id+'a'}>
        <h5>
         {links.text}
        </h5>
      </Link>
    )
  })
  return (
    <div className={style.navbar_container}> 
     <Link href='/'> 
     <h2 className={style.navbar_Title}>HOME Rent</h2>
     </Link>
     <div className={style.navbarMenu}>
     {menu}
     </div>
     <Link href='/signup'>
     <button className={style.addRenterButton}>+ &nbsp;&nbsp;&nbsp;Add renter</button>
     </Link>
    </div>
  );
}
