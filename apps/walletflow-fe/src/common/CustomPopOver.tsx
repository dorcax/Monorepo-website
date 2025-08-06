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
      
  <PopoverContent className={className}>{children}</PopoverContent>
</Popover>
  )
}

export default CustomPopOver