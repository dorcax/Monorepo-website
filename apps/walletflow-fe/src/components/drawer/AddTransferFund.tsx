import CustomDrawer from '@/common/CustomDrawer'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from 'react-hook-form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input'
import { usePopUp } from '@/context/PopUpContext'
const AddTransferFund = () => {
  const form = useForm()
  const onSubmit = () => {
    console.log("hello")
  }
  const {closeDrawer} =usePopUp()
  return (

    <CustomDrawer title='Transfer Funds ' subtext='select the currency you want to transfer funds to' className='bg-white shadow-5xl py-12'>
      <Button className='fixed top-0 left-[71.3%] py-6 w-[50px] rounded-r-none rounded-tl-none'><X className='size-7' onClick={()=>closeDrawer()}/></Button>
      <div>
        <Form {...form}>
          <form action="" onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          <div className='flex justify-between  items-center gap-3'>
              <FormField
              name="amount"
              control={form.control}
              render={({ field }) => (
                <FormItem className='w-full relative h-20'>
                  <FormLabel >i want to send </FormLabel>
                  <FormControl>
                    <Input {...field} className=' ' placeholder='e.g 300,000'/>
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
                  <FormLabel>wallet</FormLabel>
                 <Select onValueChange={field.onChange} defaultValue={field.value}>
                   <FormControl>
                     <SelectTrigger className='w-[100px]'>
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



          </form>


        </Form>
      </div>
    </CustomDrawer>
  )
}

export default AddTransferFund