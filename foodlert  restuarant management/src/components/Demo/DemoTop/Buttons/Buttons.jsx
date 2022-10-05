import { Box, Stack, chakra } from "@chakra-ui/react";
import React from "react";

const Buttons = () => {
    return (
        <Stack
     
        >
            <Box>
                <chakra.a
                  
        
             
                >
            
                </chakra.a>
            </Box>
            <Box>
                <chakra.a
                    w="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    px={{ base: 8, md: 12 }}
                    py={{ base: 3, md: 4 }}
                    
                    fontSize="1rem"
                    rounded="md"
                
                    bg="brand.100"
                    _hover={{ bg: "green.50", transition: ".5s" }}
                    cursor="pointer"
                >
                
                </chakra.a>
            </Box>
        </Stack>
    );
};

export default Buttons;
