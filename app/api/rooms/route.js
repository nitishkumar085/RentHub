import { NextResponse } from "next/server";


export async function GET(){

    const data = [{roomNo:'room 1', roomStatus:'vacant',rating:'4'},
      {roomNo:'room 1', roomStatus:'vacant',rating:'4'},
      {roomNo:'room 1', roomStatus:'vacant',rating:'4'},
      {roomNo:'room 1', roomStatus:'vacant',rating:'4'},
      {roomNo:'room 1', roomStatus:'vacant',rating:'4'},
      {roomNo:'room 1', roomStatus:'vacant',rating:'4'},
    ]

    return NextResponse.json({message:'sucess',data:data,length:data.length})

}