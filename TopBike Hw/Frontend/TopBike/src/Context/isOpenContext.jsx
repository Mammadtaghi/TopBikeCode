import { createContext, useContext, useState } from "react";

const isOpenContext = createContext()

export const IsOpenProvider =({children})=>{

    const [isOpen, setIsOpen] = useState(false)

    const data = {
        isOpen,
        setIsOpen,
    }

    return(
        <isOpenContext.Provider value={data}>
            {children}
        </isOpenContext.Provider>
    )

}

export const useIsOpen=()=>useContext(isOpenContext)
