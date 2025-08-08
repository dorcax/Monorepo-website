import { Input } from '@/components/ui/input'
import { format } from "date-fns"
import { Calendar as CalendarIcon, Copy, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from 'react'
import DatePicker from '@/components/Calendar'
import { transferList } from '@/constant/transfer'
const Transaction = () => {
    const [date, setDate] = useState<Date>()
    return (
        <section className='my-8'>
            <div className='flex justify-between items-center'>
                <div className='relative'>
                    <Input  className='bg-white  rounded-xl w-[160px] px-10 ' placeholder='Search....'/>
                    <Search className='size-4 absolute top-2.5 left-3'/>
                </div>

                <div className='flex gap-3 items-center'>
                    
                        <DatePicker />
                        <span className='text-black  text-base'>to</span>
                        <DatePicker />
                    
                   
                </div>
            </div>
            <section>
                   {/* list of transactions */}
                            <div className='my-8 overflow-x-auto '>
                                <table className='min-w-full'>
                                    <thead className='bg-white shadow-2xl'>
                                        <tr>
                                            <th className='py-2 pl-8 rounded-tl-2xl capitalize font-semibold text-left'>destination</th>
                                            <th className='py-2 pl-8 capitalize font-semibold text-left'>currency</th>
                                            <th className='py-2 pl-8 capitalize font-semibold text-left'>amount</th>
                                            <th className='py-2 pl-8 capitalize font-semibold text-left'>date & time</th>
                                            <th className='py-2 pl-8 rounded-tr-2xl capitalize font-semibold text-left'>status</th>
                                        </tr>
                                    </thead>
                                    <tbody className='bg-white shadow-2xl  max-h-80 overflow-y-auto '>
                                        <tr className=''><td colSpan={5} className=""></td></tr>
                                        {transferList.map((er, index) => (
                                            <tr key={index} className='border-b hover:bg-gray-50 '>
                                                <td className='py-2 pl-8 text-left '>{er.currency}</td>
                                                <td className='py-2 pl-8 text-left'>{er.destination}</td>
                                                <td className='py-2 pl-8 text-left'>{er.amount}</td>
                                                <td className='py-2 pl-8 text-left '>
                                                    {new Date(er.dateTime).toLocaleString("en-NG", {
                                                        day: '2-digit',
                                                        month: 'short',
                                                        year: 'numeric',
                                                    })}
                                                </td>
                                                <td className='py-2 pl-8 text-left  '>
                                                    <div className=''>
                                                        <span className='text-gray-600 text-base'>pending </span>
                                                    
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
            </section>

        </section>
    )
}

export default Transaction