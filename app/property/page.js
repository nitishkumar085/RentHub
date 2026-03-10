
import Image from "next/image";

import style from './property.module.css'
import Ratingstars from "@/components/ratingstars/Ratingstars";

export default function Property() {

  const propertiesList = [{name:'rekha apartment',address:'linemark gali',phone:'+91-4578495358',careTakerName:"",ratings:'5',vacant:2,occupied:4},
   {name:'rekha apartment',address:'linemark gali',phone:'+91-4578495358',careTakerName:"",ratings:'4',vacant:2,occupied:4},
   {name:'rekha apartment',address:'linemark gali',phone:'+91-4578495358',careTakerName:"",ratings:'3',vacant:2,occupied:4},
   {name:'rekha apartment',address:'linemark gali',phone:'+91-4578495358',careTakerName:"",ratings:'4',vacant:2,occupied:4},
   {name:'rekha apartment',address:'linemark gali',phone:'+91-4578495358',careTakerName:"",ratings:'2',vacant:2,occupied:4},
   {name:'rekha apartment',address:'linemark gali',phone:'+91-4578495358',careTakerName:"",ratings:'4',vacant:2,occupied:4},
   {name:'rekha apartment',address:'linemark gali',phone:'+91-4578495358',careTakerName:"",ratings:'1',vacant:2,occupied:4},
   {name:'rekha apartment',address:'linemark gali',phone:'+91-4578495358',careTakerName:"",ratings:'4',vacant:2,occupied:4},
   {name:'rekha apartment',address:'linemark gali',phone:'+91-4578495358',careTakerName:"",ratings:'5',vacant:2,occupied:4},
   {name:'rekha apartment',address:'linemark gali',phone:'+91-4578495358',careTakerName:"",ratings:'4',vacant:2,occupied:4},
   {name:'rekha apartment',address:'linemark gali',phone:'+91-4578495358',careTakerName:"",ratings:'4',vacant:2,occupied:4},
  ]

  const properties = propertiesList.map((properties,id)=>{
    return(
      <div className={style.property_card} key={id+'room'}>
        <h2><center>{properties.name}</center></h2>
       <center> <p>{properties.address}</p></center>
      <center> <p>{properties.phone}</p></center>
        <div className={style.ratings_star}><Ratingstars  rating={properties.ratings}/>/ 5</div>
        <div className={style.room_status}>
          <p>Vacant:{properties?.vacant}</p>
          <p>Occupied:{properties?.occupied}</p>
        </div>
        <center><button>Dashboard</button></center>
      </div>
    )
  })

  return (
    <div className={style.property_section}>
     {properties}
    </div>
  );
}
