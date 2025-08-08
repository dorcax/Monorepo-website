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
import SuccessDialog from "../../dialog/SuccessDialog"
import { Button } from '../../ui/button'

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
                            <FormLabel className='absolute -top-2 left-4 bg-white text-xs px-2 text-[#4B4B4B]'>Select saved wallet</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className='w-full py-6 border-[#565656]'>
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
           <div className="mb-6">
             <button className="flex gap-1 items-center " onClick={() => setStep(3)}>
                {/* <CircleAlert className="size-6"/> */}
              <img src="./Vector (2).png" alt=""className='size-3' />
              <span className=" text-xs text-[#565656] font-normal">  Add New Withdrawal Bank? </span>
            </button>
            </div>
            <Button className='flex gap-2 w-full ' onClick={()=>openDialog(<SuccessDialog text="your withdrawal was successfully!" logo="./successLogo.png" submitText="Done"/>)}> Proceed</Button>
           
        </div>
    )
}

export default Step2