import React from 'react'

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import styles from "../Pricing.module.css";

const PricingFAQ = () => {
  return (
    <Flex
    w="80%"
    m="auto"
    alignItems="center"
    justifyContent="space-around"
    gap="70px"
  >
    <Box className={styles.Left_side}>
      <Text fontSize="4xl"></Text>
      <Text>
        
      </Text>
      <Box w="435px" h="435px">
      
      </Box>
    </Box>
    <Box className={styles.accordian_temp}>
      <Box className={styles.tobeShown}>
      <Text fontSize="4xl"></Text>
      </Box>
      <Accordion allowToggle>
        <AccordionItem p="7px">
          <h1>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontSize="18px">
          
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h1>
          <AccordionPanel pb={4}>
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. */}
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem p="7px">
          <h1>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontSize="18px">
                  {" "}
                
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h1>
          <AccordionPanel pb={4}>
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. */}
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem p="7px">
          <h1>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {/* <Text fontSize="18px"> Can I change my plan later?</Text> */}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h1>
          <AccordionPanel pb={4}>
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. */}
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem p="7px">
          <h1>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontSize="18px">
                  {" "}
                
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h1>
          <AccordionPanel pb={4}>
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. */}
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem p="7px">
          <h1>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontSize="18px">
                  
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h1>
          <AccordionPanel pb={4}>
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. */}
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem p="7px">
          <h1>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontSize="18px">
                  {" "}
                  
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h1>
          <AccordionPanel pb={4}>
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. */}
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem p="5px">
          <h1>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontSize="18px">
                  {" "}
                  
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h1>
          <AccordionPanel pb={4}>
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. */}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  </Flex>
  )
}

export default PricingFAQ
