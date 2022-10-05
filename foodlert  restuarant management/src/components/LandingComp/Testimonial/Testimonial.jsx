import {
    Box,
    Highlight,
    HStack,
    Image,
    Link,
    Text,
    VStack
  } from "@chakra-ui/react";
  import quote from "./icons8-get-quote-100.png";
  
  export default function Testimonial() {
    return (
      <VStack w={{ base: "100%", xl: "80%" }} m="auto" mt="100px" px={5}>
        <VStack
          color="#333"
          fontSize={{ base: "24px", xl: "36px" }}
          fontWeight="medium"
          w="100%"
          spacing={0}
          lineHeight="short"
          textAlign={{ base: "center", lg: "left" }}
          alignItems={{ lg: "flex-start" }}
        >
          <Text w={{ lg: "50%", xl: "70%" }}>
      
          </Text>
        </VStack>
  
        <HStack
          justify="space-between"
          flexDir={{ base: "column-reverse", sm: "row" }}
        >
          <HStack w={{ base: "100%", sm: "50%" }}>
            <Image src={quote} display={{ base: "none", lg: "block" }} />
            <VStack fontSize="18px" textAlign="left">
              <Text>
              .{" "}
                

              </Text>
              <Text fontWeight="semibold" w="full">
               
              </Text>
              <Text fontWeight="semibold" w="full">
              
              </Text>
              <Link href="#" color="blue.500" fontSize="16px" w="full">
             
              </Link>
            </VStack>
          </HStack>
  
          <Image
            
          
         
          />
        </HStack>
      </VStack>
    );
  }
  