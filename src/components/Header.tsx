import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <Flex w='100%' gap='50px' bg={'#2b2c5f'} color='white' minH={'50px'} >
            <Box px='20px' bg='#000000' py='10px'>
                <Text>Algorithm Visualizer</Text>
            </Box>
            <Flex gap='30px' py='10px'>
                <NavLink to='/'><Text variant='topMenu'>Home </Text></NavLink>
                <NavLink to='/about'><Text variant='topMenu'>About</Text></NavLink>
                <NavLink to='/github'><Text variant='topMenu'>GitHub</Text></NavLink>
            </Flex>
        </Flex>
    )
}

export default Header