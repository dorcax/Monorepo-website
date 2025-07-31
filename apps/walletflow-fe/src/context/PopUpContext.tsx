import React, { Children, createContext, useContext, useState, type ReactNode } from 'react'

type PopUpContextType ={
    openDrawer: (content:ReactNode)=>void,
    isDrawerOpen :boolean ,
    closeDrawer:()=>void
}
const PopUpContext =createContext<PopUpContextType | undefined>(undefined)

export const usePopUp =()=>{
    const context =useContext(PopUpContext)
    if(!context){
        throw Error ("usePopUp must be within a  PopUpProvider ")
        
    }
    return context
}
const PopUpProvider = ({children}:{children:React.ReactNode}) => {
    const [isDrawerOpen,setDrawerOpen] =useState(false)
    const [popUpContext,setPopUpContext] =useState<ReactNode>(null)
   
    const openDrawer=(context:ReactNode)=>{

        setDrawerOpen(true)
        setPopUpContext(context)

    }
    const closeDrawer=()=>{
        setDrawerOpen(false)
        setPopUpContext(null)
    }
  return (
 
    <PopUpContext.Provider value={{isDrawerOpen,openDrawer,closeDrawer}}>
      {children}
      {popUpContext}
      {/* make it open globally */}
    </PopUpContext.Provider>
  )
}

export default PopUpProvider