"use client"

import { Flex, Text } from "@chakra-ui/react"

import Messages from "./messages"
import Container from "../Container"

const Testimonials = () => {
    return (
        <Container maxW="1500px" paddingX="20px">
            <>
                <Text color="#ff6b31" fontSize={{ base: 24, md: 32, lg: 40 }} fontWeight={"bold"}>
                    Testimonials
                </Text>
                <Flex color="#fff" flexDir={"column"} alignItems={"center"}>
                    <Messages />
                </Flex>
            </>
        </Container>
    )
}

export default Testimonials
