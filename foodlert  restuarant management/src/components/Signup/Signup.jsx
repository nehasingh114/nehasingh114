import {
  Flex,
  Box,
  FormControl,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../store/auth/auth.actions";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [creds, setCreds] = useState({});
  const dispatch = useDispatch();
  const token = useSelector((store) => store.auth.token);

  const onChange = (e) => {
    const { name, value } = e.target;
    setCreds({
      ...creds,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(creds);
    console.log(token);
    dispatch(registerAction(creds));
  };

  return (
    <>
      <Stack
        align={"center"}
        maxW={{ base: "xl", md: "4xl" }}
        margin="auto"
        mt="5rem"
      >
        <Heading
          color="#333333"
          fontSize={{ base: "3xl", md: "5xl" }}
          textAlign={"center"}
          width=""
        >
          Foodlert Restuarant Management
        </Heading>
        <Text fontSize={"lg"} color={"gray.600"}>
          
        </Text>
      </Stack>
      <Flex justify={"center"} bg={useColorModeValue("gray.50", "gray.800")}>
        <Stack spacing={8} mx={"auto"} maxW="lg" py={12} px={6}>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box></Box>
              </HStack>

              <Button
                m={7}
                w={{ base: "99%", md: "" }}
                variant={"outline"}
                marginTop="10px"
                border="2px solid black"
                padding="1.6rem"
              >
                <FcGoogle size={22} style={{ marginRight: "11px" }} />
                Sign up with Google
              </Button>

              <h1>
                <object data="" type="">
                  Or
                </object>
              </h1>
              <FormControl id="password" isRequired>
                <Input
                  name="email"
                  onChange={onChange}
                  p={6}
                  mb={5}
                  placeholder="Enter Email..."
                />
                <InputGroup>
                  <Input
                    name="password"
                    onChange={onChange}
                    p={6}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password..."
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"green.400"}
                  color={"white"}
                  _hover={{
                    bg: "green.500",
                  }}
                  onClick={handleSubmit}
                >
                  Get Started
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"} paddingLeft="10px">
                  Get help signing in.
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>

      {/* <Flex
        direction={{ base: "column", md: "row" }}
        w={{ base: "95%", md: "95%", lg: "60%" }}
        m="auto"
        h="auto"
        color="blackAlpha.700"
      >
        <Stack
          m={{ base: "auto", md: "2" }}
          mb={4}
          w={{ base: "100%", lg: "35%" }}
          gap="25px"
        >
          <Box
            p={7}
            borderRadius="md"
            boxShadow="md"
            borderColor="green"
            height="65%"
            border="1px solid lightGray"
            justifyContent="center"
            paddingTop="60px"
          >
            "I am the owner of the company, and I <br></br>
            <span style={{ backgroundColor: "rgba(250,247,133,0.7)" }}>
              useEverhour for time keeping of myself and
            </span>
            <br></br> my sub contractors.All team members usethe system_from web
            developers to techsupport to<br></br> projectmanagement to design"
            <br></br>
            <h5 marginTop="70px">-Jennifer H. [Source:TrustRadius]</h5>
          </Box>
          <Box
            p={7}
            borderRadius="md"
            boxShadow="md"
            height="65%"
            border="1px solid lightGray"
            justifyContent="center"
            paddingTop="60px"
          >
            "We are using everhour as a core business software,{" "}
            <span style={{ backgroundColor: " rgba(250,247,133,0.7)" }}>
              {" "}
              because our business is to sellour time .When you usesuch
              software,what you care about the most
            </span>{" "}
            is speed,flexibility,ability to integrate with all major project
            management software And Everhour is exactly that kind of software."
          </Box>
          <Box
            p={7}
            borderRadius="md"
            boxShadow="md"
            height="65%"
            border="1px solid lightGray"
            justifyContent="center"
            paddingTop="60px"
          >
            "Everhour's intergration with Asana is Wonderful for a remote team.
            We track all activites in Asana, but before Everhour I{" "}
            <span style={{ backgroundColor: " rgba(250,247,133,0.7)" }}>
              {" "}
              often wondered how long it was taking to do a task, now i know
              exactly. i can see who is working right now and{" "}
            </span>{" "}
            a summary each day"{" "}
          </Box>
        </Stack>
        <Stack
          m={{ base: "auto", md: "2" }}
          mb={4}
          w={{ base: "100%", lg: "35%" }}
          gap="25px"
        >
          <Box
            p={7}
            borderRadius="md"
            boxShadow="md"
            height="65%"
            border="1px solid lightGray"
            justifyContent="center"
            paddingTop="60px"
          >
            EverHour is being used by department now<br></br>
            ,but it is plannedto be used across the company.<br></br>
            We were havingproblems trackingthe times<br></br>
            <span style={{ backgroundColor: " rgba(250,247,133,0.7)" }}>
              {" "}
              of every project and everhour <br></br>
              endedup being the best solution to
            </span>{" "}
            the issue.we<br></br>
            aretracking our tasks involved in everyproject<br></br>
            ,in every level[software development,meetings,project management,
            etc]"
            <h5 marginTop="70px">-Maria Lucia. [Source:TrustRadius]</h5>
          </Box>
          <Box
            p={7}
            borderRadius="md"
            boxShadow="md"
            height="70%"
            border="1px solid lightGray"
            justifyContent="center"
            paddingTop="60px"
          >
            “We are a 15 people team working remotely from different cities of{" "}
            <span style={{ backgroundColor: " rgba(250,247,133,0.7)" }}>
              {" "}
              Latin America and Europe, and time tracking for each
            </span>{" "}
            client, project, and task has always been a major issue. We’ve been
            using Everhour for the past year or so, and it has become an
            essential tool for our team. It does not only give us the ability to
            track how much time we have dedicated to a project but also to
            estimate how much time a particular task will need in order to be
            completed next time and by who. Easily create and save reports with
            just a few clicks”
          </Box>
        </Stack>
        <Stack
          m={{ base: "auto", md: "2" }}
          mb={4}
          w={{ base: "100%", lg: "35%" }}
          gap="25px"
        >
          <Box
            p={7}
            borderRadius="md"
            boxShadow="md"
            height="65%"
            border="1px solid lightGray"
            justifyContent="center"
            paddingTop="60px"
          >
            Everhour helps me to manage/plan my weekly activities a lot more
            effectively.Since i know how much time I have to work onthing each
            day,and can{" "}
            <span style={{ backgroundColor: " rgba(250,247,133,0.7)" }}>
              quickly update estimated times to reallocate tasks as needed'
            </span>
            <h5 marginTop="70px">-Dan S. [Source:TrustRadius]</h5>{" "}
          </Box>

          <Box
            p={7}
            borderRadius="md"
            boxShadow="md"
            height="65%"
            border="1px solid lightGray"
            justifyContent="center"
            paddingTop="60px"
          >
            "{" "}
            <span style={{ backgroundColor: " rgba(250,247,133,0.7)" }}>
              The most important gain from using EverHour is that we can track
              our task in real - time without{" "}
            </span>
            having leave the browser. The chrome add_on helps to initiate the
            timefor aspecific task.If we are already on Asana, A simple click
            does the job"
            <h5>-Dimtris R [Source: Capital]</h5>
          </Box>
          <Box
            p={7}
            borderRadius="md"
            boxShadow="md"
            height="65%"
            border="1px solid lightGray"
            justifyContent="center"
            paddingTop="60px"
          >
            “Everhour has already paid for itself for the year by helping me
            track time I was missing in client projects.{" "}
            <span style={{ backgroundColor: " rgba(250,247,133,0.7)" }}>
              It is easy to use, has friendly customer service people, and the
            </span>{" "}
            reports make it easy to invoice clients and track projects.”
            <h5 marginTop="70px">-Jenniffer D. [Source:TrustRadius]</h5>
          </Box>
        </Stack>
      </Flex> */}

      <Button
        mt={10}
        variant="outline"
        color="#24bd68"
        border="1px solid #24bd68"
        _hover={{
          bg: "#24bd68",
          color: "white",
        }}
      >
        Read More
      </Button>
    </>
  );
}
