"use client"

import { createContext, useState } from "react";

export const  UserContext =  createContext()

export function AuthenticateUser({children}){
    const [islogin,setIsLogin] = useState(false)

    return(
        <UserContext.Provider value={{islogin,setIsLogin}}>
        {children}
        </UserContext.Provider>
    )

}