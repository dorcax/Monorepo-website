import Sidebar from '@/components/Sidebar'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='  bg-[#F4F4F4] overflow-hidden h-screen '>
  <div className='m-10 flex gap-4'>
      {/* sidebar section */}
    <section>
        <Sidebar/>
    </section>


    {/* main content */}
    <section className='flex-1 border'>hello mi</section>
  </div>

    </div>
  )
}

export default Dashboard