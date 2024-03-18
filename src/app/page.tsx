/* eslint-disable react/no-unescaped-entities */
"use client"
import { useCallback } from "react"
import { Flex, Image, Text, useDisclosure, Grid, GridItem, Link } from "@chakra-ui/react"
import Particles from "react-particles"
import { loadSlim } from "tsparticles-slim"

import Footer from "./Footer"
import Technology from "./Technology"
import React from "react"
import Header from "./Header"
import { motion } from "framer-motion"
import About from "./About"
import TalkModal from "./talkModal"

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
                maxW="1000px"
                id="About"
                alignItems="center"
                justifyItems={"center"}
                flexDir={{ base: "column", lg: "row" }}>
                <motion.animate initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 5 }}>
                    <Image
                        src="icons/Profile/MeWithBorder.jpeg"
                        borderRadius="full"
                        height={{ base: "300px", lg: "full" }}
                        width={{ base: "300px", lg: "full" }}
                        alt="AboutMe"
                    />
                </motion.animate>

                <About />
            </Flex>

            <Flex marginX="auto" maxW="1500px" id="Experiences" minH="100vh" padding="30px">
                <Grid
                    templateColumns={{ base: "repeat(1, 3fr)", lg: "repeat(3, 1fr)" }}
                    gap={6}
                    flexDir={{ base: "column", lg: "row" }}>
                    <GridItem w="100%" h="100%">
                        <Text
                            backgroundClip="text"
                            color="#ff6b31 "
                            as={"a"}
                            fontSize={{ base: "18px", lg: "28px" }}
                            fontWeight="bold"
                            marginBottom="20px">
                            Experience
                        </Text>

                        <Link href="https://www.wevolt.com.au">
                            <Image src="icons/wevoltgreen.svg" w="90px" h="90px" alt="wevolt" />
                        </Link>

                        <Text textAlign="initial" as="a">
                            I collaborate with cross-functional teams to design and develop intuitive, responsive
                            interfaces for web and mobile applications.
                            <br />
                            <br /> My responsibilities include implementing new features, conducting thorough code
                            reviews, integrating external APIs, and actively participating in agile development sprints
                            to ensure projects are delivered on time. <br />
                            <br />
                            Additionally, I utilize Storybook to meticulously craft and manage a comprehensive library
                            of UI components, fostering consistency and efficiency throughout the development lifecycle.
                        </Text>
                    </GridItem>
                    <GridItem w="100%" h="100%">
                        <Image src="icons/Wevolt-EV-Charging-Solutions.jpg" w="auto" h="auto" alt="wevolt" />
                    </GridItem>
                </Grid>
            </Flex>

            <Technology />

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
