import React,{createContext, useContext, useState} from "react"

const AuthContext = createContext();


export const AuthProvider =({ children })=>{
    const[isLoggedIn, setIsLoggedIn]= useState(false);

    const login =()=> setIsLoggedIn(true);
    const logout=()=>setIsLoggedIn(false);


    return(
        <AuthContext.Provider value={{isLoggedIn, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth=()=>{
    const ctx = useContext(AuthContext);
    if(!ctx) throw new Error("useAuth must be inside AuthProvider");
    return ctx;
}