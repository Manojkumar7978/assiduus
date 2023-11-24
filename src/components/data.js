import { MdDashboard,MdAccountBalanceWallet } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa6";
import { BiSolidReport } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
import { BiSolidContact } from "react-icons/bi";

let menu=[
    {
        logo:<MdDashboard size={25}/>,
        title:'Dashboard'
    },
    {
        logo:<MdAccountBalanceWallet size={25}/>,
        title:'Accounts'
    },
    {
        logo:<FaDollarSign size={25}/> ,
        title:'Payroll'
    },
    {
        logo:<BiSolidReport size={25}/>,
        title:'Reports'
    },
    {
        logo:<IoPerson size={25}/>,
        title:'Advisor'
    },
    {
        logo:<BiSolidContact size={25}/>,
        title:'Contacts'
    }
]

export default menu;