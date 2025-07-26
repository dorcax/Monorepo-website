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
            <div className= ''>
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
           <div className='flex gap-2 items-center '> <CircleAlert  className='size-4'/> <span className='capitalize text-gray-500 text-sm'>forgot password ?</span></div>
            <Button className='capitalize text-sm w-full'>login</Button>
            <p className='text-center text-gray-500 text-sm'>Don't have an account ?<span className='text-black capitalize px-1'>sign up</span></p>
          </form>
        </Form>
       </div>
      </div>
    </div>
  )
}

export default Login