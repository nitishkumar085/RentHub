
'use client'

import Image from "next/image";


import { useState } from "react";

import { GoArrowDown } from "react-icons/go";

import style from './RoomInfo.module.css'

export default function RoomInfo({rating}) {

  const [_isexpandInfo,setIsExpandInfo]  =useState(false)
     
  return (
    <div>
             <div className={style.rooms_container} >
              <div className={style.room_info}>
                <h3>Room no 5</h3>
                <p>status: occupied</p>
              </div>
              <button onClick={()=>{setIsExpandInfo(value=>!value)}}>
              <GoArrowDown color={'black'} size={30} />
              </button>
              
              </div>
              <div className={_isexpandInfo? style.room_fullInfo:style.hide_roomInfo}></div>
    </div>
  );
}
