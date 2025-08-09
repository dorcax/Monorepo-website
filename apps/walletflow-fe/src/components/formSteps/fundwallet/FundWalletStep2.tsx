import { usePopUp } from "@/context/PopUpContext"
import RenderBankTransfer from "../fundwallet/RenderBankTransfer"
import RenderCardTransfer from "../fundwallet/RenderCardTransfer"
type step1Props = {
    form: any,
    isFormSubmitted?: boolean,
    setStep: (value: number) => void
    method: string
}
const FundWalletStep2 = ({ form, setStep, isFormSubmitted, method }: step1Props) => {
    const { openDialog } = usePopUp()
    return (
        <div>
            {/* amount */}
            {method === "card" ? (

            <RenderCardTransfer form={form} isFormSubmitted={isFormSubmitted} openDialog={openDialog}/>
            ) :
              <RenderBankTransfer setStep={setStep}/>
            }

        </div>
    )
}

export default FundWalletStep2