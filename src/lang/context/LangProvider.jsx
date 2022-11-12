import { useState } from "react"

import { LangContext } from "./LangContext";


export const LangProvider = ({ children }) => {

    const [language, setLanguage] = useState("english");

    const onEnglish = () => {
        setLanguage("english");
    };

    const onSpanish = () => {
        setLanguage("spanish");
    };

    
  return (
    <LangContext.Provider value={{
      language,
      onEnglish,
      onSpanish,
    }}>

      { children }
      
    </LangContext.Provider>
  )
}
