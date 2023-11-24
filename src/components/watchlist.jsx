import { Box, Heading ,Table, Th, Thead, Tr,
Tbody,
Td
} from '@chakra-ui/react'
import React from 'react'
import { watchlistData } from './data'

export default function Watchlist() {
  return (
    <Box>
        <Box h={'50px'}
        borderBottom={'1px solid #e6edfa'}
        display={'grid'}
        alignItems={'center'}
        paddingLeft={'10px'}
        ><Heading size={'md'}>Account watchlist</Heading></Box>
        <Table variant="unstyled">
            <Thead >
                <Tr color={'#adbbcc'} >
                    <Th w={'300px'}>Account</Th>
                    <Th>This month</Th>
                    <Th>YTD</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    watchlistData.map((el,ind)=>{
                        return <Tr key={el.account} fontWeight={'bolder'}>
                            <Td pt={0}>{el.account}</Td>
                            <Td pt={0}>{el.current}</Td>
                            <Td pt={0}>{el.ytd}</Td>
                        </Tr>
                    })
                }
                
            </Tbody>

        </Table>
      
    </Box>
  )
}
