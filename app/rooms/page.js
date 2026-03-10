
// import Image from "next/image";


import RoomInfo from '@/components/roomInfo/RoomInfo';
import style from './rooms.module.css'

import { GoArrowDown } from "react-icons/go";

export default function Rooms() {

    let rooms = [1,2,3,4,5,6,7,8,9,10]

    const roomsList = rooms.map((room,id)=>{
        return (
         <RoomInfo key={id+'roominfo'}/>
        )
    })



  return (
     <section className={style.rooms_section}>

    <center> {roomsList}  </center>
     </section>
  );
}
