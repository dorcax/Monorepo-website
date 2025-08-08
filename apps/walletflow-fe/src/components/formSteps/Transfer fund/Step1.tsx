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

         <FormField
                        control={form.control}
                        name="currency"
                        render={({ field }) => (
                            <FormItem className='relative'>
                                <FormLabel className='absolute -top-2 left-4 bg-white text-xs w-11 text-gray-700'>Currency</FormLabel>
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
       
              <div className='flex  justify-between items-end gap-3 mb-4'>
              <FormField
                name="amount"
                control={form.control}
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel >i want to send  </FormLabel>
                    <FormControl>
                      <Input {...field} className=' ' placeholder='e.g 300,000' />
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
                    <FormLabel className='absolute -top-2 left-4 bg-white z-10'>wallet</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className='pt-4'>
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
         <div className='flex items-center mb-4'>
             <div className="flex flex-col items-start px-4">
              {/* top Circle */}
              <div className="size-2 rounded-full bg-black"></div>

              {/*  Line in the Middle */}
              <div className="h-16 w-px mx-[2.5px] border-2 border-gray-600"></div>

              {/*  bottom Circle */}
              <div className="size-2 rounded-full bg-black"></div>
            </div>
            <div className='flex items-center gap-1'>
              <img src="./Vector.png" alt="" className='size-3'/>
              <span className='text-sm text-gray-600'> Rate: <span className='font-semibold text-black'>1 NGN = 0.00169924 SGD</span></span>
            </div>
         </div>

            <div className='flex justify-between items-end gap-3 mb-4'>
              <FormField
                name="amount"
                control={form.control}
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel >Recipient gets </FormLabel>
                    <FormControl>
                      <Input {...field} className=' ' placeholder='e.g 300,000' readOnly />
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
                    <FormLabel className='absolute -top-2 left-4 bg-white '>currency</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className='pt-4'>
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
            <Button className='w-full text-base' onClick={()=>setStep(1)}>proceed</Button>

    </div>
  )
}

export default Step1