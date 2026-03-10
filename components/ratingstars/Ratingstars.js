
'use client'

import Image from "next/image";


import { useState } from "react";

import {FaStar}  from 'react-icons/fa'  

import style from './ratingstars.module.css'

export default function Ratingstars({rating}) {


  const ratings = []
  
  if(rating<=5)
  {
     for(let i = 1;i<=5;i++)
    {
      if(i<=5 && i<=rating)
      {
         ratings.push(<FaStar color='green' size={15} key={i}/>)
      }
      else
      {
         ratings.push(<FaStar color='white' size={15} key={i}/>)
      }
       
    }
  }
  else{
    return (
      <p>no rating available</p>
    )
  }

     
  return (
   <>{ratings}</>
  );
}
