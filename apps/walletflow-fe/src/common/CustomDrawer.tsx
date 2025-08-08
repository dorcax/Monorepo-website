import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { usePopUp } from "@/context/PopUpContext"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import type { ReactNode } from "react"

type customDrawerProps = {
    title?: string
    children: ReactNode
    subtext?: string,
    className: string
    
}

const CustomDrawer = ({ className, children, title, subtext }: customDrawerProps) => {
    const{isDrawerOpen,openDrawer} =usePopUp()
    return (
        <div>
            
            <Sheet open={isDrawerOpen} onOpenChange={openDrawer} >
                <SheetContent className={cn("",className)} closeSheet={false} >
                    {/* <SheetClose asChild className="absolute top-0 -left-4" ><X/></SheetClose> */}
                    <SheetHeader>
                        <SheetTitle>{title}</SheetTitle>
                        {subtext && <SheetDescription>
                            {subtext}
                        </SheetDescription>}
                       
                    </SheetHeader>
                     {children}
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default CustomDrawer