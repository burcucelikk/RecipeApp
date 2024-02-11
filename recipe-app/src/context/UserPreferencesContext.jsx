import { createContext, useState } from "react";


export const UserPreferencesContext = createContext()

const UserPreferencesProvider =({children})=>{
    const [theme, setTheme] =useState('light')
    const toggleTheme =()=> setTheme(theme==='light' ? 'dark' :'light')
    const [language, setLanguage] =useState('English')
    const changeLanguage=(newLanguage)=>setLanguage(newLanguage)
    return(
        <UserPreferencesContext.Provider value={{theme,toggleTheme,language,changeLanguage}}>
            {children}
        </UserPreferencesContext.Provider>
    )
}
export default UserPreferencesProvider;
