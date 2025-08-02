import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Switch } from "@/components/ui/switch"
import { LoaderCircle } from "lucide-react"
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { usePopUp } from "@/context/PopUpContext"
import SuccessDialog from "../dialog/SuccessDialog"
type step1Props = {
    form: any,
    isFormSubmitted?: boolean,
    setStep: (value: number) => void
}
const FundWalletStep2 = ({ form, setStep,isFormSubmitted }: step1Props) => {
     const {openDialog} =usePopUp()
    return (
        <div>
               {/* amount */}
            <div className='mb-5 w-full'>
                <FormField
                    name="card_number"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem className='w-full relative '>
                            <FormLabel className='absolute -top-2 left-4 bg-white text-xs text-gray-700 capitalize w-20' >card number</FormLabel>
                            <FormControl>
                                <Input {...field} className='py-6' placeholder='card number' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <div className='flex gap-4 items-center'>
             
   {/* card expiry and card cvv */}
            <div className='mb-5 w-full'>
                <FormField
                    name="card_expiry"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem className='w-full relative '>
                            <FormLabel className='absolute -top-2 left-4 bg-white text-xs text-gray-700 capitalize w-18' >card expiry</FormLabel>
                            <FormControl>
                                <Input {...field} className='py-6' placeholder='' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
               {/* amount */}
            <div className='mb-5 w-full'>
                <FormField
                    name="card_cvv"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem className='w-full relative '>
                            <FormLabel className='absolute -top-2 left-4 bg-white text-xs text-gray-700 capitalize w-16' >card cvv</FormLabel>
                            <FormControl>
                                <Input {...field} className='py-6' placeholder='' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
                    
                
            </div>
            <div className="mb-6">
                      <FormField
              control={form.control}
              name="marketing_emails"
              render={({ field }) => (
                <FormItem className="flex  items-center p-2">
                  
                  <FormControl >
                    <Switch 
                      checked={field.value}
                      onCheckedChange={field.onChange}
                     />
                  </FormControl>
                  <div className="space-y-0.5">
                    <FormLabel>save for later use</FormLabel>
        
                  </div>
                </FormItem>
              )}
            />
            </div>
         
            {/* submit button */}
            <Button className='w-full' onClick={()=>openDialog(<SuccessDialog text="your wallet was funded successfully"/>)}>{isFormSubmitted ?<LoaderCircle/>:"Fund"}</Button>
         
        </div>
    )
}

export default FundWalletStep2