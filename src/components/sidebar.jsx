import React, { useState } from 'react'
import {chakra,Image,Text} from '@chakra-ui/react'
import menu from './data'
export default function Sidebar() {
let[activemenu,setActivemenu]=useState(0)



  return (
    <chakra.div w={'240px'} 
    boxShadow='md'
    h={'100vh'}
    >
        <Image  alt='logo' w={'200px'}
        m={'auto'}
        mb={50}
        mt={'16px'}
        src='https://desk.assiduus.in/content/images/2023/08/Assiduus_TM_Logo--1-.png'/>

        {
          menu.map((el,ind)=>{
            return <chakra.div className={`menu ${activemenu===ind && 'active'}`} 
            onClick={()=>{setActivemenu(ind)}}
            key={el.title} display={'flex'} p={'20px'} pl={7}
            cursor={'pointer'}
            // _hover={{bg:'#47b747',color:'white'}}
            color={'#333333'}
            fontWeight={'500'}
            alignItems={'center'} gap={'10px'}>
            {
              el.logo
            }
            <Text size={'24px'}>{el.title}</Text>
            </chakra.div>
          })
        }
    </chakra.div>
  )
}
