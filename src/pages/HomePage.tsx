import React from 'react'
import { Flex, Text } from '@chakra-ui/react';
import Algotabs from '../components/Algotabs';
import algo from '../SupportedAlgo.json';

const HomePage = () => {

    return (
        <Flex w='100%' direction={'column'} gap='30px'>
            <Flex alignItems='center' justifyContent={'center'}
                w='100%'
                direction='column'
                bg={'#121228'}
                py='100px'>
                <Text fontSize='6xl' color={'white'}>Algorithm Visualizer (Beta)</Text>
                <Text fontSize='3xl' ml='10px' color='#9e82b2'>v0.1.0 Beta</Text>
            </Flex>
            <Flex px='50px' >
                {algo.map((algo, index) => (
                    <Algotabs keys={index} details={algo} />
                ))}
            </Flex>
        </Flex >
    )
}

export default HomePage