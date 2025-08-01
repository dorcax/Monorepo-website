import Sidebar from '@/components/Sidebar'
import Summary from '@/components/Summary'
import TransferTable from '@/components/TransferTable'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { filteringButton } from '@/constant/FilteringButton'
import { Bell, BellRing, Headset, Search } from 'lucide-react'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='bg-[#F4F4F4]  h-screen '>
      <div className='flex gap-6 p-10'>
        {/* sidebar section */}
        <section className=''>
          <Sidebar />
        </section>


        {/* main content */}
        <main className='flex-1'>
          <header className='flex items-center justify-between'>
            <h2 className='text-xl text-gray-500'>Dashboard</h2>
            {/* search input */}
            <div className=' relative'>
              <Input className='w-[400px] bg-white shadow-2xl rounded-full py-6' placeholder='search here ...' />
              <Search className='absolute top-4 right-4 text-gray-500' />
            </div>
            {/* support */}
            <div className='bg-white shadow-2xl flex items-center py-2 gap-2 rounded-l-lg rounded-tr-lg px-4 text-gray-600'>
              <Headset />
              Support
            </div>
            {/* notification */}
            <div className='relative'>   <BellRing className='w-8 h-8' />
              <span className=' absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-red-600' />
            </div>
            {/* test mode */}
            <div className='border  border-red-300 bg-[#ffdadaec] p-2 rounded-full px-4 text-sm text-red-400'>Test mode</div>
          </header>
          <Outlet />
        </main>
      </div>

    </div>
  )
}

export default Dashboard