import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { CircleAlert, LoaderCircle } from "lucide-react"
type step1Props = {
    form: any,
    isFormSubmitted?: boolean,
    setStep: (value: number) => void
}
const FundWalletStep1 = ({ form, setStep,isFormSubmitted }: step1Props) => {
     
    return (
        <div>
            <div className='flex gap-4 items-center'>
                <div className="mb-5 w-[100px]">

                    <FormField
                        control={form.control}
                        name="currency"
                        render={({ field }) => (
                            <FormItem className='relative'>
                                <FormLabel className='absolute -top-2 left-4 bg-white text-xs w-11 text-gray-700'>Currency</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className='w-full py-6'>
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
                <div className='mb-5 w-full'>
                    <FormField
                        name="country"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className='w-full relative '>
                                <FormLabel className='absolute -top-2 left-4 bg-white text-xs text-gray-700 capitalize w-12' >country</FormLabel>
                                <FormControl>
                                    <Input {...field} className='py-6' placeholder='micheal akinbowale' readOnly />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

            </div>
            {/* amount */}
            <div className='mb-5 w-full'>
                <FormField
                    name="amount"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem className='w-full relative '>
                            <FormLabel className='absolute -top-2 left-4 bg-white text-xs text-gray-700 capitalize w-12' >Amount</FormLabel>
                            <FormControl>
                                <Input {...field} className='py-6' placeholder='micheal akinbowale' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            {/* radio button to select method of transfer */}
            {/* amount */}
            <div>
               <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="">
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex  justify-between items-center mb-8 text-gray-700"
                >
                  <FormItem className="flex items-center gap-3">
                    <FormControl>
                      <RadioGroupItem value="all" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Fund with Card
                    </FormLabel>
                  </FormItem>
                 
                  <FormItem className="flex items-center gap-3">
                    <FormControl>
                      <RadioGroupItem value="none" />
                    </FormControl>
                    <FormLabel className="font-normal">Bank Transfer</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
            </div>
            
            {/* submit button */}
            <Button className='w-full'  onClick={()=>setStep(2)}>{isFormSubmitted ?<LoaderCircle/>:"proceed"}</Button>
            <div className="flex gap-1 items-center my-8">
                <CircleAlert className="size-5"/>
                <span className="text-gray-700 text-xs ">minimum amount is #1000</span>
            </div>
        </div>
    )
}

export default FundWalletStep1