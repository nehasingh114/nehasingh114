import React from "react";
import { Container, Box, Text, Center } from "@chakra-ui/react";
const Recharge = () => {
  return (
    <Container maxW="2xl" bg="gray.400" centerContent>
      <Box padding="4" bg="blue.300" color="black" maxW="md">
        <Center>
          {" "}
          <Text>Recharge</Text>{" "}
        </Center>
        Infrastructure and accessibility As the Nordic market leader, we have
        opened up our network and adapted our charging solutions for all EVs.
        Most of our charging stations are near main roads and have good service
        offerings. It should be easy to find a Recharge charger, and today,
        there is a charging station every fifty kilometres along the road in
        central areas. Ease of use and maintenance It should be easy to charge
        your EV, whether you are on a short trip or a long journey. You will
        therefore find several different chargers in the same place – a hub – so
        you never have to worry about whether there is an available Recharge
        charger nearby. Our charging points are linked to a 24-hour maintenance
        service, so you also know that our charging stations are always ready to
        provide you with a recharge. Today, we are the largest charge point
        operator in Norway – the world’s most well-developed EV nation. And
        every month, we welcome thousands of new EV drivers to Norwegian,
        Swedish and Finnish roads! Our vision for the future is to make the
        transition from fossil to electric motors easier for our customers and
        our partners. Together, we are making the world greener and more
        sustainable for future generations.
      </Box>
    </Container>
  );
};

export default Recharge;
