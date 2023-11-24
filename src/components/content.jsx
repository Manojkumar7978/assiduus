import React from 'react'
import { Box, chakra } from '@chakra-ui/react'
import BarChart from './invoice';
import Watchlist from './watchlist';
import Cashflowchart from './cashflowchart';
import Checkac from './checkac';

export default function Content() {
    const data = [
        {
            tag:'Older',
            value:10
        },
        {
            tag:'Jan 01-08',
            value:20
        },
        {
            tag:'Jan 09-16',
            value:40
        },
        {
            tag:'Jan 17-24',
            value:25
        },
        {
            tag:'Jan 25-32',
            value:35
        },
        {
            tag:'Future',
            value:20
        },
    ];
    let cashflowData=[
        {
            month:'August',
            in:40,
            out:20,
        },
        {
            month:'September',
            in:50,
            out:30,
        },
        {
            month:'October',
            in:90,
            out:50,
        },
        {
            month:'November',
            in:50,
            out:40,
        },
        {
            month:'December',
            in:50,
            out:30,
        },
        {
            month:'January',
            in:90,
            out:40,
        },
    ]

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
                <Checkac data={cashflowData} />
            </Box>
            <Box w={'550px'} h={'350px'}
                boxShadow={'md'}
                bg={'white'}
                borderRadius={10}
            >
                <BarChart data={data} />
            </Box>
            <Box w={'550px'} h={'350px'}
                boxShadow={'md'}
                bg={'white'}
                borderRadius={10}
            >
                <Cashflowchart data={cashflowData} />
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
