"use client"

import { createContext, useState,useEffect } from "react";

export const  UserContext =  createContext()

export function AuthenticateUser({children}){
    const [islogin,setIsLogin] = useState(false)
    const [loading, setLoading] = useState(true);
      useEffect(() => {
    async function checkUser() {
      const res = await fetch("/api/me", {
        credentials: "include",
      });

      if (res.ok) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }

      setLoading(false);
    }

    checkUser();
  }, []);
    

    return(
        <UserContext.Provider value={{islogin,setIsLogin}}>
        {children}
        </UserContext.Provider>
    )

}