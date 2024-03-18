/* eslint-disable react/no-unescaped-entities */
"use client"
import { useState, useCallback } from "react"
import {
    Button,
    Flex,
    Image,
    Text,
    Modal,
    ModalContent,
    ModalHeader,
    FormControl,
    ModalBody,
    FormLabel,
    ModalCloseButton,
    useDisclosure,
    Input,
    Grid,
    GridItem,
    Textarea,
    Link,
} from "@chakra-ui/react"
import Particles from "react-particles"
import { loadSlim } from "tsparticles-slim"

import Footer from "./Footer"
import Technology from "./Technology"
import React from "react"
import Header from "./Header"
import { motion } from "framer-motion"
import About from "./About"

export default function Home() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    function sendEmail(e) {
        e.preventDefault()
        if (name === "" || email === "" || message === "") {
            alert("Fill in all the fields!")
        } else {
            window.open(`mailto:diegosantosmtd@gmail.com?subject=${name} - ${email}&body=${message}`, "_blank")
            onClose()
        }
    }

    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine)
    }, [])

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container)
    }, [])

    return (
        <Flex flexDir="column">
            <Header onOpen={onOpen} />

            <Flex minH="100vh" marginX="auto" maxW="1000px" id="About" alignItems="center" justifyItems={"center"}>
                <motion.animate initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 5 }}>
                    <Image
                        src="icons/Profile/MeWithBorder.jpeg"
                        borderRadius="full"
                        height="full"
                        width="ful"
                        alt="AboutMe"
                    />
                </motion.animate>

                <About />
            </Flex>

            <Flex marginX="auto" maxW="1500px" id="Experiences" minH="100vh" padding="30px" marginTop={40}>
                <Grid templateColumns="repeat(3, 1fr)" gap={6}>
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

                        <Text textAlign="initial" as="a" color="#FFF">
                            I collaborate with cross-functional teams to design and develop intuitive, responsive
                            interfaces for web and mobile applications.
                            <br /> My responsibilities include implementing new features, conducting thorough code
                            reviews, integrating external APIs, and actively participating in agile development sprints
                            to ensure projects are delivered on time. <br />
                            Additionally, I utilize Storybook to meticulously craft and manage a comprehensive library
                            of UI components, fostering consistency and efficiency throughout the development lifecycle.
                        </Text>
                    </GridItem>
                </Grid>
            </Flex>

            <Technology />

            <Footer />

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalContent color="black">
                    <ModalHeader>
                        <Flex flexDir="column">
                            <Flex align="center">
                                <Image src="/dahmotta.svg" alt="logo" width="50px" marginRight="10px" />
                                <Text>LET'S TALK?</Text>
                            </Flex>
                            <Text fontSize="16px" marginTop="20px" textAlign="center">
                                Send me a message and I will reply to you ASAP
                            </Text>
                        </Flex>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input type="text" onChange={(e) => setName(e.target.value)} value={name} />

                            <FormLabel marginTop="10px">E-mail</FormLabel>
                            <Input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />

                            <FormLabel marginTop="10px">Mensagem</FormLabel>
                            <Textarea
                                placeholder="Digite aqui..."
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                            />
                        </FormControl>
                        <Flex marginTop="20px">
                            <Button colorScheme="gray" mr={3} onClick={onClose}>
                                Fechar
                            </Button>
                            <Button
                                // href={`mailto:diegosantosmtd@gmail.com?subject=${name} - ${email}&body=${mensagem}`}
                                variant="ghost"
                                color="green"
                                onClick={sendEmail}>
                                Enviar
                            </Button>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>

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
