import React, { useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Image
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  // dots: true,
  // arrows: false,
  // fade: false,
  // infinite: true,
  // autoplay: false,
  // speed: 500,
  // autoplaySpeed: 5000,
  // slidesToShow: 1,
  // slidesToScroll: 1

};

export default function CaptionCarousel() {

  <h1>neh</h1>
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState({});

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    // {
    //   title: "Design Projects 1",
    //   text:
    //     "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    //   image:
    //     "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/asana-primary.webp"
    // },
    // {
    //   title: "Design Projects 2",
    //   text:
    //     "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    //   image:
    //     "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/trello-primary.webp"
    // },
    {
      title: "",
      text:
        "",
      image:
      ''
    },
    {
      title: "Design Projects 3",
      text:
        ".",
      image:
        ""
    },
    {
      title: "Design Projects ",
      text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        ""
    }
  ];

  return (
    <Box
      position={"relative"}
      // height={"600px"}
      h={{base: '340px', md:'450px', xl: "550px"}}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href=""
      />
      <link
        rel="stylesheet"
        type="text/css"
        href=""
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            // height={"6xl"}
            position="relative"
            // backgroundPosition="top"
            // backgroundRepeat="no-repeat"
            // backgroundSize="cover"
            // backgroundImage={`url(${card.image})`}
          >
            <Image src={card.image} w={{base:'90%',md:'60%', lg: "60%"}} m='auto'/>
            {/* This is the block you need to change, to customize the caption */}
            {/* <Container size="container.lg" position="relative">
              <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="-50%"
                transform="translate(0, -400px)"
              >
                <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: "md", lg: "lg" }} color="GrayText">
                  {card.text}
                </Text>
              </Stack>
            </Container> */}
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
