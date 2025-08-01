import AddTransferFund from "@/drawer/AddTransferFund";
import WithdrawFund from "@/drawer/WithdrawFunds";
import { ArrowRightLeft, Minus, Plus } from "lucide-react";



export const filteringButton =[{
    name:"fund wallet",
    icon:<Plus/>
    
},{
    name:"withdraw",
    icon:<Minus />,
    handleClick:<WithdrawFund/>

},{
    name:"transfer",
    icon:<ArrowRightLeft />,
    handleClick:<AddTransferFund />
}]