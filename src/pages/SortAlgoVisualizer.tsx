import { Button, Flex, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Text, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { BubbleSort } from '../algorithms/SortingAlgo/BubbleSort'
const SortAlgoVisualizer = () => {
    // usestate for slider value
    const [array, setArray] = React.useState<number[]>([])
    const [arrNum, setArrNum] = React.useState(20)
    const [arrnumTooltip, setArrNumTip] = React.useState(false)
    // range slider values
    const [arrRange, setArrRange] = React.useState([50, 200])
    console.log(arrRange);

    // function to generate random number
    let randomIntFromInterval = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    // function to generate random array
    let generateArr = () => {
        let arr = []
        for (let i = 0; i < arrNum; i++) {
            arr.push(randomIntFromInterval(arrRange[0], arrRange[1]))
        }
        setArray(arr);
        console.log(arr)
    }

    return (
        <Flex w='100%'>
            <Flex bg={'#2b2c5f'} w='100%' p='10px' gap='20px' alignItems={'center'}>
                <Button ml='5px' _hover={
                    {
                        bg: '#89ffa9',
                        transform: 'scale(1.1)',
                    }
                }
                    onClick={generateArr}
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
                <Flex>
                    <Button bg='white'
                        _hover={
                            {
                                bg: '#c8c8ff',
                                transform: 'scale(1.1)',
                            }}
                    >Bubble Sort</Button>
                </Flex>
            </Flex>

        </Flex >
    )
}

export default SortAlgoVisualizer