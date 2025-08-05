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
                  <FormLabel>upload image of receipt</FormLabel>
                  <FormControl>
                    <Input type='file' className='hidden'  {...field} />

                  </FormControl>
                  <div className='border  flex justify-between items-center px-5 py-4 rounded-md'>
                    <div className='flex items-center gap-2 text-sm text-gray-400'>
                      <File />
                      <span>select document</span>
                    </div>
                    <Button className='bg-gray-300 rounded-none px-6  py-0 text-gray-800'>Upload</Button>
                  </div>


                </FormItem>
              )
            }}



          />
          {/* <Button className='w-full my-4'>submit</Button> */}
            <Button className='w-full' onClick={() => openDialog(<SuccessDialog text="Your wallet will be funded in few seconds if top-up was successful." logo="./successLogo.png" submitText="Okay" />)}>{isFormSubmitted ? <LoaderCircle /> : "Submit"}</Button>
          <div className="flex gap-1 py-2">
            <CircleAlert className="size-8 text-black" />
            <p className="text-sm text-gray-700">If you have no receipt, please contact support@amapay.co </p>
          </div>

        </form>
      </Form>
    </div>
  )
}

export default ShareReceipt