import React, { Children, createContext, useContext, useState, type ReactNode } from 'react'

type PopUpContextType ={
    openDrawer: (content:ReactNode)=>void
    openDialog:(conteent:ReactNode)=>void
    closeDialog:()=>void
    isDrawerOpen :boolean 
    isDialogOpen:boolean
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
    const [isDialogOpen,setIsDialogOpen] =useState(false)
    const [popUpContent,setPopUpContent] =useState<ReactNode>(null)
   
    const openDrawer=(context:ReactNode)=>{

        setDrawerOpen(true)
        setPopUpContent(context)

    }
    const closeDrawer=()=>{
        setDrawerOpen(false)
        setPopUpContent(null)
    }
    const openDialog=(content:ReactNode)=>{
      setIsDialogOpen(true)
      setPopUpContent(content)
    }
    const closeDialog=()=>{
      setIsDialogOpen(false)
      setPopUpContent(null)

    }
  return (
 
    <PopUpContext.Provider value={{isDrawerOpen,openDrawer,closeDrawer,isDialogOpen,openDialog,closeDialog}}>
      {children}
      {popUpContent}
      {/* make it open globally */}
    </PopUpContext.Provider>
  )
}

export default PopUpProvider