import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { AlertCircle, Loader } from 'lucide-react'
import { Button } from '../ui/button'

type step1Props ={
    form:any,
    isFormSubmitted:boolean,
    setStep:(value:number)=>void
}
const Step1 = ({form,isFormSubmitted,setStep}:step1Props) => {
  return (
    <div>
         <div className="mb-5" >

                                <FormField
                                    control={form.control}
                               
                                    name="wallet"
                                    render={({ field }) => (
                                        <FormItem className='relative'>
                                            <FormLabel className='absolute -top-2 left-4 bg-white text-xs w-18 text-gray-700'>Select wallet</FormLabel>
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
                            <div className="mb-5">
                                <FormField
                                    name="amount"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem className='w-full relative '>
                                            <FormLabel className='absolute -top-2 left-4 bg-white text-xs text-gray-700' >Amount</FormLabel>
                                            <FormControl>
                                                <Input {...field} className='py-6' placeholder='e.g 300,000' />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                            </div>
                            <div className='flex gap-2 items-center mb-5'>
                                <AlertCircle className='size-4' />
                                <span className='text-gray-500 text-xs'>Minimum amount is #3000</span>
                            </div>

                            <Button className='w-full text-sm ' onClick={() => setStep(2)}>{isFormSubmitted ? <Loader /> : "Proceed"}</Button>
    </div>
  )
}

export default Step1