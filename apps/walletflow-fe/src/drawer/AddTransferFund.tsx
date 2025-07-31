import CustomDrawer from '@/common/CustomDrawer'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import React from 'react'

const AddTransferFund = () => {
  return (
   <CustomDrawer title='Transfer Funds ' subtext='select the currency you want to transfer funds to' className='bg-white shadow-5xl py-12'>
    <Button className='fixed top-0 left-[71.3%] py-6 w-[50px] rounded-r-none rounded-tl-none'><X className='size-7' /></Button>
    <div>
        
     <form action="">
        <h3>i want to send </h3>
        <div>

        </div>
     </form>
    </div>
   </CustomDrawer>
  )
}

export default AddTransferFund