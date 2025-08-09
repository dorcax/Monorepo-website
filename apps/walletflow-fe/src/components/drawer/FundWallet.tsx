import CustomDrawer from '@/common/CustomDrawer'
import { Button } from '@/components/ui/button'
import {
    Form
} from "@/components/ui/form"
import { usePopUp } from '@/context/PopUpContext'
import { X } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import FundWalletStep1 from '../formSteps/fundwallet/FundWalletStep1'
import FundWalletStep2 from '../formSteps/fundwallet/FundWalletStep2'
import ShareReceipt from '../formSteps/fundwallet/ShareReceipt'
const FundWallet = () => {
    const [isFormSubmitted, setFormSubmitted] = useState(false)
    const { closeDrawer } = usePopUp()
    const [step, setStep] = useState(1)
    const [method, setMethod] = useState("card")
    const form = useForm()
    const onSubmit = () => {

        setFormSubmitted(true)
        console.log("hello")
    }



    return (
        <CustomDrawer className='bg-white py-12 px-10'>
            <Button className='absolute top-0 -left-[50px] py-6 w-[50px] rounded-r-none rounded-tl-none' onClick={() => closeDrawer()}><X className='size-7' /></Button>
            <div>
                {step === 1 && <div> <h2 className='text-2xl font-bold '>Fund Wallet</h2>
                    <p className='text-[#565656] text-sm mt-2'>To fund wallet provide the details below</p></div>}

                {step == 2 &&
                    (
                        method === "card" ? (
                            <div>
                                <h2 className='text-2xl font-semibold capitalize'>fund with card</h2>
                                <p className='text-[#565656] text-sm mt-2'>Your CVV is the 3-digit number behind your card</p>
                            </div>
                        ) : (
                            <div>
                                <h2 className='text-2xl font-semibold capitalize'>Bank transfer</h2>
                                <p className='text-[#565656] text-sm py-2'>Tansfer the amount mentioned below to AmaPay
                                    and provide the transaction receipt for the transfer.</p>
                            </div>

                        )
                    )
                }

                {/* step3 text */}
                {step == 3  && <div>
                    <h2 className='text-2xl font-semibold capitalize'>share receipt</h2>
                    <p className='text-[#565656] text-sm pt-1'>Please share a screenshot or picture of the
                        transaction receipt for fast confirmation.</p>
                </div>}
            </div>
            <div className=' mt-11'>

                <Form {...form}>
                    <form action="" onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                        {/* wallet and amount */}
                        {step === 1 && <FundWalletStep1 form={form} isFormSubmitted={isFormSubmitted} setStep={setStep} />}

                        {/* step2 */}
                        {step === 2 && <FundWalletStep2 form={form} isFormSubmitted={isFormSubmitted} setStep={setStep} method={method} />}

                        {/* step3 */}
                        {step === 3 && <ShareReceipt isFormSubmitted={isFormSubmitted} />}

                    </form>


                </Form>
            </div>
        </CustomDrawer>
    )
}

export default FundWallet