import { Box, Flex, Text, IconButton, Button, Stack, Collapse, useColorModeValue, useBreakpointValue, useDisclosure, Image } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import DesktopNav from './DesktopNav/DesktopNav';
import MobileNav from './MobileNav/MobileNav';
import everhourLogo from '../../assets/Everhour-logo.png';


const NAV_ITEMS = [
   {
      label: 'Dashboard',
      tag: 'New',
      children: [
         {
            label: ' Task',
            link: '/',
            logo: 'https://raw.githubusercontent.com/Madhukesh06/efficacious-talk-3107/master/src/assets/Integrations/asana.png'
         },
         {
            label: 'Inventory',
            link: '/',
            logo: 'https://raw.githubusercontent.com/Madhukesh06/efficacious-talk-3107/master/src/assets/Integrations/clickup.png'
         },
         {
            label: 'Finance',
            link: '/',
            logo: 'https://raw.githubusercontent.com/Madhukesh06/efficacious-talk-3107/master/src/assets/Integrations/basecamp.png'
         },
         {
            label: 'Shedule ',
            link: '/',
            logo: 'https://raw.githubusercontent.com/Madhukesh06/efficacious-talk-3107/master/src/assets/Integrations/trello.png'
         },
         {
            label: 'Workforce',
            link: '/',
            logo: 'https://raw.githubusercontent.com/Madhukesh06/efficacious-talk-3107/master/src/assets/Integrations/jira.png'
         },
         {
            label: 'Catering Orders',
            link: '/',
            logo: 'https://raw.githubusercontent.com/Madhukesh06/efficacious-talk-3107/master/src/assets/Integrations/monday.png'
         },
         {
            label: 'Operation',
            link: '/',
            logo: 'https://raw.githubusercontent.com/Madhukesh06/efficacious-talk-3107/master/src/assets/Integrations/github.png'
         },
         {
            label: 'm engineering',
            link: '/',
            logo: 'https://raw.githubusercontent.com/Madhukesh06/efficacious-talk-3107/master/src/assets/Integrations/gitlab.png'
         },
         {
            label: 'other cheks',
            link: '/',
            logo: 'https://raw.githubusercontent.com/Madhukesh06/efficacious-talk-3107/master/src/assets/Integrations/todoist.png'
         },
         {
            label: 'check-in',
            link: '/',
            logo: 'https://raw.githubusercontent.com/Madhukesh06/efficacious-talk-3107/master/src/assets/Integrations/notion.png'
         },
         {
            label: 'check-out',
            link: '/',
            logo: 'https://raw.githubusercontent.com/Madhukesh06/efficacious-talk-3107/master/src/assets/Integrations/xero.png'
         },
         {
            label: 'QuickBooks',
            link: '/',
            logo: 'https://raw.githubusercontent.com/Madhukesh06/efficacious-talk-3107/master/src/assets/Integrations/quickbooks.png'
         }
      ]
   },
   {
      label: '',
      link: '/pricing'
   },
   {
 
      label: '',
      link: '/dem'
   
   }
];




