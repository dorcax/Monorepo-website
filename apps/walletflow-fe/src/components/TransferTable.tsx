import { filteringButton } from '@/constant/FilteringButton'
import { transferList } from '@/constant/transfer'
import { Button } from './ui/button'
import { Copy } from 'lucide-react'
import Summary from './Summary'
import { usePopUp } from '@/context/PopUpContext'

import AddTransferFund from '@/components/drawer/AddTransferFund'

const TransferTable = () => {
    const {openDrawer} =usePopUp()
    return (
        <section>
            {/* summary card  */}
            <Summary />
            <div className='flex  gap-6'>
                {filteringButton.map((b,index) => (
                    <Button key={index} className='bg-white py-6 capitalize w-[160px] font-semibold text-base text-[#555555] hover:bg-white'  onClick={()=>openDrawer(b.handleClick)}> <span className=''>{b.icon}</span>{b.name}</Button>
                ))}
            </div>
            {/* list of transactions */}
            <div className='my-10 overflow-y-auto'>
                <table className='min-w-full'>
                    <thead className='bg-white border-b-6 border-b-[#f4f4f4] '>
                        <tr>
                            <th className='py-2 px-4 rounded-tl-2xl capitalize font-semibold text-left'>destination</th>
                            <th className='py-2 px-4 capitalize font-semibold text-left'>currency</th>
                            <th className='py-2 px-4 capitalize font-semibold text-left'>amount</th>
                            <th className='py-2 px-4 capitalize font-semibold text-left'>date & time</th>
                            <th className='py-2 px-4 rounded-tr-2xl capitalize font-semibold text-left'>tracking code</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white'>
                        <tr className=''><td colSpan={5} className=""></td></tr>
                        {transferList.map((er, index) => (
                            <tr key={index} className='border-b hover:bg-gray-50 '>
                                <td className='py-3 px-4 text-left font-normal text-sm'>{er.destination}</td>
                                <td className='py-3 px-4 text-left font-normal text-sm'>{er.currency}</td>
                                <td className='py-3 px-4 text-left font-normal text-sm'>{er.amount}</td>
                                <td className='py-3 px-4 text-left font-normal text-sm'>
                                    {new Date(er.dateTime).toLocaleString("en-NG", {
                                        day: '2-digit',
                                        month: 'short',
                                        year: 'numeric',
                                    })}
                                </td>
                                <td className=' p-4 text-left font-medium '>
                                    <div className='flex w-fit rounded-full border bg-gray-100 items-center py-1.5 px-3 justify-center gap-2'>
                                        <span className='text-gray-600 text-xs'>Copy </span>
                                        <button> <Copy className='size-3' /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>

    )
}

export default TransferTable
