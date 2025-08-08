import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useForm } from 'react-hook-form'
const Register = () => {
  const form = useForm()
  const onSubmit=()=>{
    
  }
  return (
    <div className='flex justify-center items-center '>
      <div className=' w-full max-w-xl my-20 px-4'>
        {/* header of the form */}
        <div className='flex items-center justify-center flex-col'>
          <img src="./Group.png" alt="logo image" className='object-cover ' />
          <h2 className='font-semibold text-2xl pt-4'>Create a Wallet flow account</h2>
          <p className='text-gray-600 text-sm pt-1'>By signing up, you agree to our privacy policy and terms of use.</p>
        </div>
        {/* form part  */}
       <div className=' my-10'>
         <Form {...form}>
          <form  onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
            <div className='flex gap-4 w-full '>
              <FormField
          control={form.control}
          name="account-type"
          render={({ field }) => (
            <FormItem className='w-full relative '>
              <FormLabel className='absolute -top-3 text-base text-gray-700 left-4  bg-white capitalize '>account type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className='w-full py-6  border border-gray-600 text-sm' >
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
                    <FormLabel className='absolute -top-3 text-gray-700 text-base left-3 bg-white'>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="jocey@gmail.com" {...field}  className='py-6 border border-gray-600 placeholder:text-sm'/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* firstname and lastname */}
            <div className='flex gap-4'>
                <FormField
                control={form.control}
                name="first name"
                render={({ field }) => (
                  <FormItem className='w-full relative'>
                    <FormLabel className='absolute -top-3 text-gray-700 text-base left-3  bg-white capitalize'>first name</FormLabel>
                    <FormControl>
                      <Input placeholder="firstname" {...field}  className='py-6 border border-gray-600 placeholder:text-sm'/>
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
                    <FormLabel className='absolute -top-3 text-gray-700 text-base left-3  bg-white  capitalize'>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="lastname" {...field}  className='py-6 border border-gray-600 placeholder:text-sm'/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* country and phonenumber */}
             <div className='flex gap-4 w-full '>
              <FormField
          control={form.control}
          name="account-type"
          render={({ field }) => (
            <FormItem className='w-full relative '>
              <FormLabel className='absolute -top-3 text-base text-gray-700 left-4  bg-white capitalize '>country</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className='w-full py-6 border border-gray-600 text-sm '>
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
                    <FormLabel className='absolute -top-3 text-gray-700 text-base left-3 bg-white capitalize'>phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="phone number" {...field}  className='py-6 border border-gray-600 placeholder:text-sm'/>
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
                    <FormLabel className='absolute -top-3 text-gray-700 text-base left-3 bg-white capitalize'>password</FormLabel>
                    <FormControl>
                      <Input placeholder="password" {...field}  className='py-6 border border-gray-600 placeholder:text-sm'/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button className='capitalize text-base w-full py-6 '>create account</Button>
            <p className='text-center text-gray-500 text-base'>Already have an account ?<span className='text-black capitalize font-semibold px-1'><a href="/login">sign in</a></span></p>
          </form>
        </Form>
       </div>
      </div>
    </div>
  )
}

export default Register