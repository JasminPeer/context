import React, { createContext, useContext, useState } from 'react'
const ThemeContext=createContext();
export  function ThemeProvider({children}) {
    const[theme,setTheme]=useState("light");
    // function to change the theme
    const toggleTheme=()=>{
        setTheme((prev) => (prev==="light")?"dark":"light")
    }
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}
export const useTheme =() =>{
    return useContext(ThemeContext);
}
