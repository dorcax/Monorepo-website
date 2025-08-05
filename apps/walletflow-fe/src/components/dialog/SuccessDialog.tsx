import CustomDialog from '@/common/CustomDialog'
import { usePopUp } from '@/context/PopUpContext'
import { Button } from '../ui/button'

const SuccessDialog = ({text,logo,submitText}:{text:string,logo:string,submitText:string}) => {
    const {closeDialog} =usePopUp()
  return (
    <CustomDialog className='bg-white shadow-2xl w-[300px]'>
        <div className='flex flex-col justify-center items-center space-y-8  text-black'>
         {/* logo */}
         <img src={logo} alt="successlogo"  className='size-20  mt-2' />
         <p className=' text-lg text-center'>{text}</p>
         <Button className='w-full text-lg' onClick={()=>closeDialog()}>{submitText}</Button>
        </div>

    </CustomDialog>
  )
}

export default SuccessDialog