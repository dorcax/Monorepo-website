import { transferList } from '@/constant/transfer'
import React from 'react'

const TransferTable = () => {
    return (
        <div className='my-8 overflow-x-auto'>
            <table className='w-full border-collapse '>
                <thead className='bg-white shadow-2xl'>
                    <tr>
                        <th className='py-2 px-4 rounded-tl-2xl capitalize font-semibold text-left'>destination</th>
                        <th className='py-2 px-4 capitalize font-semibold text-left'>currency</th>
                        <th className='py-2 px-4 capitalize font-semibold text-left'>amount</th>
                        <th className='py-2 px-4 capitalize font-semibold text-left'>date & time</th>
                        <th className='py-2 px-4 rounded-tr-2xl capitalize font-semibold text-left'>tracking code</th>
                    </tr>
                </thead>
                <tbody className='bg-white shadow-2xl '>
                     <tr><td colSpan={5} className=""></td></tr>
                    {transferList.map((er, index) => (
                        <tr key={index} className='border-b hover:bg-gray-50'>
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
                            <td className='py-2 px-4 text-left'>{er.trackingCode}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TransferTable
