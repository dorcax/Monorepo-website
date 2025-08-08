import { CircleAlert } from 'lucide-react'
import { Button } from '../../ui/button'

const RenderBankTransfer = ({setStep}:{setStep:(n:number)=>void}) => {
    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-1 ">
                <h3 className="capitalize font-semibold text-base">amount</h3>
                <span className="text-[#4C4C4C] text-base">NGN 100,000</span>
            </div>
            <div className="flex justify-between items-center border-b pb-1 ">
                <h3 className="capitalize font-semibold text-base">account number</h3>
                <span className="text-[#4C4C4C] text-base">7041068234</span>
            </div>
            <div className="flex justify-between items-center  border-b  pb-1">
                <h3 className="capitalize font-semibold text-base">bank name</h3>
                <span className="text-[#4C4C4C] text-base">opay</span>
            </div>
            <div className="flex justify-between items-center border-b pb-1">
                <h3 className="capitalize font-semibold text-base">beneficiary</h3>
                <span className="text-[#4C4C4C] text-base">ibrahim dorcas o </span>
            </div>
            <Button className="w-full mt-4 py-5 text-sm " onClick={()=>setStep(3)}> I have made this bank transfer</Button>
            <div className="flex  gap-1.5 mt-4">
                {/* <CircleAlert className="size-8" /> */}
                <img src="./Vector (2).png" alt=""className='size-4 mt-[4px]' />
                <p className="text-sm text-[#2D2D2D] font-semibold">The account details is only valid for this specific transaction and it'll expire by <span className='font-bold'>12:52PM (today)</span>. </p>
            </div>
        </div>
    )
}

export default RenderBankTransfer