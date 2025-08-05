import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover"
import { usePopUp } from '@/context/PopUpContext'
import { type ReactNode } from 'react'
const CustomPopOver = ({children,className}:{children:ReactNode,className:string}) => {
    const {openPopOver ,isPopOverOpen} =usePopUp()
  return (
  <Popover open={isPopOverOpen} onOpenChange ={openPopOver}>
       <PopoverTrigger >
        {/* This can be any clickable element */}
        <button className="hidden" /> {/* dummy trigger if you control open manually */}
      </PopoverTrigger>
  <PopoverContent className={className}>{children}</PopoverContent>
</Popover>
  )
}

export default CustomPopOver