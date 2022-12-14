import { Box, Button, Flex, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Text, Tooltip } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BsArrowDownShort } from 'react-icons/bs';
import { BubbleSort } from '../algorithms/SortingAlgo/BubbleSort'
const SortAlgoVisualizer = () => {

    const [animations, setanimations] = useState<Number[]>([])
    // usestate for slider value
    const [array, setArray] = useState<number[]>([])
    const [arrNum, setArrNum] = useState(20)
    const [arrnumTooltip, setArrNumTip] = useState(false)
    // range slider values
    const [arrRange, setArrRange] = useState([50, 200])
    // for speed slider
    const [speed, setSpeed] = useState(300)
    const [SpeedTooltip, setSpeedTip] = useState(false)
    const [loading, setloading] = useState(false);
    // const [loadingGen, setloadingGen] = useState(false);
    // function to generate random number
    let randomIntFromInterval = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // function to generate random array
    let generateArr = () => {
        console.log(loading);
        let arr = []
        for (let i = 0; i < arrNum; i++) {
            arr.push(randomIntFromInterval(arrRange[0], arrRange[1]))
        }
        setArray(arr);
        setloading(false)
        // setloadingGen(false)
        console.log(loading);
    }
    console.log(loading);
    useEffect(() => {
        generateArr();
    }, [])



    return (
        <Flex w='100%' direction='column' bg={'#2b2c5f'}>
            <Flex bg={'#2b2c5f'} w='100%' p='10px' gap='40px' alignItems={'center'} flexWrap='wrap'>
                <Button ml='5px' _hover={
                    {
                        bg: '#89ffa9',
                        transform: 'scale(1.1)',
                    }
                }
                    isLoading={loading}
                    onClick={() => {
                        setloading(true);
                        generateArr();

                    }}
                >Generate New array</Button>
                <Flex w='15%' direction={'column'} alignItems={'center'} gap='10px' pt='10px' my='10px'>
                    <Slider
                        id='slider'
                        defaultValue={arrNum}
                        min={10}
                        max={100}
                        colorScheme='teal'
                        onChange={(v) => setArrNum(v)}
                        onMouseEnter={() => setArrNumTip(true)}
                        onMouseLeave={() => setArrNumTip(false)}
                    >
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <Tooltip
                            hasArrow
                            bg='teal.500'
                            color='white'
                            placement='top'
                            isOpen={arrnumTooltip}
                            label={arrNum}
                        >
                            <SliderThumb />
                        </Tooltip>
                    </Slider>
                    <Text color='white'>Number of array</Text>
                </Flex>

                <Flex w='15%' direction={'column'} alignItems={'center'} gap='10px' pt='10px' my='10px'>
                    <RangeSlider
                        defaultValue={arrRange}
                        min={0} max={300}
                        onChangeEnd={(val) => setArrRange(val)}
                    >
                        <RangeSliderTrack>
                            <RangeSliderFilledTrack />
                        </RangeSliderTrack>
                        <RangeSliderThumb index={0} />
                        <RangeSliderThumb index={1} />
                    </RangeSlider>
                    <Text color='white'>Value Range</Text>
                </Flex>
                <Flex w='15%' direction={'column'} alignItems={'center'} gap='10px' pt='10px' my='10px'>
                    <Slider
                        id='slider'
                        defaultValue={speed}
                        min={50}
                        max={700}
                        colorScheme='teal'
                        onChange={(v) => setSpeed(v)}
                        onMouseEnter={() => setSpeedTip(true)}
                        onMouseLeave={() => setSpeedTip(false)}
                    >
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <Tooltip
                            hasArrow
                            bg='teal.500'
                            color='white'
                            placement='top'
                            isOpen={SpeedTooltip}
                            label={speed}
                        >
                            <SliderThumb />
                        </Tooltip>
                    </Slider>
                    <Text color='white'>Speed (in ms)</Text>
                </Flex>
                <Flex>
                    <Button bg='white'
                        // onClick={() => bubble()}
                        onClick={() => {
                            BubbleSort(array, setArray, setanimations, speed, setloading)
                            setloading(true)
                        }}
                        isLoading={loading}

                        _hover={
                            {
                                bg: '#c8c8ff',
                                transform: 'scale(1.1)',
                            }}
                    >Bubble Sort</Button>
                </Flex>
            </Flex>
            <Flex w='100%' bg='#102948' minH='60vh' alignItems={'flex-end'} gap='5px' mt={'10px'} p='20px' overflow='hidden'>
                {array?.map((val, i) => {
                    return (
                        <Flex direction='column-reverse' key={i}>
                            <Box h={`${val * 1.02}px`} w={`${1000 / arrNum}px`}
                                bg={animations.includes(i) ? '#ffee37' : 'white'}
                                borderTopRadius='11px'
                                // bg={color}
                                transition='height ease-in-out .2s' color='white'>
                            </Box>
                            {animations.includes(i) ? <BsArrowDownShort color='#ffee37' size={`${900 / arrNum}px`} /> : ''}
                        </Flex>
                    )
                })}
            </Flex>


        </Flex >
    )
}

export default SortAlgoVisualizer