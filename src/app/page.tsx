/* eslint-disable react/no-unescaped-entities */
"use client"
import { useCallback } from "react"
import { Flex, Image, Text, useDisclosure, Link } from "@chakra-ui/react"
import Particles from "react-particles"
import { loadSlim } from "tsparticles-slim"

import Footer from "./Footer"
import Technology from "./Technology"
import React from "react"
import Header from "./Header"
import { motion } from "framer-motion"
import About from "./About"
import TalkModal from "./talkModal"
import Container from "../components/Container"
import Carousel from "../components/Carousel"
import Testimonials from "../components/Testimonials"

export default function Home() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine)
    }, [])

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container)
    }, [])

    return (
        <Flex flexDir="column">
            <Header onOpen={onOpen} />

            <Flex
                marginTop={{ base: 170, lg: 0 }}
                minH="100vh"
                marginX="auto"
                maxW="1500px"
                id="About"
                alignItems="center"
                justifyItems={"center"}
                flexDir={{ base: "column", lg: "row" }}>
                <motion.animate initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 5 }}>
                    <Image
                        src="icons/Profile/MeWithBorder.jpeg"
                        borderRadius="full"
                        height={{ base: 300, lg: "full" }}
                        width={{ base: 300, lg: "full" }}
                        alt="AboutMe"
                    />
                </motion.animate>

                <About />
            </Flex>

            <Container
                height={"auto"}
                backgroundColor="rgba(49,49,51,0.7)"
                opacity={0.8}
                borderRadius="30px"
                marginX="auto"
                maxW="1500px"
                id="Experiences"
                padding="20px">
                <Flex justifyItems={"center"} gap={2} flexDir={{ base: "column", xl: "row" }}>
                    <Flex h="100%" flexDir={"column"} wrap={"wrap"} marginRight={10}>
                        <Flex flexDir={"column"}>
                            <Text
                                backgroundClip="text"
                                color="#ff6b31 "
                                as={"a"}
                                fontSize={{ base: 24, md: 32, lg: 40 }}
                                fontWeight="bold"
                                marginBottom="10px">
                                Experience
                            </Text>

                            <Link href="https://www.wevolt.com.au">
                                <Image src="icons/wevoltgreen.svg" w="90px" h="90px" alt="wevolt" />
                            </Link>
                        </Flex>
                        <Flex>
                            <Text textAlign="initial" fontSize={{ base: 12, md: 16, lg: 24 }}>
                                I collaborate with cross-functional teams to design and develop intuitive, responsive
                                interfaces for web and mobile applications.
                                <br /> My responsibilities include implementing new features, conducting thorough code
                                reviews, integrating external APIs, and actively participating in agile development
                                sprints to ensure projects are delivered on time.
                                <br />
                                Additionally, I utilize Storybook to meticulously craft and manage a comprehensive
                                library of UI components, fostering consistency and efficiency throughout the
                                development lifecycle.
                            </Text>
                        </Flex>
                    </Flex>
                    <Container w="100%" h="100%">
                        <Carousel />
                    </Container>
                </Flex>
            </Container>

            <Technology />

            <Testimonials />

            <Footer />

            <TalkModal isOpen={isOpen} onClose={onClose} />

            <Flex opacity={0.2} zIndex={-1}>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        background: {
                            color: {
                                value: "transparent",
                            },
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 6,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            </Flex>
        </Flex>
    )
}
