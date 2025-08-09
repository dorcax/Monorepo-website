import CustomDrawer from '@/common/CustomDrawer'
import { Button } from '@/components/ui/button'
import {
  Form
} from "@/components/ui/form"
import { usePopUp } from '@/context/PopUpContext'
import { X } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Step1 from '../formSteps/Transfer fund/Step1'
import Step2 from '../formSteps/Transfer fund/Step2'
import Step3 from '../formSteps/withdraw fund/Step3'
const AddTransferFund = () => {
  const form = useForm()
  const onSubmit = () => {
    console.log("hello")
  }
  const { closeDrawer } = usePopUp()
  const [step, setStep] = useState(0)
  return (
    // title='Transfer Funds ' subtext='select the currency you want to transfer funds to' 
    <CustomDrawer
      className='bg-white  py-12 px-10 border sm:max-w-[450px]'>
      <Button className='absolute top-0 -left-[50px] py-6 w-[50px] rounded-r-none rounded-tl-none'  onClick={() => closeDrawer()} >
        <X className='size-7'/>
        
        </Button>
      {step === 0 && <div>
        <h2 className='text-2xl font-bold capitalize'>Transfer fund</h2>
        <p className='text-[#565656]  text-sm mt-2'>select the currency you want to transfer funds to</p>
      </div>}
       {step === 1 && <div>
        <h2 className='text-2xl font-bold capitalize'>Select Recipient </h2>
        <p className='text-[#565656] mt-2 text-sm'>select  a recipient tbank account to transfer to</p>
      </div>}
        {step === 2 && <div>
        <h2 className='text-2xl font-bold capitalize'>add Recipient </h2>
        <p className='text-[#565656] mt-2 text-sm'>please ensure you fill the form correctly</p>
      </div>}
      <div className='mt-10'>
        <Form {...form}>
          <form action="" onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
            {/* <p>i want to send</p> */}
            {step ===0 && <Step1 setStep={setStep} form={form}/>}
      

           {step ===1 &&<Step2 form={form} setStep={setStep}/>}
           {step===2 &&<Step3 form={form}  />}
          </form>


        </Form>
      </div>
    </CustomDrawer>
  )
}

export default AddTransferFund