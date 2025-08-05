import { ChevronsRight } from 'lucide-react'

const Summary = () => {
  return (
    <div className='grid grid-cols-3 gap-6  my-8'>

      <div className='bg-white shadow-lg rounded-2xl flex justify-between p-4  '>
        <div className=''>
          <h2 className='font-semibold text-base'>Balance (NGN)</h2>
          <p className='inline-flex  items-center gap-2 text-lg py-3'>
            <img src="./naira-sign.png" alt="naira logo" className='w-5 h-5  ' />
         <span className='font-bold text-3xl'>8600.00</span></p>
        </div>
        <img src="./Nigeria-25.png" alt="" className='size-6 ' />
      </div>


     
      <div className='bg-white shadow-lg rounded-2xl flex justify-between p-4  '>
        <div className=''>
          <h2 className='font-semibold text-base'>Balance (USD)</h2>
          <p className='inline-flex  items-center gap-2 text-lg py-3'>
            <img src="./naira-sign.png" alt="naira logo" className='w-5 h-5  ' />
         <span className='font-bold text-3xl'>0.00</span></p>
        </div>
        <img src="./usa_logo.jpg" alt="" className='size-6 ' />
      </div>


   
      <div className='bg-white shadow-lg rounded-2xl flex justify-between p-4  '>
        
            <div className='flex items-center justify-center '>
          <p className=''>see all wallets </p>
          <span className='px-2 text-gray-600'><ChevronsRight /></span>
        </div>
        
        <img src="./usa_logo.jpg" alt="" className='size-6' />
      
       
      </div>

    </div>
  )
}

export default Summary