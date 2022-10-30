import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react'
import { NavLink } from 'react-router-dom';
interface Algorithm {
    keys: number,
    details: {
        name: string,
        link: string,
        coverPic: string
    }
};
const Algotabs = (props: Algorithm) => {
    let { details } = props;
    return (
        <>
            <NavLink to={details.link}>
                <Flex w='25%' bg='blue.900' borderRadius='20px' overflow='hidden' direction={'column'} pb='10px'
                    transition={'all 0.3s ease-in-out'}
                    _hover={
                        {
                            transform: 'scale(1.1)',
                        }
                    }>
                    <Image src={details.coverPic} />
                    <Text color={'white'} ml='20px'
                        fontSize='2xl'>
                        {details.name}
                    </Text>

                </Flex >
            </NavLink>
        </>
    )
}

export default Algotabs