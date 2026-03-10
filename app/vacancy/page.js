
import Image from "next/image";

import style from './vacancy.module.css'

import Ratingstars from "@/components/ratingstars/Ratingstars";

export default function Vacancy() {

    const vacant_rooms = [{roomNo:'room 1', roomStatus:'vacant',rating:'4'},
      {roomNo:'room 1', roomStatus:'vacant',rating:'4'},
      {roomNo:'room 1', roomStatus:'vacant',rating:'4'},
      {roomNo:'room 1', roomStatus:'vacant',rating:'4'},
      {roomNo:'room 1', roomStatus:'vacant',rating:'4'},
      {roomNo:'room 1', roomStatus:'vacant',rating:'4'},
    ]

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
