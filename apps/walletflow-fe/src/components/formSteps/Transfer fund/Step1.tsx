import { Button } from '@/components/ui/button'

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
const Step1 = ({form,setStep}:{form:any,setStep:(n:number)=>void}) => {
  return (
    <div>


              <div className='flex  justify-between items-end gap-2 mb-5'>
              <FormField
                name="amount"
                control={form.control}
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel  className='text-[#2B2B2B] text-sm font-bold'>I want to send  </FormLabel>
                    <FormControl>
                      <Input {...field} className='py-5 border-[#565656] placeholder:text-sm placeholder:text-[#A8A8A8] ' placeholder='e.g 300,000' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="wallet"
                render={({ field }) => (
                  <FormItem className=' w-[140px] relative '>
                    <FormLabel className='absolute -top-2 left-4 bg-white '>Wallet</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className='py-5 border-[#565656] placeholder:text-sm placeholder:text-[#A8A8A8]'>
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
         <div className='flex gap-1 items-center justify-center mb-5'>
            <img src="./Line 9.svg" alt=""  />
            <div className='flex items-center gap-1'>
              <img src="./Vector.png" alt="" className='size-3'/>
              <p className='text-sm text-[#565656]'> Rate: <span className='font-semibold text-black '>1 NGN = 0.00169924 SGD</span></p>
            </div>
         </div>

            <div className='flex justify-between items-end gap-2 mb-4'>
              <FormField
                name="amount"
                control={form.control}
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel className='text-[#2B2B2B] font-bold text-sm' >Recipient gets </FormLabel>
                    <FormControl>
                      <Input {...field} className='border-[#565656] placeholder:text-sm placeholder:text-[#A8A8A8] py-5 ' placeholder='e.g 300,000' readOnly />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />


              <FormField
                control={form.control}
                name="currency"
                render={({ field }) => (
                  <FormItem className=' w-[140px] relative '>
                    <FormLabel className='absolute -top-2 left-4 bg-white  text-xs'>Currency</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className='border-[#565656] placeholder:text-sm placeholder:text-[#A8A8A8] py-5'>
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
            <Button className='w-full text-base mt-4' onClick={()=>setStep(1)}>proceed</Button>

    </div>
  )
}

export default Step1