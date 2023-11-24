import { MdDashboard,MdAccountBalanceWallet  } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa6";
import { BiSolidReport } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
import { BiSolidContact } from "react-icons/bi";

function getRandomNumber() {
    return Math.floor(Math.random() * (100 - 10 + 1)) + 10;
  }

let menu=[
    {
        logo:<MdDashboard size={25}/>,
        title:'Dashboard'
    },
    {
        logo:<MdAccountBalanceWallet  size={25}/>,
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

let watchlistData=[
    {
        account:'Sales',
        current:1194.58,
        ytd:11418.36
    },
    {
        account:'Advertising',
        current:6879.02,
        ytd:9271.36
    },
    {
        account:'Inventory',
        current:4692.26,
        ytd:9768.09
    },
    {
        account:'Entertainment',
        current:0.00,
        all:0.00
    },
    {
        account:'Product',
        current:4652.10,
        ytd:2529.90
    },
    
]



export default menu;
export {
    watchlistData,
    getRandomNumber,
}