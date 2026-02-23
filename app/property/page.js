
import Image from "next/image";

import style from './property.module.css'
import Ratingstars from "@/components/ratingstars/Ratingstars";

export default function Property() {

  const propertiesList = [{name:'rekha apartment',address:'linemark gali',phone:'+91-4578495358',careTakerName:"",ratings:'4'},
   {name:'rekha apartment',address:'linemark gali',phone:'+91-4578495358',careTakerName:"",ratings:'4'},
   {name:'rekha apartment',address:'linemark gali',phone:'+91-4578495358',careTakerName:"",ratings:'4'},
   {name:'rekha apartment',address:'linemark gali',phone:'+91-4578495358',careTakerName:"",ratings:'4'},
   {name:'rekha apartment',address:'linemark gali',phone:'+91-4578495358',careTakerName:"",ratings:'4'},
   {name:'rekha apartment',address:'linemark gali',phone:'+91-4578495358',careTakerName:"",ratings:'4'},
   {name:'rekha apartment',address:'linemark gali',phone:'+91-4578495358',careTakerName:"",ratings:'4'},
   {name:'rekha apartment',address:'linemark gali',phone:'+91-4578495358',careTakerName:"",ratings:'4'},
  ]

  const properties = propertiesList.map((properties,id)=>{
    return(
      <div className={style.property_card} key={id+'room'}>
        <h2><center>{properties.name}</center></h2>
        <p>{properties.address}</p>
        <p>{properties.phone}</p>
        <div className={style.ratings_star}><Ratingstars />/ 5</div>
      </div>
    )
  })

  return (
    <div className={style.property_section}>
     {properties}
    </div>
  );
}
