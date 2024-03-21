"use client"

import React from "react"
import { Box, Flex, IconButton, Image } from "@chakra-ui/react"
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"
import Slider from "react-slick"

// Settings for the slider
const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
}

interface CardProps {
    image1: string
}

const Card = ({ image1 }: CardProps) => {
    return (
        <Flex flexDir={"column"}>
            <Image
                src={image1}
                alt="image1"
                width={{ base: "50", md: "70%", lg: "100%" }}
                height={{ base: "50%", md: "70%", lg: "100%" }}
            />
        </Flex>
    )
}

export default function Carousel() {
    const [slider, setSlider] = React.useState<Slider | null>(null)

    const jobs = [
        {
            image1: "icons/Experiences/cpms.png",
        },
        {
            image1: "icons/Experiences/mobiles.png",
        },
    ]

    return (
        <Box height={"100%"} width={"full"}>
            {/* CSS files for react-slick */}
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

            <Flex mt="40px" w="full" justify={"flex-start"} gap={4}>
                {/* Left Icon */}
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
                {/* Right Icon */}
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

            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {jobs.map((job, index) => (
                    <Card key={index} image1={job.image1} />
                ))}
            </Slider>
        </Box>
    )
}
