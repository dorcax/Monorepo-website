import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { usePopUp } from "@/context/PopUpContext"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"
type dialogType={
    title?:string,
    children:ReactNode
    className:string
}
const CustomDialog = ({title,children,className}:dialogType) => {
    const{isDialogOpen,openDialog} =usePopUp()
  return (
    <Dialog open={isDialogOpen} onOpenChange={openDialog}>
  <DialogContent className={cn("overflow-y-auto ",className)}>
    <DialogHeader>
      <DialogTitle>{title}</DialogTitle>
      <DialogDescription>
       {children}
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
  )
}

export default CustomDialog