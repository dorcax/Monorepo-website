import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../../ui/form'
import { useForm } from 'react-hook-form'
import { Input } from '../../ui/input'
import { CircleAlert, File, LoaderCircle } from 'lucide-react'
import { Button } from '../../ui/button'
import SuccessDialog from '../../dialog/SuccessDialog'
import { usePopUp } from '@/context/PopUpContext'
const ShareReceipt = (isFormSubmitted:any) => {
  const {openDialog} =usePopUp()
  const form = useForm()

  const onSubmit = () => {
    console.log("file")
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <FormField
            control={form.control}
            name="uplaod"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className='text-[#222222] text-sm'>Upload Image of Receipt</FormLabel>
                  <FormControl>
                    <Input type='file' className='hidden'  {...field} />

                  </FormControl>
                  <div className='border border-[#565656]  flex justify-between items-center px-5 h-[63px] rounded-md'>
                    <div className='flex items-center gap-2 text-sm text-gray-400'>
                      <File  className='size-4  '/>
                      <span className='text-[#A3A3A3] text-xs'>select document</span>
                    </div>
                    <button className='bg-[#D7D7D7] rounded-none text-xs text-black h-[24px] w-[80px] font-medium'>Upload</button>
                  </div>


                </FormItem>
              )
            }}



          />
          {/* <Button className='w-full my-4'>submit</Button> */}
            <Button className='w-full' onClick={() => openDialog(<SuccessDialog text="Your wallet will be funded in few seconds if top-up was successful." logo="./successLogo.png" submitText="Okay" />)}> Submit</Button>
          <div className="flex items-center gap-1 py-2">
             <img src="./Vector (2).png" alt=""className='size-4' />
            <p className="text-sm text-[#2D2D2D] font-semibold">If you have no receipt, please contact support@amapay.co </p>
          </div>

        </form>
      </Form>
    </div>
  )
}

export default ShareReceipt