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
import { Button } from '../ui/button'
import { Plus } from "lucide-react"

type step2Props = {
    form: any,
    isFormSubmitted?: boolean,
    setStep: (value: number) => void
}

const Step2 = ({ form, setStep }: step2Props) => {
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
            <Button className='flex gap-2 w-full' onClick={()=>setStep(3)}> <Plus /> <span>Add new Withdrawal bank</span></Button>
        </div>
    )
}

export default Step2