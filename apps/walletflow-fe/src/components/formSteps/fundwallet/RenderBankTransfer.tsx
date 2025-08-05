import { CircleAlert } from 'lucide-react'
import { Button } from '../../ui/button'

const RenderBankTransfer = ({setStep}:{setStep:(n:number)=>void}) => {
    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-1 ">
                <h3 className="capitalize font-semibold text-sm">amount</h3>
                <span className="text-gray-700">100,000</span>
            </div>
            <div className="flex justify-between items-center border-b pb-1 ">
                <h3 className="capitalize font-semibold text-sm">account number</h3>
                <span className="text-gray-700">7041068234</span>
            </div>
            <div className="flex justify-between items-center  border-b  pb-1">
                <h3 className="capitalize font-semibold text-sm">bank name</h3>
                <span className="text-gray-700">opay</span>
            </div>
            <div className="flex justify-between items-center border-b pb-1">
                <h3 className="capitalize font-semibold text-sm">beneficiary</h3>
                <span className="text-gray-700">ibrahim dorcas o </span>
            </div>
            <Button className="w-full " onClick={()=>setStep(3)}> i have made this bank transfer before</Button>
            <div className="flex gap-1 py-2">
                <CircleAlert className="size-8" />
                <p className="text-sm text-gray-700">The account details is only valid for this specific transaction and it'll expire by 12:52PM (today). </p>
            </div>
        </div>
    )
}

export default RenderBankTransfer