import { Box } from "@chakra-ui/react";
import { Box, Flex, Text, IconButton, Button, Stack, Collapse, useColorModeValue, useBreakpointValue, useDisclosure, Image } from '@chakra-ui/react';


export default function TopHero(){
  return (
    <Box>
   
   <Flex pt='1.5rem'

bg={useColorModeValue('white', 'gray.800')}
      border='1px solid red'
      w='100%'
      height='80px'

   >

<Button
        display={{ base: 'none', md: 'inline-flex' }}
    
        to='/login'
        color={'gray'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        Select Department (12)   
         <img src="" alt="" /> 
      
     </Button>
   
   
   

     {/* <Stack mt> */}
     <Button

        display={{ base: 'none', md: 'inline-flex' }}
    
        to='/login'
        color={'gray'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
    <Text>  Sun   6 march , 2022  </Text>  
     </Button>

     <Button
        display={{ base: 'none', md: 'inline-flex' }}
        fontSize={'sm'}
        fontWeight={600}
        color={'white'}
      
      
        bg="orange"
        pt='8px'
        _dark={{ bg: "orange.500" }}
        _hover={{
           bg: "orange.400",
           boxShadow: "rgba(123, 213, 133, 0.400) 0px 3px 7px 3px"
        }}>
     Today
     </Button>
  
<Stack pl='750px'>
<img src="" alt="" />
</Stack>

<Button

display={{ base: 'none', md: 'inline-flex' }}

to='/login'
color={'gray'}
fontSize={'md'}
fontWeight={500}
variant={'shadow'}
// bg= "green.400"
_hover={{ gray: 'white' }}
>
<Text>  Print </Text>  
</Button>

<Button

display={{ base: 'none', md: 'inline-flex' }}

to='/login'
color={'gray'}
fontSize={'md'}
fontWeight={500}
variant={'shadow'}
// bg= "green.400"
_hover={{ gray: 'white' }}
>
<Text> download pdf </Text>  
</Button>

<Button

display={{ base: 'none', md: 'inline-flex' }}

to='/login'
color={'gray'}
fontSize={'md'}
fontWeight={500}
variant={'shadow'}
// bg= "green.400"
_hover={{ gray: 'white' }}
>
<Text>  Employee report  </Text>  
</Button>

<Button

display={{ base: 'none', md: 'inline-flex' }}

to='/login'
color={'gray'}
fontSize={'md'}
fontWeight={500}
variant={'shadow'}
// bg= "green.400"
_hover={{ gray: 'white' }}
>
<Text>  Time-Table  </Text>  
</Button>


<Button
        display={{ base: 'none', md: 'inline-flex' }}
        fontSize={'sm'}
        fontWeight={600}
        color={'white'}
        w='11%'
      
      
        bg="orange"
        pt='8px'
        _dark={{ bg: "orange.500" }}
        _hover={{
           bg: "orange.400",
           boxShadow: "rgba(123, 213, 133, 0.400) 0px 3px 7px 3px"
        }}>
     Publish-Shedule
     </Button>
 
</Flex>

      {/* <svg id="stars" style="display: none;" version="1.1">
        <symbol id="stars-full-star" viewBox="0 0 102 18">
          <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218" />
        </symbol>

        <symbol id="stars-half-star" viewBox="0 0 102 18">
          <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792" fill="#e9ba26" />
        </symbol>

        <symbol id="stars-all-star" viewBox="0 0 102 18">
          <use xlink:href="#stars-full-star" />
          <use xlink:href="#stars-full-star" transform="translate(21)" />
          <use xlink:href="#stars-full-star" transform="translate(42)" />
          <use xlink:href="#stars-full-star" transform="translate(63)" />
          <use xlink:href="#stars-full-star" transform="translate(84)" />
        </symbol>

        <symbol id="stars-0-0-star" viewBox="0 0 102 18">
          <use xlink:href="#stars-all-star" fill="#9b9b9b" />
        </symbol>

        <symbol id="stars-0-5-star" viewBox="0 0 102 18">
          <use xlink:href="#stars-0-0-star" />
          <use xlink:href="#stars-half-star" />
        </symbol>

        <symbol id="stars-1-0-star" viewBox="0 0 102 18">
          <use xlink:href="#stars-0-0-star" />
          <use xlink:href="#stars-full-star" fill="#e9ba26" />
        </symbol>

        <symbol id="stars-1-5-star" viewBox="0 0 102 18">
          <use xlink:href="#stars-1-0-star" />
          <use xlink:href="#stars-half-star" transform="translate(21)" />
        </symbol>

        <symbol id="stars-2-0-star" viewBox="0 0 102 18">
          <use xlink:href="#stars-1-0-star" />
          <use xlink:href="#stars-full-star" fill="#e9ba26" transform="translate(21)" />
        </symbol>

        <symbol id="stars-2-5-star" viewBox="0 0 102 18">
          <use xlink:href="#stars-2-0-star" />
          <use xlink:href="#stars-half-star" transform="translate(42)" />
        </symbol>

        <symbol id="stars-3-0-star" viewBox="0 0 102 18">
          <use xlink:href="#stars-2-0-star" />
          <use xlink:href="#stars-full-star" fill="#e9ba26" transform="translate(42)" />
        </symbol>

        <symbol id="stars-3-5-star" viewBox="0 0 102 18">
          <use xlink:href="#stars-3-0-star" />
          <use xlink:href="#stars-half-star" transform="translate(63)" />
        </symbol>

        <symbol id="stars-4-0-star" viewBox="0 0 102 18">
          <use xlink:href="#stars-3-0-star" />
          <use xlink:href="#stars-full-star" fill="#e9ba26" transform="translate(63)" />
        </symbol>

        <symbol id="stars-4-5-star" viewBox="0 0 102 18">
          <use xlink:href="#stars-4-0-star" />
          <use xlink:href="#stars-half-star" transform="translate(84)" />
        </symbol>

        <symbol id="stars-5-0-star" viewBox="0 0 102 18">
          <use xlink:href="#stars-all-star" fill="#e9ba26" />
        </symbol>
      </svg>

      <svg class="icon">
        <use xlink:href="#stars-4-5-star">
      </svg> */}
      nehaaaaaaaaaa
    </Box>
  )
}