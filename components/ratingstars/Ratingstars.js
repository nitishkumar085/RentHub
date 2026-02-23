
'use client'

import Image from "next/image";


import { useState } from "react";

import style from './ratingstars.module.css'

export default function Ratingstars() {

  const [ratings,setRatings] = useState()

  return (
    <div className={style.star_box}>


    </div>
  );
}
