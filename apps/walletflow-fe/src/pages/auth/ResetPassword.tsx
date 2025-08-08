
import SuccessDialog from '@/components/dialog/SuccessDialog'
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { usePopUp } from '@/context/PopUpContext'
import { EyeOffIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'

const ResetPassword = () => {
  const form = useForm()
  const {openDialog} =usePopUp()
  const onSubmit =()=>{
    console.log('hello')
  }

  return (
    <section className="bg-white  h-[calc(100vh-165px)] my-8 rounded-xl flex justify-center items-center w-full">
      <div className="w-full max-w-md flex flex-col justify-center items-center px-6 py-10 space-y-10">
        {/* Header Text */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold capitalize">reset your password</h2>
          <p className="text-gray-500">please ensure all fields are correct</p>
        </div>

        {/* Form */}
        <Form {...form}>
          <form className="w-full space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
         <div>   <FormField
              control={form.control}
              name="current_password"
              render={({ field }) => (
                <FormItem className="relative w-full">
                  <FormLabel className="absolute -top-2 left-4 bg-white px-1 text-sm text-gray-700 capitalize">
                    current password
                  </FormLabel>
                  <FormControl>
                    <div className=''>
                        <Input {...field} type='password' className="w-full py-5  " placeholder='password' />
                    <EyeOffIcon className='size-4 text-gray-400 absolute top-3 right-4'/>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            /></div>
             <div>   <FormField
              control={form.control}
              name="new_password"
              render={({ field }) => (
                <FormItem className="relative w-full">
                  <FormLabel className="absolute -top-2 left-4 bg-white px-1 text-sm text-gray-700 capitalize">
                    new password
                  </FormLabel>
                  <FormControl>
                   <div className=''>
                        <Input {...field} type='password' className="w-full py-5  " placeholder='password' />
                    <EyeOffIcon className='size-4 absolute text-gray-400  top-3 right-4'/>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            /></div>
             <div>   <FormField
              control={form.control}
              name="confirm_password"
              render={({ field }) => (
                <FormItem className="relative w-full">
                  <FormLabel className="absolute -top-2 left-4 bg-white px-1 text-sm text-gray-700 capitalize">
                    confirm password
                  </FormLabel>
                  <FormControl>
                    <div className=''>
                        <Input {...field} type='password' className="w-full py-5  " placeholder='password' />
                    <EyeOffIcon className='size-4 absolute text-gray-400  top-3 right-4'/>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            /></div>
            <Button className='w-full capitalize text-base' onClick={()=>openDialog(<SuccessDialog logo="./successLogo.png" text='password reset successful' submitText='Done'/>)}>reset password</Button>
          </form>
        </Form>
      </div>
    </section>
  )
}

export default ResetPassword
