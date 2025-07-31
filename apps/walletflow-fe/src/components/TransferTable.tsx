import { filteringButton } from '@/constant/FilteringButton'
import { transferList } from '@/constant/transfer'
import { Button } from './ui/button'
import { Copy } from 'lucide-react'
import Summary from './Summary'
import { usePopUp } from '@/context/PopUpContext'

import AddTransferFund from '@/drawer/AddTransferFund'

const TransferTable = () => {
    const {openDrawer} =usePopUp()
    return (
        <section>
            {/* summary card  */}
            <Summary />
            <div className='flex  gap-6'>
                {filteringButton.map((b,index) => (
                    <Button key={index} className='bg-white py-6 capitalize w-[160px] text-sm text-gray-500 hover:bg-white'  onClick={()=>openDrawer(b.handleClick)}> <span className=''>{b.icon}</span>{b.name}</Button>
                ))}
            </div>
            {/* list of transactions */}
            <div className='my-8 overflow-x-auto'>
                <table className='min-w-full'>
                    <thead className='bg-white shadow-2xl'>
                        <tr>
                            <th className='py-2 px-4 rounded-tl-2xl capitalize font-semibold text-left'>destination</th>
                            <th className='py-2 px-4 capitalize font-semibold text-left'>currency</th>
                            <th className='py-2 px-4 capitalize font-semibold text-left'>amount</th>
                            <th className='py-2 px-4 capitalize font-semibold text-left'>date & time</th>
                            <th className='py-2 px-4 rounded-tr-2xl capitalize font-semibold text-left'>tracking code</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white shadow-2xl  '>
                        <tr className=''><td colSpan={5} className=""></td></tr>
                        {transferList.map((er, index) => (
                            <tr key={index} className='border-b hover:bg-gray-50 '>
                                <td className='py-2 px-4 text-left'>{er.destination}</td>
                                <td className='py-2 px-4 text-left'>{er.currency}</td>
                                <td className='py-2 px-4 text-left'>{er.amount}</td>
                                <td className='py-2 px-4 text-left'>
                                    {new Date(er.dateTime).toLocaleString("en-NG", {
                                        day: '2-digit',
                                        month: 'short',
                                        year: 'numeric',
                                    })}
                                </td>
                                <td className='py-2 px-4 text-left '>
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
