import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../ui/form'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from '../../ui/input'
import { Button } from '../../ui/button'

type step3Props = {
    form: any
    isFormSubmitted?: boolean
}
const Step3 = ({ form}: step3Props) => {
    return (
        <div className=''>
            <div className='flex gap-4 items-center mb-5'>
                <div>
                    <FormField
                        control={form.control}
                        name="currency"
                        render={({ field }) => (
                            <FormItem className='relative'>
                                <FormLabel className='absolute -top-2 left-4 bg-white text-[#4B4B4B]  pr-1 text-xs'>Currency</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className='w-[100px] py-6 border-[#565656] placeholder:text-sm placeholder:text-[#A8A8A8]'>
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
                {/* account type */}
                <div className='w-full'>
                    <FormField
                        control={form.control}
                        name="account_type"
                        render={({ field }) => (
                            <FormItem className='relative'>
                                <FormLabel className='absolute -top-2 left-4 bg-white text-[#4B4B4B] 
                             px-2 text-xs capitalize'>account type</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className='w-full py-6 border-[#565656] placeholder:text-sm placeholder:text-[#A8A8A8]'>
                                            <SelectValue placeholder="Select"  />
                                        </SelectTrigger>

                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="light">individual</SelectItem>
                                        <SelectItem value="dark">business</SelectItem>

                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}

                    />
                </div>
              
            </div>
              {/* account name */}
                <div className='mb-5'>
                    <FormField
                        name="name"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className='w-full relative '>
                                <FormLabel className='absolute -top-2 left-4 bg-white text-xs text-[#4B4B4B] capitalize px-2' >Account name</FormLabel>
                                <FormControl>
                                    <Input {...field} className='py-6 border-[#565656] placeholder:text-sm placeholder:text-[#A8A8A8]' placeholder='micheal akinbowale' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                 <div className='mb-5'>
                    <FormField
                        name="name"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className='w-full relative '>
                                <FormLabel className='absolute -top-2 left-4 bg-white text-xs text-[#4B4B4B] capitalize px-2' >Account number</FormLabel>
                                <FormControl>
                                    <Input {...field} className='py-6 b border-[#565656] placeholder:text-sm placeholder:text-[#A8A8A8]' placeholder='account number' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                  <div className='flex gap-2 items-center mb-5'>
                <div className='w-full'>
                    <FormField
                        control={form.control}
                        name="currency"
                        render={({ field }) => (
                            <FormItem className='relative'>
                                <FormLabel className='absolute -top-2 left-4 bg-white text-[#4B4B4B] text-xs pr-1 capitalize'>swift code</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className='w-full py-6 border-[#565656]'>
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
                {/* account type */}
                <div className='w-full'>
                    <FormField
                        control={form.control}
                        name="account_type"
                        render={({ field }) => (
                            <FormItem className='relative'>
                                <FormLabel className='absolute -top-2 left-4 bg-white text-[#4B4B4B] text-xs pr-2 capitalize'>bank name</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className='w-full py-6 border-[#565656] placeholder:text-sm placeholder:text-[#A8A8A8]'>
                                            <SelectValue placeholder="select" />
                                        </SelectTrigger>

                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="light">individual</SelectItem>
                                        <SelectItem value="dark">business</SelectItem>

                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}

                    />
                </div>
              
            </div>
            {/* address and city */}
              <div className='flex gap-2 items-center mb-5'>
                <div className='w-full'>
                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem className='relative'>
                                <FormLabel className='absolute -top-2 left-4 bg-white text-[#4B4B4B] text-xs pr-1 capitalize'>address</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className='w-full py-6 border-[#565656] placeholder:text-sm placeholder:text-[#A8A8A8]'>
                                            <SelectValue placeholder="select" />
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
                {/* account type */}
                <div className='w-full'>
                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                            <FormItem className='relative'>
                                <FormLabel className='absolute -top-2 left-4 bg-white text-xs pr-1 capitalize text-[#4B4B4B] '>city</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className='w-full py-6 border-[#565656] placeholder:text-sm placeholder:text-[#A8A8A8]'>
                                            <SelectValue placeholder="select" />
                                        </SelectTrigger>

                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="light">individual</SelectItem>
                                        <SelectItem value="dark">business</SelectItem>

                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}

                    />
                </div>
              
            </div>
            <Button className='w-full capitalize'> add Acount</Button>
        </div>
    )
}

export default Step3