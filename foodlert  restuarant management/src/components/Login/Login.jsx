import {
  Flex,
  Box,
  FormControl,
  Input,
  Link,
  Button,
  Heading,
  Text,
  VStack,
  chakra,
  Spacer,
  Image,
} from "@chakra-ui/react";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { loginAction } from "../../store/auth/auth.actions";

export default function Login() {
  const [creds, setCreds] = useState({});
  const dispatch = useDispatch();

  const onChange = (e) => {
    const { name, value } = e.target;
    setCreds({
      ...creds,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(creds);
    dispatch(loginAction(creds));
  };

  return (
    <>
      <Box
        bg="white"
        w="100%"
        p={4}
        color="black"
        margin="auto"
        marginTop="100px"
      >
        <Heading size={{ base: "xl", lg: "3xl" }}>Log in to Foodlert</Heading>
      </Box>

      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center "
        w={{ base: "96%", lg: "50%" }}
        margin="auto"
        marginTop="10px"
        boxShadow="lg"
        borderRadius="md"
      >
        <VStack
          p={7}
          boxSizing="border-box"
          align="center"
          justify="center"
          w={{ base: "100%", md: "50%" }}
        >
          <Button
            m={7}
            w="100%"
            variant={"outline"}
            marginTop="10px"
            border="2px solid black"
            padding="1.6rem"
          >
            <FcGoogle size={22} style={{ marginRight: "11px" }} />
            Log in with Google
          </Button>
          <h2>Or</h2>
          <FormControl
            w="100%"
            marginRight="0px"
            gap={"20px"}
            marginBottom="10px"
          >
            <Input
              name="email"
              border="1px solid black"
              width="100%"
              padding="1.6rem"
              marginBottom="30px"
              type="text"
              placeholder="Enter youre email..."
              onChange={onChange}
            />
            <Input
              name="password"
              marginBottom="20px"
              border="1px solid black"
              width="100%"
              padding="1.6rem"
              type="password"
              placeholder=" Password..."
              onChange={onChange}
            />
          </FormControl>

          <Button
            padding="1.5rem"
            width="50%"
            bg={"green.400"}
            color={"white"}
            _hover={{
              bg: "green.400",
            }}
            onClick={handleSubmit}
          >
            <Link color={"white.400"}>Log In </Link>
          </Button>

          <Box>
            <Link
              textDecoration={"underline"}
              gap={"50px"}
              color={"gray.500"}
              mx="30"
            >
              Login with SSO{" "}
            </Link>
            <Link textDecoration={"underline"} color={"gray.500"}>
              Login more options{" "}
            </Link>
          </Box>
          <Link textDecoration={"underline"} color={"gray.500"}>
            Reset Password{" "}
          </Link>
        </VStack>

        <Box
          w={{ base: "100%", md: "50%" }}
          align="left"
          borderLeft={{ base: "none", md: "1px solid lightgray" }}
          borderTop={{ base: "1px solid lightgray", md: "none" }}
          color={""}
        >
          <Box  pos={'relative'}>
          {/* <Image
          pos='absolute'
          transform='rotate(180deg)'
          display={{base:'none', lg:'flex'}}
          src='https://3.imimg.com/data3/UF/GY/MY-11429963/32-500x500.jpg'>
            
          </Image> */}
            {/* <Text color={"red"}>News</Text>
            <Text
              marginBottom="10px"
              fontSize="1rem"
              color={"black"}
              fontWeight="bold"
            >
              New Timeline
            </Text> */}
            {/* <chakra.p fontSize="1rem">
              Sync assignments from your connected integrations automatically
              once you add a task assignee and a due date th...{" "}
              <Link textDecoration={"underline"} color={"blue.500"}>
                Learn More{" "}
              </Link>
            </chakra.p> */}

            {/* <Text mt="1rem" fontWeight="bold">
              Updates to Tracking Time Without Task
            </Text>

            <chakra.p fontSize="1rem">
              Now you can track the task it will show<br></br> on team
              timesheets immediately.
              <Link textDecoration={"underline"} color={"blue.500"}>
                Learn More{" "}
              </Link>
            </chakra.p> */}

            {/* <Box marginBottom="40px" marginTop={10}>
              <Text color="black.800" mt="1rem" fontWeight="bold">
                Integration with Todoist
              </Text>
              <chakra.p fontSize="1rem">
                EverHour now integrates with todoist{" "}
                <Link textDecoration={"underline"} color={"blue.500"}>
                  Learn More{" "}
                </Link>
              </chakra.p>
            </Box> */}
          </Box>
        </Box>
      </Flex>

      <Box
        bg="white"
        w={{ base: "100%", md: "50%" }}
        p={4}
        color="black"
        margin="auto"
        marginTop="70px"
        fontSize="37px"
      >
        <h1>XD Adobe XD</h1>
      </Box>
      <Box
        bg="white"
        w={{ base: "100%", md: "50%" }}
        p={4}
        color="gray.500"
        margin="auto"
        marginTop="0px"
        fontSize="20px"
      >
        <h1></h1>
      </Box>

      <Flex w={{ base: "95%", md: "30%" }} margin={"auto"}>
        <Input
          border="1px solid gray"
          marginBottom="30px"
          type="text"
          placeholder="Work email..."
        />
        <Spacer />
        <Box p="" w="150px">
          <Button
            padding="1.2rem"
            bg={"green.400"}
            color={"white"}
            _hover={{
              bg: "green.400",
            }}
          >
            Try it free
          </Button>
        </Box>
      </Flex>
      <Button marginTop="10px" color={"gray"}>
        <FcGoogle size={22} style={{ marginRight: "11px" }} />
        OR Sign with Google Account.
      </Button>
    </>
  );
}