const Navbar = () => {
   const { isOpen, onToggle } = useDisclosure();

   return (
      <Box
         pt={{ base: 0, sm: 0, md: 2, lg: 5 }}
         position="sticky"
         top={{ base: 0, sm: 0, md: -2, lg: -5 }}
         zIndex={7}
      >
         <Flex
            bg={useColorModeValue('white', 'gray.800')}
            color={useColorModeValue('gray.600', 'white')}
            minH={'60px'}
            py={{ base: 2 }}
            px={{ base: 4, sm: 4, md: 6, lg: 10 }}
            borderBottom={1}
            boxShadow={'sm'}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.900')}
            fontSize={'lg'}
            align={'center'}>
            <Flex
               flex={{ base: 1 }}
               justify={{ base: 'start', md: 'start' }}
               align={{ base: 'center' }}>
               <Image
                  boxSize='63px'
                  borderRadius={'20px'}
                  mr={2}
                  src={everhourLogo}
                  alt='brand-logo'
               />
               <Text
                  textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                  fontFamily={'heading'}
                  as={NavLink}
                  to='/'
                  color={useColorModeValue('gray.800', 'white')}
                  pb='0px'>
         Welcome
         <Text   fontWeight={'Bold'}> Heshamsqrat</Text>


       
               </Text>
               

               <Flex display={{ base: 'none', md: 'flex' }} ml={{ base: 7, md: 7, lg: 10 }}>
                  <DesktopNav NAV_ITEMS={NAV_ITEMS} />
               </Flex>


               <Button
               paddingLeft="50rem"
w='8%'
mr='200px'
            padding="1.2rem"
            bg={"red.400"}
            color={"white"}
            _hover={{
              bg: "green.400",
            }}
          >
            Check-out

          
          </Button>

          <Button
               paddingLeft="50rem"
w='20%'
mr='200px'
            padding="1.2rem"
            bg={"white.400"}
            color={"black"}
            _hover={{
              bg: "gray.400",
            }}
          >
            Search.........

          
          </Button>
      
          <img  src="https://cdn.iconscout.com/icon/free/png-64/tv-1439709-1214282.png" alt="" />
          <img src="https://cdn.iconscout.com/icon/premium/png-64-thumb/clock-5087639-4240750.png" alt="" />
          <img src="https://cdn.iconscout.com/icon/premium/png-64-thumb/setting-2651123-2198228.png" alt="" />
          <img src="https://cdn.iconscout.com/icon/free/png-64/date-1439767-1214338.png" alt="" />
      

             
            </Flex>

       


            <Stack
               flex={{ base: 1, md: 0 }}
               justify={'flex-end'}
               direction={'row'}
               spacing={6}>


<Button
                  display={{ base: 'none', md: 'inline-flex' }}
                  // as={NavLink}
                  // to='/login'
                  fontSize={'md'}
                  bg='black'
                  color='white'
                  fontWeight={500}
                  variant={'shadow'}
                  _hover={{ color: 'white' }}
               >
                  Sydney-branch
               </Button>
               <Button
                  display={{ base: 'none', md: 'inline-flex' }}
                  as={NavLink}
                  to='/login'
                  color={'white'}
                  fontSize={'md'}
                  fontWeight={500}
                  variant={'shadow'}
                  bg= "green.400"
                  _hover={{ color: 'white' }}
               >
                  Log in
               </Button>
               <Button
                  display={{ base: 'none', md: 'inline-flex' }}
                  fontSize={'sm'}
                  fontWeight={600}
                  color={'white'}
                  as={NavLink}
                  to='/signup'
                  bg="#56bb72"
                  _dark={{ bg: "brand.500" }}
                  _hover={{
                     bg: "green.400",
                     boxShadow: "rgba(123, 213, 133, 0.400) 0px 3px 7px 3px"
                  }}>
                  Sign up
               </Button>
            </Stack>

            <Flex
               flex={{ base: 1, md: 'auto' }}
               justify={{ base: 'right', md: 'start' }}
               align={{ base: 'center' }}
               display={{ base: 'flex', md: 'none' }}>
               <IconButton
                  onClick={onToggle}
                  icon={
                     isOpen ? <CloseIcon w={4} h={4} /> : <HamburgerIcon w={7} h={7} />
                  }
                  variant={'ghost'}
                  aria-label={'Toggle Navigation'}
               />
            </Flex>
         </Flex>

         <Collapse in={isOpen} animateOpacity>
            <MobileNav NAV_ITEMS={NAV_ITEMS} />
         </Collapse>
      

         <Flex pt='1.5rem'

          bg={useColorModeValue( 'gray.200')}
                border='1px solid lightgray'
          
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
         
  


         <Flex pt='1.5rem'

pl='11rem'
      border='1px solid lightgray'
      w='100%'
      height='80px'
      bg='gray.100'

   >
   
<img   src="https://www.shutterstock.com/image-vector/cloud-icon-vector-simple-flat-600w-365129591.jpg" alt="" />

<Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='9.5rem'
        to='/login'
        color={'gray'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
         Weather Report    
     </Button>
   
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='7rem'
        to='/login'
        color={'gray'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
      22
        {/* 22 <br></br> Mon....  */}
         <img src="" alt="" /> 
      
     </Button>
   
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='9rem'
        to='/login'
        color={'gray'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
     22
         <img src="" alt="" /> 
      
     </Button>
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='9rem'
        to='/login'
        color={'gray'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
     22
         <img src="" alt="" /> 
      
     </Button>
   

     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='9rem'
        to='/login'
        color={'gray'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
22
         <img src="" alt="" /> 
      
     </Button>
   
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='8rem'
        to='/login'
        color={'gray'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
    22
         <img src="" alt="" /> 
      
     </Button>
   
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='9rem'
        to='/login'
        color={'gray'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
      22
         <img src="" alt="" /> 
      
     </Button>
   
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='8rem'
        to='/login'
        color={'gray'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
22
         <img src="" alt="" /> 
      
     </Button>
   
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='7rem'
        to='/login'
        color={'gray'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
   

         <img src="" alt="" /> 
      
     </Button>



  </Flex>

 
 


 
  <Flex pt='1.5rem'

pl='11rem'
      border='1px solid lightgray'
      w='100%'
      height='80px'
      bg='gray.100'

   >
   
<img   src="https://t3.ftcdn.net/jpg/03/01/52/74/240_F_301527418_8GGjEMJxUoTC6XpcGx2IvETwJURpApx8.jpg" alt="" />

<Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='9rem'
        to='/login'
        color={'gray'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        Total Employees (22) <br></br>  Search name.... 
         <img src="" alt="" /> 
      
     </Button>
   
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='5rem'
        to='/login'
        color={'gray'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        28 <br></br> Mon.... 
         <img src="" alt="" /> 
      
     </Button>
   
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='7.5rem'
        to='/login'
        color={'gray'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
      01 <br></br>  Tue.... 
         <img src="" alt="" /> 
      
     </Button>
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='7rem'
        to='/login'
        color={'gray'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
      02 <br></br>  Wed.... 
         <img src="" alt="" /> 
      
     </Button>
   

     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='8rem'
        to='/login'
        color={'gray'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
03<br></br>  Thu.... 
         <img src="" alt="" /> 
      
     </Button>
   
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='6rem'
        to='/login'
        color={'gray'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        04 <br></br>  Fri.... 
         <img src="" alt="" /> 
      
     </Button>
   
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='8rem'
        to='/login'
        color={'gray'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        05 <br></br>  Sat.... 
         <img src="" alt="" /> 
      
     </Button>
   
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='6rem'
        to='/login'
        color={'gray'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
      06
 <br></br>  Sun.... 
         <img src="" alt="" /> 
      
     </Button>
     </Flex>

      
  <Flex pt='1.5rem'

pl='11rem'
      border='1px solid lightgray'
      w='100%'
      height='80px'
      bg='gray.100'

   >
   
<img   src="https://www.shutterstock.com/image-vector/hand-holding-document-icon-suitable-600w-340596758.jpg" alt="" />

   
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='7rem'
        to='/login'
        color={'gray'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
   

   <Image
                  boxSize='63px'
                  borderRadius={'20px'}
                  mr={2}
                  src={everhourLogo}
                  alt='brand-logo'
               />
               <Text
                  textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                  fontFamily={'heading'}
                  as={NavLink}
                  to='/'
                  color={useColorModeValue('gray.800', 'white')}
                  pb='0px'>
         <Text   fontWeight={'Bold'}>Charlie Anderson</Text>
    Accounts


       
               </Text>
               
     </Button>
     
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='3.5rem'
        to='/login'
        color={'black'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        09:00 am <br></br> - <br></br> 05:00 pm
         <img src="" alt="" /> 
      
     </Button>


     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='6rem'
        to='/login'
        color={'black'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        09:00 am <br></br> - <br></br> 05:00 pm
         <img src="" alt="" /> 
      
     </Button>
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='5rem'
        to='/login'
        color={'black'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        09:00 am <br></br> - <br></br> 05:00 pm
         <img src="" alt="" /> 
      
     </Button>
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='7.5rem'
        to='/login'
        color={'black'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        09:00 am <br></br> - <br></br> 05:00 pm
         <img src="" alt="" /> 
      
     </Button>
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='5rem'
        to='/login'
        color={'black'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        09:00 am <br></br> - <br></br> 05:00 pm
         <img src="" alt="" /> 
      
     </Button>
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='5rem'
        to='/login'
        color={'black'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        09:00 am <br></br> - <br></br> 05:00 pm
         <img src="" alt="" /> 
      
     </Button>
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='5.5rem'
        to='/login'
        color={'black'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        09:00 am <br></br> - <br></br> 05:00 pm
         <img src="" alt="" /> 
      
     </Button>
     </Flex>
 
     <Flex pt='1.5rem'

pl='11rem'
      border='1px solid lightgray'
      w='100%'
      height='90px'
      bg='gray.100'

   >
   
<img   src="https://www.shutterstock.com/image-vector/gift-box-ribbon-line-icon-600w-661067686.jpg" alt="" />

   
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='7rem'
        to='/login'
        color={'gray'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
   

   <Image
                  boxSize='63px'
                  borderRadius={'20px'}
                  mr={2}
                  src={everhourLogo}
                  
                  alt='brand-logo'
               />
               <Text
                  textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                  fontFamily={'heading'}
                  as={NavLink}
                  to='/'
                  color={useColorModeValue('gray.800', 'white')}
                  pb='0px'>
         <Text   fontWeight={'Bold'}>Charlie White</Text>
    Accounts


       
               </Text>
               
     </Button>
     
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='5rem'
        to='/login'
        w='9%'
        color={'black'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        {/* 09:00 am <br></br> - <br></br> 05:00 pm */}
        <img sizes='10px'  src="https://www.shutterstock.com/image-vector/green-glossy-web-button-plus-600w-92117759.jpg" alt="" />
      
      
     </Button>


     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='6rem'
        to='/login'
        color={'black'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        09:00 am <br></br> - <br></br> 05:00 pm
         <img src="" alt="" /> 
      
     </Button>
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='5rem'
        to='/login'
        color={'black'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        09:00 am <br></br> - <br></br> 05:00 pm
         <img src="" alt="" /> 
      
     </Button>
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='7.5rem'
        to='/login'
        color={'black'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        09:00 am <br></br> - <br></br> 05:00 pm
         <img src="" alt="" /> 
      
     </Button>
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='5rem'
        to='/login'
        color={'black'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        09:00 am <br></br> - <br></br> 05:00 pm
         <img src="" alt="" /> 
      
     </Button>
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='5rem'
        to='/login'
        color={'black'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        09:00 am <br></br> - <br></br> 05:00 pm
         <img src="" alt="" /> 
      
     </Button>
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='5.5rem'
        to='/login'
        color={'black'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        Annual Leave
         <img src="" alt="" /> 
      
     </Button>
     </Flex>

     <Flex pt='1.5rem'

pl='11rem'
      border='1px solid lightgray'
      w='100%'
      height='90px'
      bg='gray.100'

   >
   
<img   src="https://www.shutterstock.com/image-vector/rectangle-logo-linessquare-unusual-icon-600w-2048750411.jpg" alt="" />

   
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='7rem'
        to='/login'
        color={'gray'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
   

   <Image
                  boxSize='63px'
                  borderRadius={'20px'}
                  mr={2}
                  src={everhourLogo}
                  
                  alt='brand-logo'
               />
               <Text
                  textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                  fontFamily={'heading'}
                  as={NavLink}
                  to='/'
                  color={useColorModeValue('gray.800', 'white')}
                  pb='0px'>
         <Text   fontWeight={'Bold'}>Cooper White</Text>
    Accounts


       
               </Text>
               
     </Button>
     
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='5rem'
        to='/login'
        w='9%'
        color={'black'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        09:00 am <br></br> - <br></br> 05:00 pm
        {/* <img sizes='10px'  src="https://www.shutterstock.com/image-vector/green-glossy-web-button-plus-600w-92117759.jpg" alt="" /> */}
      
      
     </Button>


     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='6rem'
        to='/login'
        color={'black'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        09:00 am <br></br> - <br></br> 05:00 pm
         <img src="" alt="" /> 
      
     </Button>
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='5rem'
        to='/login'
        color={'black'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        {/* 09:00 am <br></br> - <br></br> 05:00 pm */}
        Unavailable
         <img src="" alt="" /> 
      
     </Button>
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='7.5rem'
        to='/login'
        color={'black'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        09:00 am <br></br> - <br></br> 05:00 pm
         <img src="" alt="" /> 
      
     </Button>
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='5rem'
        to='/login'
        w='9%'
        color={'black'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        {/* 09:00 am <br></br> - <br></br> 05:00 pm */}
        <img sizes='10px'  src="https://www.shutterstock.com/image-vector/green-glossy-web-button-plus-600w-92117759.jpg" alt="" />
      
      
     </Button>
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='5rem'
        to='/login'
        color={'black'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        09:00 am <br></br> - <br></br> 05:00 pm
         <img src="" alt="" /> 
      
     </Button>
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='5.5rem'
        to='/login'
        color={'black'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        Annual Leave
         <img src="" alt="" /> 
      
     </Button>
     </Flex>

     
     <Flex pt='1.5rem'

pl='11rem'
      border='1px solid lightgray'
      w='100%'
      height='90px'
      bg='gray.100'

   >
   
<img   src="https://t3.ftcdn.net/jpg/03/01/52/74/240_F_301527418_8GGjEMJxUoTC6XpcGx2IvETwJURpApx8.jpg" alt="" />

   
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='7rem'
        to='/login'
        color={'gray'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
   

   <Image
                  boxSize='63px'
                  borderRadius={'20px'}
                  mr={2}
                  src={everhourLogo}
                  
                  alt='brand-logo'
               />
               <Text
                  textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                  fontFamily={'heading'}
                  as={NavLink}
                  to='/'
                  color={useColorModeValue('gray.800', 'white')}
                  pb='0px'>
         <Text   fontWeight={'Bold'}>Hary Anderson</Text>
    Accounts


       
               </Text>
               
     </Button>
     
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='6rem'
        to='/login'
        w='9%'
        color={'black'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        {/* 09:00 am <br></br> - <br></br> 05:00 pm */}
        Unavailable leave
        {/* <img sizes='10px'  src="https://www.shutterstock.com/image-vector/green-glossy-web-button-plus-600w-92117759.jpg" alt="" /> */}
      
      
     </Button>


     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='6rem'
        to='/login'
        color={'black'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        09:00 am <br></br> - <br></br> 05:00 pm
         <img src="" alt="" /> 
      
     </Button>
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='5rem'
        to='/login'
        color={'black'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        09:00 am <br></br> - <br></br> 05:00 pm
        {/* Unavailable */}
         <img src="" alt="" /> 
      
     </Button>
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='7.5rem'
        to='/login'
        color={'black'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        09:00 am <br></br> - <br></br> 05:00 pm
         <img src="" alt="" /> 
      
     </Button>
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='5rem'
        to='/login'
        w='9%'
        color={'black'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
     Sick Leave
        {/* <img sizes='10px'  src="https://www.shutterstock.com/image-vector/green-glossy-web-button-plus-600w-92117759.jpg" alt="" />
       */}
      
     </Button>
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='5rem'
        to='/login'
        color={'black'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        09:00 am <br></br> - <br></br> 05:00 pm
         <img src="" alt="" /> 
      
     </Button>
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='5.5rem'
        to='/login'
        color={'black'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
            09:00 am <br></br> - <br></br> 05:00 pm
         <img src="" alt="" /> 
      
     </Button>
     </Flex>
     <Flex pt='1.5rem'

pl='11rem'
      border='1px solid lightgray'
      w='100%'
      height='90px'
      bg='gray.100'

   >
   
<img   src="https://t3.ftcdn.net/jpg/03/01/52/74/240_F_301527418_8GGjEMJxUoTC6XpcGx2IvETwJURpApx8.jpg" alt="" />

   
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='7rem'
        to='/login'
        color={'gray'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
   

   <Image
                  boxSize='63px'
                  borderRadius={'20px'}
                  mr={2}
                  src={everhourLogo}
                  
                  alt='brand-logo'
               />
               <Text
                  textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                  fontFamily={'heading'}
                  as={NavLink}
                  to='/'
                  color={useColorModeValue('gray.800', 'white')}
                  pb='0px'>
         <Text   fontWeight={'Bold'}>Harison Nguyen</Text>
    Accounts


       
               </Text>
               
     </Button>
     
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='5rem'
        to='/login'
        w='9%'
        color={'black'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        09:00 am <br></br> - <br></br> 05:00 pm
        {/* <img sizes='10px'  src="https://www.shutterstock.com/image-vector/green-glossy-web-button-plus-600w-92117759.jpg" alt="" /> */}
      
      
     </Button>


     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='6rem'
        to='/login'
        color={'black'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        09:00 am <br></br> - <br></br> 05:00 pm
         <img src="" alt="" /> 
      
     </Button>
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='5rem'
        to='/login'
        color={'black'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        {/* 09:00 am <br></br> - <br></br> 05:00 pm */}
        09:00 am <br></br> - <br></br> 05:00 pm
         <img src="" alt="" /> 
      
     </Button>
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='7.5rem'
        to='/login'
        color={'black'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        09:00 am <br></br> - <br></br> 05:00 pm
         <img src="" alt="" /> 
      
     </Button>
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='5rem'
        to='/login'
        w='9%'
        color={'black'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        09:00 am <br></br> - <br></br> 05:00 pm
        {/* <img sizes='10px'  src="https://www.shutterstock.com/image-vector/green-glossy-web-button-plus-600w-92117759.jpg" alt="" /> */}
      
      
     </Button>
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='5rem'
        to='/login'
        color={'black'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        09:00 am <br></br> - <br></br> 05:00 pm
         <img src="" alt="" /> 
      
     </Button>
     <Button
        display={{ base: 'none', md: 'inline-flex' }}
    pl='5rem'
        to='/login'
        w='9%'
        color={'black'}
        fontSize={'md'}
        fontWeight={500}
        variant={'shadow'}
        // bg= "green.400"
        _hover={{ gray: 'white' }}
     >
        {/* 09:00 am <br></br> - <br></br> 05:00 pm */}
        <img sizes='10px'  src="https://www.shutterstock.com/image-vector/green-glossy-web-button-plus-600w-92117759.jpg" alt="" />
      
      
     </Button>
     </Flex>


     <Flex pt='1.5rem'

pl='11rem'
      border='1px solid lightgray'
      w='100%'
      height='80px'
      bg='gray.100'

   >
   
<img   src="https://www.shutterstock.com/image-vector/download-button-vector-icon-600w-1039912210.jpg" alt="" />

   
     <Button
      
    pl='11.5rem'
     color={'gray'}
        fontSize={'md'}
        fontWeight={500}
     
     >
<Text
                  textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                  fontFamily={'heading'}
                  // as={NavLink}
                  // to='/'
                  // color={useColorModeValue('gray.800', 'white')}
                  pb='0px'>
         <Text   fontWeight={'Bold'}>1,4K h/2K hr</Text>
         <Text   fontWeight={'Bold'}>12,3K $/15K $</Text>

 </Text>
               
     </Button>


     <Button
      
    pl='5rem'
     color={'gray'}
        fontSize={'md'}
        fontWeight={500}
     
     >
<Text
                  textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                  fontFamily={'heading'}
                  // as={NavLink}
                  // to='/'
                  // color={useColorModeValue('gray.800', 'white')}
                  pb='0px'>
         <Text   fontWeight={'Bold'}>1100$ /1200$</Text>
         <Text   fontWeight={'Bold'}>150hr $/160hr</Text>
allocated  1300$
 </Text>
               
     </Button>
     
     <Button
      
    pl='3rem'
     color={'gray'}
        fontSize={'md'}
        fontWeight={500}
     
     >
<Text
                  textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                  fontFamily={'heading'}
                  // as={NavLink}
                  // to='/'
                  // color={useColorModeValue('gray.800', 'white')}
                  pb='0px'>
         <Text   fontWeight={'Bold'}>1100$ /1200$</Text>
         <Text   fontWeight={'Bold'}>150hr $/160hr</Text>
allocated  1300$
 </Text>
               
     </Button>
     
     <Button
      
    pl='3rem'
     color={'gray'}
        fontSize={'md'}
        fontWeight={500}
     
     >
<Text
                  textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                  fontFamily={'heading'}
                  // as={NavLink}
                  // to='/'
                  // color={useColorModeValue('gray.800', 'white')}
                  pb='0px'>
         <Text   fontWeight={'Bold'}>1100$ /1200$</Text>
         <Text   fontWeight={'Bold'}>150hr $/160hr</Text>
allocated  1300$
 </Text>
               
     </Button>
     
     <Button
      
    pl='4rem'
     color={'gray'}
        fontSize={'md'}
        fontWeight={500}
     
     >
<Text
                  textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                  fontFamily={'heading'}
                  // as={NavLink}
                  // to='/'
                  // color={useColorModeValue('gray.800', 'white')}
                  pb='0px'>
         <Text   fontWeight={'Bold'}>1100$ /1200$</Text>
         <Text   fontWeight={'Bold'}>150hr $/160hr</Text>
allocated  1300$
 </Text>
               
     </Button>



     <Button
      
    pl='3rem'
     color={'gray'}
        fontSize={'md'}
        fontWeight={500}
     
     >
<Text
                  textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                  fontFamily={'heading'}
                  // as={NavLink}
                  // to='/'
                  // color={useColorModeValue('gray.800', 'white')}
                  pb='0px'>
         <Text   fontWeight={'Bold'}>1100$ /1200$</Text>
         <Text   fontWeight={'Bold'}>150hr $/160hr</Text>
allocated  1300$
 </Text>
               
     </Button>
     
     <Button
      
    pl='2rem'
     color={'gray'}
        fontSize={'md'}
        fontWeight={500}
     
     >
<Text
                  textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                  fontFamily={'heading'}
                  // as={NavLink}
                  // to='/'
                  // color={useColorModeValue('gray.800', 'white')}
                  pb='0px'>
         <Text   fontWeight={'Bold'}>1100$ /1200$</Text>
         <Text   fontWeight={'Bold'}>150hr $/160hr</Text>
allocated  1300$
 </Text>
               
     </Button>

     <Button
      
      pl='2rem'
       color={'gray'}
          fontSize={'md'}
          fontWeight={500}
       
       >
  <Text
                    textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                    fontFamily={'heading'}
                    // as={NavLink}
                    // to='/'
                    // color={useColorModeValue('gray.800', 'white')}
                    pb='0px'>
           <Text   fontWeight={'Bold'}>1100$ /1200$</Text>
           <Text   fontWeight={'Bold'}>150hr $/160hr</Text>
  allocated  1300$
   </Text>
                 
       </Button>
  </Flex>

  <Flex pt='1.5rem'

pl='11rem'
      border='1px solid lightgray'
      w='100%'
      height='80px'
      bg='gray.100'

   >
   
<img   src="https://www.shutterstock.com/image-vector/transfer-arrows-outline-icon-linear-600w-1371060434.jpg" alt="" />

   
     <Button
      
    pl='11.5rem'
     color={'gray'}
        fontSize={'md'}
        fontWeight={500}
     
     >
<Text
                  textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                  fontFamily={'heading'}
                  // as={NavLink}
                  // to='/'
                  // color={useColorModeValue('gray.800', 'white')}
                  pb='0px'>
         <Text   fontWeight={'Bold'}>1,4K h/2K hr</Text>
         <Text   fontWeight={'Bold'}>12,3K $/15K $</Text>

 </Text>
               
     </Button>


     <Button
      
    pl='5rem'
     color={'gray'}
        fontSize={'md'}
        fontWeight={500}
     
     >
<Text
                  textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                  fontFamily={'heading'}
                  // as={NavLink}
                  // to='/'
                  // color={useColorModeValue('gray.800', 'white')}
                  pb='0px'>
         <Text   fontWeight={'Bold'}>1100$ /1200$</Text>
         <Text   fontWeight={'Bold'}>150hr $/160hr</Text>
allocated  1300$
 </Text>
               
     </Button>
     
     <Button
      
    pl='3rem'
     color={'gray'}
        fontSize={'md'}
        fontWeight={500}
     
     >
<Text
                  textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                  fontFamily={'heading'}
                  // as={NavLink}
                  // to='/'
                  // color={useColorModeValue('gray.800', 'white')}
                  pb='0px'>
         <Text   fontWeight={'Bold'}>1100$ /1200$</Text>
         <Text   fontWeight={'Bold'}>150hr $/160hr</Text>
allocated  1300$
 </Text>
               
     </Button>
     
     <Button
      
    pl='3rem'
     color={'gray'}
        fontSize={'md'}
        fontWeight={500}
     
     >
<Text
                  textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                  fontFamily={'heading'}
                  // as={NavLink}
                  // to='/'
                  // color={useColorModeValue('gray.800', 'white')}
                  pb='0px'>
         <Text   fontWeight={'Bold'}>1100$ /1200$</Text>
         <Text   fontWeight={'Bold'}>150hr $/160hr</Text>
allocated  1300$
 </Text>
               
     </Button>
     
     <Button
      
    pl='4rem'
     color={'gray'}
        fontSize={'md'}
        fontWeight={500}
     
     >
<Text
                  textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                  fontFamily={'heading'}
                  // as={NavLink}
                  // to='/'
                  // color={useColorModeValue('gray.800', 'white')}
                  pb='0px'>
         <Text   fontWeight={'Bold'}>1100$ /1200$</Text>
         <Text   fontWeight={'Bold'}>150hr $/160hr</Text>
allocated  1300$
 </Text>
               
     </Button>



     <Button
      
    pl='3rem'
     color={'gray'}
        fontSize={'md'}
        fontWeight={500}
     
     >
<Text
                  textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                  fontFamily={'heading'}
                  // as={NavLink}
                  // to='/'
                  // color={useColorModeValue('gray.800', 'white')}
                  pb='0px'>
         <Text   fontWeight={'Bold'}>1100$ /1200$</Text>
         <Text   fontWeight={'Bold'}>150hr $/160hr</Text>
allocated  1300$
 </Text>
               
     </Button>
     
     <Button
      
    pl='2rem'
     color={'gray'}
        fontSize={'md'}
        fontWeight={500}
     
     >
<Text
                  textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                  fontFamily={'heading'}
                  // as={NavLink}
                  // to='/'
                  // color={useColorModeValue('gray.800', 'white')}
                  pb='0px'>
         <Text   fontWeight={'Bold'}>1100$ /1200$</Text>
         <Text   fontWeight={'Bold'}>150hr $/160hr</Text>
allocated  1300$
 </Text>
               
     </Button>

     <Button
      
      pl='2rem'
       color={'gray'}
          fontSize={'md'}
          fontWeight={500}
       
       >
  <Text
                    textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                    fontFamily={'heading'}
                    // as={NavLink}
                    // to='/'
                    // color={useColorModeValue('gray.800', 'white')}
                    pb='0px'>
           <Text   fontWeight={'Bold'}>1100$ /1200$</Text>
           <Text   fontWeight={'Bold'}>150hr $/160hr</Text>
  allocated  1300$
   </Text>
                 
       </Button>
  





</Flex>


      </Box>


   );
};

export default Navbar;