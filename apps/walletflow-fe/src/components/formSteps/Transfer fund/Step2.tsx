import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { usePopUp } from "@/context/PopUpContext"
import { Plus } from "lucide-react"
import { useState } from 'react'
import SuccessDialog from "../../dialog/SuccessDialog"
import { Button } from '../../ui/button'
const Step2 = ({form,setStep}:{form:any,setStep:(n:number)=>void}) => {
    const [selected,setSelected] =useState("")
    const{openDialog} =usePopUp()
  return (
    <div>
              <div className="mb-6">

                <FormField
                    control={form.control}
                    name="wallet"
                    render={({ field }) => (
                        <FormItem className='relative'>
                            <FormLabel className='absolute -top-2 left-4 bg-white text-xs text-[#2B2B2B] px-2 capitalize'>Select recipients account</FormLabel>
                            <Select onValueChange={(value)=>setSelected(value)} >
                                <FormControl>
                                    <SelectTrigger className='w-full border-[#565656] placeholder:text-sm placeholder:text-[#A8A8A8] py-5 '>
                                        <SelectValue placeholder="select" />
                                    </SelectTrigger>

                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">System</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
          {selected &&    <div className="mb-6">
             <button className="flex gap-1 items-center " onClick={() => setStep(2)}>
                {/* <CircleAlert className="size-6"/> */}
              <img src="./Vector (2).png" alt=""className='size-3' />
              <span className=" text-xs text-[#565656] font-normal">  Add New Withdrawal Bank? </span>
            </button>
            </div>}
            {selected ?<Button className='flex gap-10 w-full capitalize' type='submit' onClick={()=>openDialog(<SuccessDialog text="Your transfer was successfull" logo="./successLogo.png" submitText='Done'/>)}>
                Proceed</Button>:<Button className='flex gap-10 w-full capitalize' onClick={()=>setStep(2)}>
                <Plus/>
                <span>add new recipient</span></Button>}
    </div>
  )
}

export default Step2