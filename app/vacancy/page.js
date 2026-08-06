'use client'
import Image from "next/image";

import style from './vacancy.module.css'

import Ratingstars from "@/components/ratingstars/Ratingstars";

import {useState,useEffect} from 'react'

export default function Vacancy() {

  const [vacant_rooms,setVacant_rooms] = useState([])
  const[dataLoading,setDataLoading] =useState(true)

  const fetchdata = async ()=>{
    try{
       const res = await fetch('/api/rooms')
       const data = await res.json()
       setVacant_rooms(data.data)
    }
    catch(err)
    {
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchdata();
  },[])

 
    const vacantRoomList = vacant_rooms.map((rooms,id)=>{
          return(
            <div className={style.room_card} key={id+"room"}>
              <h3>{rooms.roomNo}</h3>
              <div className={style.room_ratings_star}><Ratingstars  rating={rooms.rating}/>/ 5</div>
        <center><button>Book</button></center>
            </div>
          )

    })

  return (
    <section className={style.vacancy_section}>
     {vacantRoomList}
    </section>
  );
}
