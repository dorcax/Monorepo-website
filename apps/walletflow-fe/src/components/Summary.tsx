import { ChevronsRight, CircleAlert } from 'lucide-react'

const Summary = () => {
  return (
    <div className='grid grid-cols-3 gap-6  my-8'>

      <div className='bg-white rounded-2xl flex justify-between p-6 pb-7  '>
        <div className=''>
          <h2 className='font-semibold text-base'>Balance (NGN)</h2>
          <p className='mt-6 font-semibold text-2xl'>

            ₦ 8,453.00</p>
        </div>
        <img src="./NG Nigeria.png" alt="" className='size-6 ' />
      </div>
      <div className='bg-white  rounded-2xl flex justify-between p-4 pb-6 '>
        <div className=''>
          <h2 className='font-semibold text-base'>Balance (USD)</h2>
          <p className='mt-6 font-semibold text-2xl'>

            $ 0.00</p>
        </div>
        <img src="./Group 55475.png" alt="" className='size-6 ' />
      </div>
      <div className="bg-white  rounded-2xl relative flex items-center justify-center p-4 ">
        {/* Centered text + chevron */}
        <div className="flex items-center">
          <p>see all wallets</p>
          <span className="px-2 text-gray-600">
            <ChevronsRight />
          </span>
        </div>

        {/* Top-right image */}
        <img
          src="./Vector (1).png"
          alt=""
          className="size-4 absolute top-4 right-4"
        />
      </div>


    </div>
  )
}

export default Summary