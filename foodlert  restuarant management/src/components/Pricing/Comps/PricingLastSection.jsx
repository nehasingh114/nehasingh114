import React from 'react'
import {
  Box,
  Button,
  Flex,
  Text,
  Input,
} from "@chakra-ui/react";
import styles from "../Pricing.module.css";

const PricingLastSection = () => {
  return (
    <Flex
    w="80%"
    m="auto"
    alignItems="center"
    justifyContent="space-around"
    gap="70px"
    textAlign="left"
    marginTop="150px"
  >
    <Box>
      <Text fontSize="4xl" fontWeight="500">
        {/* Take control of your time with Everhour */}
      </Text>
      <Text fontSize="18px" marginTop="10px">
        {/* Beautiful integrations. Intuitive interface. No unexpected fees */}
      </Text>
      <Flex gap="20px" marginTop="30px">
        <Input type="text" placeholder="Work Email" w="50%" p="20px" h="48px" />
        <Button
          w="25%"
          bg="#57bb71"
          color="#ffffff"
          h="48px"
        >
          Try Free
        </Button>
      </Flex>
      <Flex gap="13px" p="13px" cursor="pointer">
         <img src=""/>
         <Text className={styles.toHover}></Text>
      </Flex>
    </Box>
    <Box className={styles.TobeNone}>
      {/* <ul>
        <li>Track time from the apps you already use</li>
        <li>Know where your team’s time is going</li>
        <li>Keep projects on budget</li>
        <li>Increase transparency</li>
        <li>Make your workflow more efficient</li>
      </ul> */}
    </Box>
  </Flex>
  )
}

export default PricingLastSection
