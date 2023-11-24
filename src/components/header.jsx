import React from 'react'
import { Input, InputGroup, 
    Avatar,
    InputLeftElement, chakra } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import { IoMdNotifications } from "react-icons/io";
import { GoTriangleDown } from "react-icons/go";


export default function Header() {
    return (
        <chakra.div h={'70px'}
            boxShadow={'md'}
            display={'flex'}
             justifyContent={'flex-end'} 
             gap={7}
             p={'0 28px'}
             alignItems={'center'}
        >
                <InputGroup maxW={'300px'}>
                    <InputLeftElement pointerEvents='none'>
                        <Search2Icon color='#363e44'  />
                    </InputLeftElement>
                    <Input bg={'#f6f7f9'} borderRadius={10} type='text'/>
                </InputGroup>
            <IoMdNotifications size={25} />
            <Avatar size='sm' name='Manoj Padhy' src='' />{' '}
            <GoTriangleDown size={25}/>
        </chakra.div>
    )
}
