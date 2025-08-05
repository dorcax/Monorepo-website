import CustomDrawer from '@/common/CustomDrawer'
import { usePopUp } from '@/context/PopUpContext'
import { X } from 'lucide-react'
import { Button } from '../ui/button'
import { transferNotifications } from '@/constant/notification'

const Notification = () => {
    const {closeDrawer} =usePopUp()
  return (
    <CustomDrawer className='overflow-y-auto shadow-2xl '>
        <div className='flex justify-between border-b border-b-black items-center'>
            <h2 className='font-bold text-2xl capitalize px-6'>notification</h2>
              <Button className='py-7 w-[50px] rounded-none' onClick={() => closeDrawer()}><X className='size-7' /></Button>
        </div>
      
       <div className='pl-6 pr-2'>
        {transferNotifications.map((t)=>(
            <div className='flex justify-between items-center border-b border-b-black py-6'>
                <div className='flex gap-2 items-center'>
                    <img src={t.image} alt=""   className='size-10 rounded-full '/>
                    <p className='text-wrap'>{t.text}</p>
                </div>
                <p>{t.time}</p>
            </div>
        ))}
       </div>

    </CustomDrawer>
  )
}

export default Notification