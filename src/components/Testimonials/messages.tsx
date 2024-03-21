"use client"

import { Box, Flex, IconButton, Image, Text, VisuallyHidden, chakra, useColorModeValue } from "@chakra-ui/react"
import { ReactNode, useState } from "react"
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"
import Slider from "react-slick"

import JSON from "./testimonials.json"
import { FaLinkedin } from "react-icons/fa"

// Settings for the slider
const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
}

interface MessageProps {
    name: string
    linkedin: string
    photo: string
    message: string
    title: string
}

const SocialButton = ({ children, label, href }: { children: ReactNode; label: string; href: string }) => {
    return (
        <chakra.button
            bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
            rounded={"full"}
            w={8}
            h={8}
            cursor={"pointer"}
            as={"a"}
            marginLeft={5}
            href={href}
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            transition={"background 0.3s ease"}
            _hover={{
                bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

const Message = ({ name, linkedin, photo, message, title }: MessageProps) => {
    return (
        <Box flexDir={{ base: "column", lg: "row" }} w={"full"} borderRadius="28px" overflow="hidden" p={2}>
            <Flex
                flexDir={{ base: "column", lg: "row" }}
                align={"start"}
                gap={{ base: 2, lg: 5 }}
                justifyItems={"center"}
                alignItems={"center"}>
                <Image
                    src={photo}
                    alt={name}
                    w={{ base: "60px", md: "100px" }}
                    height={{ base: "60px", md: "100px" }}
                    mb={{ base: "10px", lg: 0 }}
                    rounded={"full"}
                    bgColor="#ff6b31"
                />
                <Flex
                    flexDirection={"column"}
                    borderRadius={"28px"}
                    padding={{ base: "15px", lg: "28px" }}
                    w={"full"}
                    bgColor="#2d343f">
                    <Text
                        mb="15px"
                        lineHeight={"1.441em"}
                        fontSize={{ base: 12, md: 14, lg: 18 }}
                        whiteSpace="pre-line">
                        {message}
                    </Text>

                    <Flex fontSize={{ base: 14, lg: 18 }} gap={2} alignItems={"center"}>
                        <Text color="#ff6b31">#</Text>
                        <Text>{name}</Text>
                    </Flex>

                    <Flex alignItems={"center"}>
                        <Text as={"a"} href={linkedin} fontSize={{ base: 14, lg: 16 }} color="#c3cad5">
                            {title}
                        </Text>
                        <SocialButton label={"LinkedIn"} href={linkedin}>
                            <FaLinkedin size={50} />
                        </SocialButton>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default function Messages() {
    const [slider, setSlider] = useState<Slider | null>(null)

    return (
        <Box height={"auto"} width={"full"} overflow={"hidden"} maxW={{ base: "1500px", md: "1200px" }}>
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />

            <Flex mt="35px" mb="-15px" align={"center"} w="full" justify={"flex-end"} gap={4}>
                <IconButton
                    aria-label="left-arrow"
                    bgColor="#ff6b31"
                    color="#fff"
                    borderRadius="full"
                    h={{ base: "40px", md: "45px" }}
                    w={{ base: "35px", md: "45px" }}
                    transform={"translate(0%, -50%)"}
                    zIndex={2}
                    onClick={() => slider?.slickPrev()}
                    fontSize={{ base: "25px", md: "30px" }}>
                    <BiLeftArrowAlt />
                </IconButton>
                <IconButton
                    fontSize={{ base: "25px", md: "30px" }}
                    aria-label="right-arrow"
                    bgColor="#ff6b31"
                    color="#fff"
                    h={{ base: "40px", md: "45px" }}
                    w={{ base: "35px", md: "45px" }}
                    borderRadius="full"
                    transform={"translate(0%, -50%)"}
                    zIndex={2}
                    onClick={() => slider?.slickNext()}>
                    <BiRightArrowAlt />
                </IconButton>
            </Flex>

            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {JSON.testimonials.map((user, index) => (
                    <Message
                        key={index}
                        name={user.name}
                        photo={user.photo}
                        message={user.message}
                        title={user.title}
                        linkedin={user.linkedin}
                    />
                ))}
            </Slider>
        </Box>
    )
}
