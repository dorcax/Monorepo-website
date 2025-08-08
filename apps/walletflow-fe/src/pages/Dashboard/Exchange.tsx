import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { SelectContent, SelectItem, SelectTrigger, SelectValue ,Select} from "@/components/ui/select"

import { useForm } from 'react-hook-form'

const Exchange = () => {
    const form =useForm()
    const onSubmit=()=>{

    }
  return (
    <section className='bg-white shadow-2xl my-8 flex flex-col justify-center items-center rounded-xl h-[calc(100vh-165px)]'>
        <div>
            <h2 className='font-medium text-2xl pb-2'>Exchange Currencies Within Your Wallet</h2>
            <span className='border border-black w-[140px] h-0 flex '/>
        </div>
        <Form {...form}>
            <form action="" onSubmit={form.handleSubmit(onSubmit)}>
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
                   <Select {...field}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
                    <FormMessage />
                  </FormItem>
                )}



              />

            </div>
            <Button className='w-full text-base' >proceed</Button>

            </form>

        </Form>

    </section>
  )
}

export default Exchange