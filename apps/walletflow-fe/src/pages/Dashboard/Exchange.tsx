import SuccessDialog from '@/components/dialog/SuccessDialog'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { usePopUp } from '@/context/PopUpContext'

import { useForm } from 'react-hook-form'

const Exchange = () => {
  const form = useForm()
   const {openDialog} =usePopUp()
  const onSubmit = () => {
 
  }
  return (
    <section className='bg-white my-8 flex flex-col justify-center items-center rounded-xl h-[calc(100vh-165px)]'>
      <div className='w-full max-w-md'>
        <div className=''>
          <h2 className='font-bold text-xl '>Exchange Currencies Within Your Wallet</h2>
          <span className='border border-black w-[175px] h-0 flex  mt-3' />
        </div>
        <div className='mt-10'>
          <Form {...form}>
            <form action="" onSubmit={form.handleSubmit(onSubmit)}>

              <div className='flex justify-between items-end gap-3 mb-2'>
                <FormField
                  name="amount"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className='w-full'>
                      <FormLabel className='text-[#2B2B2B] text-sm font-bold capitalize'>from wallet</FormLabel>
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
                    <FormItem className='relative'>
                      <FormLabel className='absolute -top-2 left-4 bg-white text-xs '>Wallet</FormLabel>
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
              <p className='font-normal text-xs text-[#2B2B2B] mb-6 '>Available Balance: <span className='text-black font-semibold'>₦900,000.00</span></p>

              <div className='flex  justify-between items-end gap-3 mb-5'>
                <FormField
                  name="amount"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className='w-full'>
                      <FormLabel className='text-[#2B2B2B] text-sm font-bold capitalize'>to wallet  </FormLabel>
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
                    <FormItem className='relative '>
                      <FormLabel className='absolute -top-2 left-4 bg-white  text-xs'>Wallet</FormLabel>
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
              <Button className='w-full text-base'  onClick={()=>openDialog(<SuccessDialog text="Currency conversion was successfull" logo="./successLogo.png" submitText='Done'/>)}>proceed</Button>

            </form>

          </Form>
        </div>
        <div className='flex items-center gap-1 my-5'>
          <img src="./Vector.png" alt="" className='size-[13px]' />
          <p className='text-sm text-[#565656]'> Rate: <span className='font-semibold text-black '>1 NGN = 0.00169924 SGD</span></p>
        </div>
      </div>

    </section>
  )
}

export default Exchange