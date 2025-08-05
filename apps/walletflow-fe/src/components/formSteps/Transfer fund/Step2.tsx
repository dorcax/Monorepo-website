import React from 'react'
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
import { CircleAlert, Plus } from "lucide-react"
import SuccessDialog from "../../dialog/SuccessDialog"
import { Button } from '../../ui/button'
const Step2 = ({form,setStep}:{form:any,setStep:(n:number)=>void}) => {
  return (
    <div>
              <div className="mb-5">

                <FormField
                    control={form.control}
                    name="wallet"
                    render={({ field }) => (
                        <FormItem className='relative'>
                            <FormLabel className='absolute -top-2 left-4 bg-white text-xs text-gray-700'>Select recipients account</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className='w-full py-6'>
                                        <SelectValue placeholder="Select" />
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
            <Button className='flex gap-10 w-full capitalize' onClick={()=>setStep(2)}>
                <Plus/>
                <span>add new recipient</span></Button>
    </div>
  )
}

export default Step2