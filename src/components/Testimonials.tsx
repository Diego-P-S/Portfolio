/* eslint-disable no-undef */
"use client"

import { Box, Flex, Text, Stack, Container, Avatar, useColorModeValue } from "@chakra-ui/react"

interface Props {
    children: React.ReactNode
}

const Testimonial = (props: Props) => {
    const { children } = props

    return <Box>{children}</Box>
}

const TestimonialContent = (props: Props) => {
    const { children } = props

    return (
        <Stack
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"lg"}
            p={8}
            rounded={"xl"}
            align={"center"}
            pos={"relative"}
            _after={{
                content: `""`,
                w: 0,
                h: 0,
                borderLeft: "solid transparent",
                borderLeftWidth: 16,
                borderRight: "solid transparent",
                borderRightWidth: 16,
                borderTop: "solid",
                borderTopWidth: 16,
                borderTopColor: useColorModeValue("white", "gray.800"),
                pos: "absolute",
                bottom: "-16px",
                left: "50%",
                transform: "translateX(-50%)",
            }}>
            {children}
        </Stack>
    )
}

const TestimonialText = (props: Props) => {
    const { children } = props

    return (
        <Text
            textAlign={"center"}
            fontFamily="MontSerrat"
            color={useColorModeValue("gray.600", "gray.400")}
            fontSize={16}>
            {children}
        </Text>
    )
}

const TestimonialAvatar = ({ src, name, title }: { src: string; name: string; title: string }) => {
    return (
        <Flex align={"center"} mt={8} direction={"column"}>
            <Avatar src={src} mb={2} />
            <Stack spacing={-1} align={"center"}>
                <Text fontWeight={600}>{name}</Text>
                <Text fontSize={"sm"} color="#ff6b31">
                    {title}
                </Text>
            </Stack>
        </Flex>
    )
}

export default function WithSpeechBubbles() {
    return (
        <Box bg="transparent">
            <Container maxW={"1500px"} py={16} as={Stack} spacing={12}>
                <Stack spacing={0}>
                    <Text color="#ff6b31 " fontWeight={"bold"} fontSize={{ base: 24, md: 32, lg: 40 }}>
                        Portfolio Highlights
                    </Text>
                </Stack>
                <Stack direction={{ base: "column", md: "row" }} spacing={{ base: 10, md: 4, lg: 10 }}>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh
                                lectus feugiat nunc sem.
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={
                                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                            }
                            name={"Jane Cooper"}
                            title={"CEO at ABC Corporation"}
                        />
                    </Testimonial>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh
                                lectus feugiat nunc sem.
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={
                                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                            }
                            name={"Jane Cooper"}
                            title={"CEO at ABC Corporation"}
                        />
                    </Testimonial>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh
                                lectus feugiat nunc sem.
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={
                                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                            }
                            name={"Jane Cooper"}
                            title={"CEO at ABC Corporation"}
                        />
                    </Testimonial>
                </Stack>
            </Container>
        </Box>
    )
}
