import React, {useEffect, useState} from 'react'
import { Box,  chakra } from '@chakra-ui/react'
import BarChart from './invoice';
import Watchlist from './watchlist';
import Cashflowchart from './cashflowchart';
import Checkac from './checkac';
import { getRandomNumber } from './data';


export default function Content() {
    
    let [invoiceData,setInvoiceData]=useState([])
    let [cashflowData,setCashflowData]=useState([])
    let [accountData,setAccountData]=useState([])
    function randomdata(){
        const invoice = [
            {
                tag:'Older',
                value:getRandomNumber()
            },
            {
                tag:'Jan 01-08',
                value:getRandomNumber()
            },
            {
                tag:'Jan 09-16',
                value:getRandomNumber()
            },
            {
                tag:'Jan 17-24',
                value:getRandomNumber()
            },
            {
                tag:'Jan 25-32',
                value:getRandomNumber()
            },
            {
                tag:'Future',
                value:getRandomNumber()
            },
        ];
        let cashflow=[
            {
                month:'August',
                in:getRandomNumber(),
                out:getRandomNumber(),
            },
            {
                month:'September',
                in:getRandomNumber(),
                out:getRandomNumber(),
            },
            {
                month:'October',
                in:getRandomNumber(),
                out:getRandomNumber(),
            },
            {
                month:'November',
                in:getRandomNumber(),
                out:getRandomNumber(),
            },
            {
                month:'December',
                in:getRandomNumber(),
                out:getRandomNumber(),
            },
            {
                month:'January',
                in:getRandomNumber(),
                out:getRandomNumber(),
            },
        ]
        let account=[
            {
                id:9,
                value:getRandomNumber()
            },
            {
                id:10,
                value:getRandomNumber()
            },
            {
                id:11,
                value:getRandomNumber()
            },
            {
                id:12,
                value:getRandomNumber()
            },
            {
                id:13,
                value:getRandomNumber()
            },
            {
                id:14,
                value:getRandomNumber()
            },
            {
                id:15,
                value:getRandomNumber()
            },
            {
                id:16,
                value:getRandomNumber()
            },
            {
                id:17,
                value:getRandomNumber()
            },
            {
                id:18,
                value:getRandomNumber()
            },
        ]
        setCashflowData([...cashflow])

        setInvoiceData([...invoice])
        setAccountData([...account])
    }
    useEffect(()=>{
        randomdata()
    },[])
    return (
        <chakra.div
            bg={'#f6f7f9'}
            p={10}
            display={'grid'}
            gridTemplateColumns={'repeat(2, 1fr)'}
            gap={5}
        >
            
            <Box w={'550px'} h={'350px'}
                boxShadow={'md'}
                bg={'white'}
                borderRadius={10}
            >
                <Checkac accountData={accountData} />
            </Box>
            <Box w={'550px'} h={'350px'}
                boxShadow={'md'}
                bg={'white'}
                borderRadius={10}
            >
                <BarChart data={invoiceData} />
            </Box>
            <Box w={'550px'} h={'350px'}
                boxShadow={'md'}
                bg={'white'}
                borderRadius={10}
            >
                <Cashflowchart cashflowData={cashflowData} />
            </Box>
            <Box w={'550px'} h={'350px'}
                boxShadow={'md'}
                bg={'white'}
                borderRadius={10}
            >
                <Watchlist />
            </Box>
            



        </chakra.div>
    )
}
