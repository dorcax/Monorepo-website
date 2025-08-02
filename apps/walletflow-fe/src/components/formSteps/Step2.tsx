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
import { CircleAlert } from "lucide-react"
import SuccessDialog from "../dialog/SuccessDialog"
import { Button } from '../ui/button'

type step2Props = {
    form: any,
    isFormSubmitted?: boolean,
    setStep: (value: number) => void
}

const Step2 = ({ form, setStep }: step2Props) => {
    const{openDialog} =usePopUp()
    return (
        <div>
            <div className="mb-5">

                <FormField
                    control={form.control}
                    name="wallet"
                    render={({ field }) => (
                        <FormItem className='relative'>
                            <FormLabel className='absolute -top-2 left-4 bg-white text-xs w-28 text-gray-700'>Select saved wallet</FormLabel>
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
            {/* button to click on add bank */}
           <div className="mb-4">
             <button className="flex gap-1 items-center " onClick={() => setStep(3)}>
                <CircleAlert className="size-6"/>
              <span className=" text-sm text-gray-700">  Add New Withdrawal Bank? </span>
            </button>
            </div>
            <Button className='flex gap-2 w-full' onClick={()=>openDialog(<SuccessDialog text="your withdrawal was successfully!"/>)}> Proceed</Button>
           
        </div>
    )
}

export default Step2