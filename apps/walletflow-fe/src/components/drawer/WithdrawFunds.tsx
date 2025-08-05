import CustomDrawer from '@/common/CustomDrawer'
import Step1 from '@/components/formSteps/withdraw fund/Step1'
import Step2 from '@/components/formSteps/withdraw fund/Step2'
import Step3 from '@/components/formSteps/withdraw fund/Step3'
import { Button } from '@/components/ui/button'
import {
    Form
} from "@/components/ui/form"
import { usePopUp } from '@/context/PopUpContext'
import { X } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
const WithdrawFund = () => {
    const [isFormSubmitted, setFormSubmitted] = useState(false)
    const {closeDrawer} =usePopUp()
    const [step, setStep] = useState(1)
    const form = useForm()
    const onSubmit = () => {

        setFormSubmitted(true)
        console.log("hello")
    }



    return (
        <CustomDrawer className='bg-white shadow-5xl py-12 px-4'>
            <Button className='fixed top-0 left-[71.3%] py-6 w-[50px] rounded-r-none rounded-tl-none' onClick={()=>closeDrawer()}><X className='size-7' /></Button>
            <div>
                {step === 1 && <div> <h2 className='text-xl font-semibold '>Withdraw</h2>
                    <p className='text-gray-500 text-sm'>provide the details below to withdraw</p></div>}

                {step == 2 && <div>
                    <h2 className='text-xl font-semibold capitalize'>select bank</h2>
                    <p className='text-gray-500 text-sm py-2'>You can only withdraw to a  bank account in the same
                        currency and country you funded from. <span className='font-semibold text-gray-800'>Learn more</span></p>
                </div>}

                {/* step3 text */}
                {step == 3 && <div>
                    <h2 className='text-xl font-semibold capitalize'>add bank</h2>
                    <p className='text-gray-500 text-xs'>You can only withdraw to a  bank account in the same
                        currency and country you funded from. Learn more</p>
                </div>}
            </div>
            <div className=' py-6'>

                <Form {...form}>
                    <form action="" onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                        {/* wallet and amount */}
                        {step === 1 && <Step1 form={form} isFormSubmitted={isFormSubmitted} setStep={setStep} />}

                        {/* step2 */}
                        {step === 2 && <Step2 form={form} isFormSubmitted={isFormSubmitted} setStep={setStep} />}

                        {/* step3 */}
                        {step === 3 && <Step3 form={form} isFormSubmitted={isFormSubmitted}/>}

                    </form>


                </Form>
            </div>
        </CustomDrawer>
    )
}

export default WithdrawFund