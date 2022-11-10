import { Center, flexbox, Heading } from "@chakra-ui/react";

import {
  Avatar,
  Box,
  Image,
  Text,
  Wrap,
  WrapItem,
  AvatarBadge,
  AvatarGroup,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Box bg="lightgreen" w="100%" p={4} color="white">
        <Box display="flex">
          <WrapItem>
            <Avatar
              boxSize="100px"
              name="Dan Abrahmov"
              src="https://tse2.mm.bing.net/th?id=OIP.d7Vr03cEgZdTWDmBpwRVwwHaHz&pid=Api&P=0"
            />
          </WrapItem>
          <Heading margin="auto" justifyContent="center" mt="1rem"  color='red'>
            Welcome to Bp plc
          </Heading>
        </Box>
      </Box>

      <Box boxSize="sm" w="100%">
        <Image
          p="20px"
          h="400px"
          w="100%"
          src="https://tse3.mm.bing.net/th?id=OIP.LK2A8uoNforf5EY9izvPFAHaEo&pid=Api&P=0"
          alt="Dan Abramov"
        />
      </Box>

      <Center>
        <Wrap
          display="flex"
          alignItems="sp"
          justifyContent="space-around"
          pt='10px'
          w="97%"
        bg='green'
          m="auto"
        >
          <Box display="flex" flexDirection="column" m="0px 50px">
            <Avatar
              boxSize="100px"
              name="Dan Abrahmov"
              src="https://www.kamateraho.com/img/recharge.png"
            />

            <Center>
              {" "}
              <Text
                as="i"
                cursor="pointer"
                color='white'
                onClick={() => navigate("/recharge")}
              >
                Recharge
              </Text>
            </Center>


          </Box>

          <Box m="0px 10px">
            <Avatar
              boxSize="100px"
              name="Kola Tioluwani"
              src="https://static.vecteezy.com/system/resources/previews/000/289/709/original/cash-withdrawal-vector-icon.jpg"
            />


            
<Center>
              {" "}
              <Text
                as="i"
                color='white'
                cursor="pointer"
                onClick={() => navigate("/withdrawal")}
              >
                Withdrawal
              </Text>
            </Center>

          </Box>
          <Box>
            <Avatar
              boxSize="100px"
              name="Kent Dodds"
              src="https://tse2.mm.bing.net/th?id=OIP.r-mEB-24LT-1UoguY-vAUQHaHw&pid=Api&P=0"
            />

            
<Center>
              {" "}
              <Text

color='white'
                as="i"
                cursor="pointer"
                onClick={() => navigate("/agent")}
              >
                Agent
              </Text>
            </Center>

          </Box>
          <Box>
            <Avatar
              boxSize="100px"
              name="Ryan Florence"
              src="https://tse2.mm.bing.net/th?id=OIP.B_RYNqX74vlzqZ9OPlzgvwHaHa&pid=Api&P=0"
            />

            
<Center>
              {" "}
              <Text
                as="i"
                color='white'
                cursor="pointer"
                onClick={() => navigate("/invite")}
              >
                Invite
              </Text>
            </Center>

          </Box>
          <Box>
            <Avatar
              boxSize="100px"
              name="Prosper Otemuyiwa"
              src="https://thumbs.dreamstime.com/z/customer-service-care-icon-splash-natural-blue-round-button-isolated-abstract-illustration-142317742.jpg"
            />


            
<Center>
              {" "}
              <Text
                as="i"
                color='white'
                cursor="pointer"
                onClick={() => navigate("/services")}
              >
                Services
              </Text>
            </Center>

          </Box>
        </Wrap>
      </Center>

      <Box boxSize="sm" w="100%">
        <Image
          p="20px"
          h="300px"
          w="100%"
          src="https://allhdwallpapers.com/wp-content/uploads/2015/07/Sky-4.jpg"
          alt="Dan Abramov"
        />
      </Box>
      




       <Center>
        <Wrap
          display="flex"
          alignItems="sp"
          justifyContent="space-around"
          pt='10px'
          w="97%"
        bg='white'
          m="auto"
        >
          <Box display="flex" flexDirection="column" m="0px 50px">
            <Avatar
              boxSize="60px"
              name="Dan Abrahmov"
              src="https://tse2.mm.bing.net/th?id=OIP.d7Vr03cEgZdTWDmBpwRVwwHaHz&pid=Api&P=0"
            />

            <Center>
           
              <Text
                as="i"
                cursor="pointer"
                color='green'
              
              >
              Bp
              </Text>
            </Center>


          </Box>

          <Box m="0px 10px">
            <Avatar
              boxSize="60px"
              name="Kola Tioluwani"
              src="https://thumbs.dreamstime.com/b/oil-petroleum-pump-round-icon-fracking-zone-oil-pump-extracting-petroleum-suboil-pipes-round-icon-vector-149204879.jpg"
            />


            
<Center>
          
              <Text
                as="i"
                color='black'
              
              >
              Oil-Zone
              </Text>
            </Center>

          </Box>
          <Box>
            <Avatar
              boxSize="60px"
              name="Kent Dodds"
              src="https://thumbs.dreamstime.com/b/lucky-draw-colorful-web-icon-button-vector-illustration-isolated-white-background-shadow-lucky-draw-colorful-icon-119608649.jpg"
            />

            
<Center>
          
              <Text

color='black'
                as="i"
               
              >
                Contact
              </Text>
            </Center>

          </Box>
          <Box>
            <Avatar
              boxSize="60px"
              name="Ryan Florence"
              src="https://tse2.mm.bing.net/th?id=OIP.B_RYNqX74vlzqZ9OPlzgvwHaHa&pid=Api&P=0"
            />

            
<Center>
           
              <Text
                as="i"
                color='black'
                
              >
                Lucky Draw
              </Text>
            </Center>

          </Box>
          <Box>
            <Avatar
              boxSize="60px"
              name="Prosper Otemuyiwa"
              src="http://cdn.onlinewebfonts.com/svg/download_391140.png"
            />


            
<Center>
              <Text
                as="i"
                color='black'
               
              >
                Me
              </Text>
            </Center>

          </Box>
        </Wrap>
      </Center>

    </>
  );
}
