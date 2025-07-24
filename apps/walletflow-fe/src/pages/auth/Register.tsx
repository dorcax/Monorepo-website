import React from 'react'
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
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
const Register = () => {
  const form = useForm()
  const onSubmit=()=>{
    
  }
  return (
    <div className='flex justify-center items-center '>
      <div className=' w-full max-w-lg my-20 px-4'>
        {/* header of the form */}
        <div className='flex items-center justify-center flex-col'>
          <img src="./Group.png" alt="logo image" className='object-cover ' />
          <h2 className='font-semibold text-lg pt-4'>Create a Wallet flow account</h2>
          <p className='text-gray-600 text-xs pt-1'>By signing up, you agree to our privacy policy and terms of use.</p>
        </div>
        {/* form part  */}
       <div className=' my-10'>
         <Form {...form}>
          <form  onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 ">
            <div className='flex gap-3 w-full '>
              <FormField
          control={form.control}
          name="account-type"
          render={({ field }) => (
            <FormItem className='w-full relative '>
              <FormLabel className='absolute -top-2 text-xs text-gray-700 left-4 w-20 bg-white capitalize '>account type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className='w-full py-6  border border-gray-600 text-xs' >
                    <SelectValue placeholder="select the account type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">Individual</SelectItem>
                  <SelectItem value="m@google.com">Business</SelectItem>
            
                </SelectContent>
              </Select>
             
              <FormMessage />
            </FormItem>
          )}
        />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className='w-full relative'>
                    <FormLabel className='absolute -top-2 text-gray-700 text-xs left-3 w-10 bg-white'>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="jocey@gmail.com" {...field}  className='py-6 border border-gray-600 placeholder:text-xs'/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* firstname and lastname */}
            <div className='flex gap-3'>
                <FormField
                control={form.control}
                name="first name"
                render={({ field }) => (
                  <FormItem className='w-full relative'>
                    <FormLabel className='absolute -top-2 text-gray-700 text-xs left-3 w-16 bg-white capitalize'>first name</FormLabel>
                    <FormControl>
                      <Input placeholder="firstname" {...field}  className='py-6 border border-gray-600 placeholder:text-xs'/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
                <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem className='w-full relative'>
                    <FormLabel className='absolute -top-2 text-gray-700 text-xs left-3 w-16 bg-white  capitalize'>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="lastname" {...field}  className='py-6 border border-gray-600 placeholder:text-xs'/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* country and phonenumber */}
             <div className='flex gap-3 w-full '>
              <FormField
          control={form.control}
          name="account-type"
          render={({ field }) => (
            <FormItem className='w-full relative '>
              <FormLabel className='absolute -top-2 text-xs text-gray-700 left-4 w-12 bg-white capitalize '>country</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className='w-full py-6 border border-gray-600 '>
                    <SelectValue placeholder="Select country" className='' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="nigeria">Nigeria</SelectItem>
                  <SelectItem value="ghana">Ghana</SelectItem>
            
                </SelectContent>
              </Select>
             
              <FormMessage />
            </FormItem>
          )}
        />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className='w-full relative'>
                    <FormLabel className='absolute -top-2 text-gray-700 text-xs left-3 w-22 bg-white capitalize'>phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="phone number" {...field}  className='py-6 border border-gray-600 placeholder:text-xs'/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
               <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className='w-full relative'>
                    <FormLabel className='absolute -top-2 text-gray-700 text-xs left-3 w-14 bg-white capitalize'>password</FormLabel>
                    <FormControl>
                      <Input placeholder="password" {...field}  className='py-6 border border-gray-600 placeholder:text-xs'/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button className='capitalize text-sm w-full'>create account</Button>
            <p className='text-center text-gray-500 text-sm'>already have an account ?<span className='text-black capitalize px-1'>sign in</span></p>
          </form>
        </Form>
       </div>
      </div>
    </div>
  )
}

export default Register