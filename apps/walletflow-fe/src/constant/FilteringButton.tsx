import AddTransferFund from "@/components/drawer/AddTransferFund";
import FundWallet from "@/components/drawer/FundWallet";
import WithdrawFund from "@/components/drawer/WithdrawFunds";
import { ArrowRightLeft, Minus, Plus } from "lucide-react";



export const filteringButton =[{
    name:"fund wallet",
    icon:<Plus/>,
    handleClick:<FundWallet/>
    
},{
    name:"withdraw",
    icon:<Minus />,
    handleClick:<WithdrawFund/>

},{
    name:"transfer",
    icon:<ArrowRightLeft />,
    handleClick:<AddTransferFund />
}]