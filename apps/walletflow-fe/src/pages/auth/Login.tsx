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
import { CircleAlert } from 'lucide-react'
import { useForm } from 'react-hook-form'
const Login = () => {
  const form = useForm()
  const onSubmit=()=>{
    
  }
  return (
    <div className='flex justify-center items-center '>
      <div className=' w-full max-w-xl my-20 px-4'>
        {/* header of the form */}
        <div className='flex items-center justify-center flex-col'>
          <img src="./Group.png" alt="logo image" className='object-cover w-[40px] ' />
          <h2 className='font-semibold text-2xl pt-5'>Login to your account</h2>
          <p className='text-gray-600 text-sm pt-1'>please ensure all fields are correct </p>
        </div>
        {/* form part  */}
       <div className=' my-10'>
         <Form {...form}>
          <form  onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 ">
            <div className= ''>
             <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className='w-full relative'>
                    <FormLabel className='absolute -top-3 text-gray-700 text-base left-3 w-10 bg-white'>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="jocey@gmail.com" {...field}  className='py-6 border border-gray-600 placeholder:text-sm'/>
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
                    <FormLabel className='absolute -top-3 text-gray-700 text-base left-3 w-18 bg-white capitalize'>password</FormLabel>
                    <FormControl>
                      <Input placeholder="password" {...field}  className='py-6 border border-gray-600 placeholder:text-sm'/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
           <div className='flex gap-2 items-center '> <CircleAlert  className='size-4'/> <span className='capitalize text-gray-500 text-sm'>forgot password ?</span></div>
            <Button className='capitalize text-base w-full py-6'>login</Button>
            <p className='text-center text-gray-500 text-base'>Don't have an account ?<span className='text-black capitalize px-1'><a href="/">sign up</a></span></p>
          </form>
        </Form>
       </div>
      </div>
    </div>
  )
}

export default Login