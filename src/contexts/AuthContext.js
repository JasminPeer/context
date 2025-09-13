import React, { createContext, useContext, useState } from 'react'


    // createcontext()-create a 'box' to hold the data
    // Authcontext is use defined vaiable that stores in box
    const AuthContext=createContext();
    // AuthProvider person who fills the box and let othehrs to use
    export function AuthProvider({children})
    {
      const[user,setUser]=useState(null); //when nobody logged in  null
    //   login(name) put user's name inside the box
      const login=(name)=>setUser(name);
// logout clears the user's name for the box
            const logout=()=>setUser(null);
    
  return (
    <AuthContext.Provider value={{user,login,logout}}>
        {children}

    </AuthContext.Provider>
  );
}

export function useAuth(){
    return useContext(AuthContext);
}
