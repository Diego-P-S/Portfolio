/* eslint-disable react/no-unescaped-entities */
"use client"
import { useCallback, useEffect, useState } from "react"
import { Flex, Image, Text, useDisclosure, Link, Box } from "@chakra-ui/react"
import Particles from "react-particles"
import { loadSlim } from "tsparticles-slim"

import Footer from "./Footer"
import Technology from "./Technology"
import React from "react"
import Header from "./Header"
import { motion } from "framer-motion"
import About from "./About"
import TalkModal from "./talkModal"
import Carousel from "../components/Carousel"
import { Engine } from "tsparticles-engine"
import SpinnerLoader from "../components/Spinnerloader"
import Testimonials from "../components/Testimonials"
import Projects from "../components/Projects"
import experiencesData from "../data/experiences.json"

export default function Home() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const delay = setTimeout(() => {
            setIsLoading(true)
        }, 3000)

        return () => clearTimeout(delay)
    }, [])

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine)
    }, [])

    const particlesLoaded = useCallback(async (container: any) => {
        console.log(container)
    }, [])
    return (
        <Flex flexDir="column">
            {!isLoading ? (
                <Flex justifyContent="center" alignItems="center" minHeight="100vh">
                    <SpinnerLoader />
                </Flex>
            ) : (
                <>
                    <Header onOpen={onOpen} />
                    <Flex flexDir="column" marginX={"20px"}>
                        <Flex
                            marginTop={{ base: 180, lg: 0 }}
                            minH="100vh"
                            marginX="auto"
                            maxW="1500px"
                            id="About"
                            alignItems="center"
                            justifyItems={"center"}
                            flexDir={{ base: "column", lg: "row" }}>
                            <motion.animate
                                initial={{ opacity: 0.1 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 5 }}>
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
                        <Box maxW="1500px" marginX="auto" w="full" px={{ base: 4, md: 6 }} py={{ base: 12, md: 20 }} id="Experiences">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}>
                                <Text
                                    fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                                    fontWeight="800"
                                    textAlign="center"
                                    mb={{ base: 16, md: 20 }}
                                    bgGradient="linear(to-r, #ff6b31, #ff8f61)"
                                    bgClip="text"
                                    letterSpacing="tight">
                                    Experience
                                </Text>
                            </motion.div>

                            <Flex flexDir="column" gap={{ base: 16, md: 24 }}>
                                {experiencesData.experiences.map((experience, index) => (
                                    <motion.div
                                        key={experience.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                        viewport={{ once: true }}>
                                        <Box
                                            bg="rgba(255, 255, 255, 0.03)"
                                            backdropFilter="blur(20px)"
                                            borderRadius="24px"
                                            border="1px solid rgba(255, 255, 255, 0.08)"
                                            p={{ base: 6, md: 10 }}
                                            transition="all 0.3s ease"
                                            _hover={{
                                                bg: "rgba(255, 255, 255, 0.05)",
                                                transform: "translateY(-4px)",
                                                boxShadow: "0 20px 60px rgba(255, 107, 49, 0.15)",
                                            }}>
                                            <Flex
                                                gap={{ base: 8, xl: 12 }}
                                                flexDir={{ base: "column", xl: "row" }}
                                                align={{ base: "stretch", xl: "flex-start" }}>

                                                {/* Left Column - Company Info & Visual */}
                                                <Flex
                                                    flexDir="column"
                                                    minW={{ base: "full", xl: "380px" }}
                                                    maxW={{ base: "full", xl: "420px" }}
                                                    gap={6}>

                                                    {/* Company Header */}
                                                    <Flex flexDir="column" align={{ base: "center", xl: "flex-start" }} gap={4}>
                                                        <Link href={experience.website} isExternal>
                                                            <Image
                                                                src={experience.logo}
                                                                maxW={{ base: "120px", md: "140px" }}
                                                                h="auto"
                                                                objectFit="contain"
                                                                alt={experience.company}
                                                                transition="all 0.3s ease"
                                                                _hover={{
                                                                    transform: "scale(1.05)",
                                                                    opacity: 0.8,
                                                                }}
                                                            />
                                                        </Link>

                                                        <Flex flexDir="column" gap={2} w="full" align={{ base: "center", xl: "flex-start" }}>
                                                            <Text
                                                                fontSize={{ base: "2xl", md: "3xl" }}
                                                                fontWeight="700"
                                                                color="#ff6b31"
                                                                textAlign={{ base: "center", xl: "left" }}
                                                                lineHeight="1.2">
                                                                {experience.role}
                                                            </Text>
                                                            <Flex align="center" gap={2} color="rgba(255, 255, 255, 0.6)">
                                                                <Box w="4px" h="4px" borderRadius="full" bg="#ff6b31" />
                                                                <Text fontSize={{ base: "sm", md: "md" }} fontWeight="500">
                                                                    {experience.company} • {experience.period}
                                                                </Text>
                                                            </Flex>
                                                        </Flex>
                                                    </Flex>

                                                    {/* Technologies */}
                                                    <Box>
                                                        <Text
                                                            fontSize="sm"
                                                            fontWeight="600"
                                                            color="rgba(255, 255, 255, 0.5)"
                                                            mb={3}
                                                            textTransform="uppercase"
                                                            letterSpacing="wide"
                                                            textAlign={{ base: "center", xl: "left" }}>
                                                            Tech Stack
                                                        </Text>
                                                        <Flex wrap="wrap" gap={2} justifyContent={{ base: "center", xl: "flex-start" }}>
                                                            {experience.technologies.map((tech) => (
                                                                <Text
                                                                    key={tech}
                                                                    px={3}
                                                                    py={1}
                                                                    borderRadius="6px"
                                                                    fontSize={{ base: "xs", md: "sm" }}
                                                                    fontWeight="400"
                                                                    bg="rgba(255, 255, 255, 0.05)"
                                                                    color="rgba(255, 255, 255, 0.7)"
                                                                    border="1px solid rgba(255, 255, 255, 0.1)"
                                                                    transition="all 0.2s ease"
                                                                    cursor="default"
                                                                    _hover={{
                                                                        bg: "rgba(255, 255, 255, 0.08)",
                                                                        color: "rgba(255, 255, 255, 0.9)",
                                                                        borderColor: "rgba(255, 255, 255, 0.2)",
                                                                    }}>
                                                                    {tech}
                                                                </Text>
                                                            ))}
                                                        </Flex>
                                                    </Box>

                                                    {/* Carousel */}
                                                    <Box
                                                        borderRadius="16px"
                                                        overflow="hidden"
                                                        border="1px solid rgba(255, 255, 255, 0.1)"
                                                        bg="rgba(0, 0, 0, 0.2)">
                                                        <Carousel images={experience.carouselImages} />
                                                    </Box>
                                                </Flex>

                                                {/* Right Column - Description & Responsibilities */}
                                                <Flex flexDir="column" flex="1" gap={6}>
                                                    {/* Description */}
                                                    <Box>
                                                        <Text
                                                            fontSize={{ base: "md", md: "lg" }}
                                                            lineHeight="1.8"
                                                            color="rgba(255, 255, 255, 0.85)"
                                                            textAlign={{ base: "justify", xl: "left" }}>
                                                            {experience.description}
                                                        </Text>
                                                    </Box>

                                                    {/* Divider */}
                                                    <Box h="1px" bg="rgba(255, 255, 255, 0.1)" />

                                                    {/* Responsibilities */}
                                                    <Box>
                                                        <Text
                                                            fontSize={{ base: "lg", md: "xl" }}
                                                            fontWeight="700"
                                                            color="#ff6b31"
                                                            mb={4}
                                                            letterSpacing="tight">
                                                            Key Responsibilities
                                                        </Text>
                                                        <Flex flexDir="column" gap={3}>
                                                            {experience.responsibilities.map((resp, idx) => (
                                                                <Flex key={idx} gap={3} align="flex-start">
                                                                    <Box
                                                                        mt={2}
                                                                        minW="6px"
                                                                        w="6px"
                                                                        h="6px"
                                                                        borderRadius="full"
                                                                        bg="linear-gradient(135deg, #ff6b31 0%, #ff8f61 100%)"
                                                                    />
                                                                    <Text
                                                                        fontSize={{ base: "sm", md: "md" }}
                                                                        lineHeight="1.7"
                                                                        color="rgba(255, 255, 255, 0.75)">
                                                                        {resp}
                                                                    </Text>
                                                                </Flex>
                                                            ))}
                                                        </Flex>
                                                    </Box>
                                                </Flex>
                                            </Flex>
                                        </Box>
                                    </motion.div>
                                ))}
                            </Flex>
                        </Box>
                    </Flex>
                    <Projects />
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
                </>
            )}
        </Flex>
    )
}
