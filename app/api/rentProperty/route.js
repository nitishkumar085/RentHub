// import necessary objects

import {NextResponse}  from 'next/server'


// create get request using GET keyword

// create async function beacuse its a request and in nextjs we dont write like express js and module.exports is not working for it 
 export async function GET(){
    const data =  [{name:'rekha apartment',address:'linemark gali',phone:'+91-4578495358',careTakerName:"",ratings:'5',vacant:2,occupied:4},
   {name:'riba apartment',address:'linemark gali',phone:'+91-4578495358',careTakerName:"",ratings:'4',vacant:2,occupied:4},
   {name:'renu apartment',address:'linemark gali',phone:'+91-4578495358',careTakerName:"",ratings:'3',vacant:2,occupied:4},
   {name:'ridhima apartment',address:'linemark gali',phone:'+91-4578495358',careTakerName:"",ratings:'4',vacant:2,occupied:4},
   {name:'roshini apartment',address:'linemark gali',phone:'+91-4578495358',careTakerName:"",ratings:'2',vacant:2,occupied:4},
   {name:'raviana ekha apartment',address:'linemark gali',phone:'+91-4578495358',careTakerName:"",ratings:'4',vacant:2,occupied:4},
   {name:'rita ekha apartment',address:'linemark gali',phone:'+91-4578495358',careTakerName:"",ratings:'1',vacant:2,occupied:4},
   {name:'reshma ekha apartment',address:'linemark gali',phone:'+91-4578495358',careTakerName:"",ratings:'4',vacant:2,occupied:4},
   {name:'rina apartment',address:'linemark gali',phone:'+91-4578495358',careTakerName:"",ratings:'5',vacant:2,occupied:4},
   {name:'rimpa apartment',address:'linemark gali',phone:'+91-4578495358',careTakerName:"",ratings:'4',vacant:2,occupied:4},
   {name:'rupa apartment',address:'linemark gali',phone:'+91-4578495358',careTakerName:"",ratings:'4',vacant:2,occupied:4},
  ]


  return NextResponse.json({message:'sucess',data:data,length:data.length})
}


