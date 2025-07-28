import { ChevronsRight } from 'lucide-react'

const Summary = () => {
  return (
    <div className='grid grid-cols-3 gap-6  my-8'>

      <div className='bg-white shadow-lg rounded-2xl relative '>
        <div className='p-5 '>
          <h2 className='font-medium text-base'>Balance (NGN)</h2>
          <p className='inline-flex  items-center gap-2 font-bold text-lg py-3'><span><img src="./naira-sign.png" alt="naira logo" className='w-5 h-5 ' /></span> 3000.000</p>
        </div>
        <img src="./Nigeria-25.png" alt="" className='w-[36px] h-[36px] absolute top-3 right-3' />
      </div>


      <div className='bg-white shadow-lg rounded-2xl relative '>
        <div className='p-5'>
          <h2 className='font-medium text-base'>Balance (USD)</h2>
          <p className='inline-flex  items-center gap-2 font-bold text-xl py-3'><span><img src="./naira-sign.png" alt="naira logo" className='w-6 h-6 ' /></span> 0.000</p>
        </div>
        <img src="./usa_logo.jpg" alt="" className='w-[40px] h-[36px] absolute top-3 right-3' />
      </div>

      <div className='bg-white shadow-lg rounded-2xl relative '>
        <div className='p-5 flex items-center justify-center h-full min-h-[100px]'>
          <p className='inline-flex justify-center items-center'>see all wallets <span className='px-2 text-gray-600'><ChevronsRight /></span></p>
        </div>
        <img src="./usa_logo.jpg" alt="" className='w-[40px] h-[36px] absolute top-3 right-3' />
      </div>
    </div>
  )
}

export default Summary