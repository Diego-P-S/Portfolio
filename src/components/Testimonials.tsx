/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
"use client"

import { Box, Flex, Text, Stack, Container, Avatar, useColorModeValue, chakra, VisuallyHidden } from "@chakra-ui/react"
import { FaLinkedin } from "react-icons/fa"
import { ReactNode } from "react"

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

const TestimonialText = (props: Props) => {
    const { children } = props

    return (
        <Text textAlign={"center"} color={useColorModeValue("gray.600", "gray.400")} fontSize={16}>
            {children}
        </Text>
    )
}

const TestimonialAvatar = ({ src, name, title, site }: { src: string; name: string; title: string; site?: string }) => {
    return (
        <Flex align={"center"} mt={8} direction={"column"}>
            <Avatar size={"lg"} src={src} mb={2} />
            <Stack spacing={-1} align={"center"} flexDir={"row"}>
                <Flex flexDir={"column"} align={"center"}>
                    <Text fontWeight={600}>{name}</Text>
                    <Text fontSize={"sm"} color="#ff6b31">
                        {title}
                    </Text>
                </Flex>
                <SocialButton label={"LinkedIn"} href={site}>
                    <FaLinkedin size={50} />
                </SocialButton>
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
                                I've really enjoyed seeing Diego grow with us at WeVolt. From day one, he brought this
                                amazing energy and dedication that's hard to find. What strikes me most is not just his
                                skill in front-end development, but also how he faces every challenge with a smile and a
                                'let's do this' attitude. More than that, Diego is incredibly humble and just a great
                                person to be around. He makes our team better, not just with the work he does, but with
                                the positivity he brings every day. Anyone would be lucky to have him on their team.
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={"icons/Experiences/Madan.jpeg"}
                            name={"Madan Morris"}
                            title={"CTO at Wevolt"}
                            site="https://www.linkedin.com/in/madan-morris-98615624/"
                        />
                    </Testimonial>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialText>
                                I have had the please of working with Diego during my time at Wevolt. He possesses an
                                exceptional ability to transform design concepts into seamless and visually stunning
                                interfaces. With his proficiency in crafting web and mobile interfaces and delivering
                                engaging user experiences, Diego is a valuable asset to any team.
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={
                                "https://media.licdn.com/dms/image/C5603AQHVSEqs2JaSgA/profile-displayphoto-shrink_200_200/0/1651839864362?e=1716422400&v=beta&t=UeErXFom9n0oJu29GmC2IaqIkDXaCilZAWnYaTvK0eg"
                            }
                            name={"Janmay Patel"}
                            title={"Fullstack at Wevolt"}
                            site="https://www.linkedin.com/in/janmayp/"
                        />
                    </Testimonial>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialText>
                                Diego is an outstanding junior front end developer with a strong focus on React and
                                React Native. Throughout our year working together, his dedication, quick learning, and
                                attention to detail stood out. Diego consistently delivered high-quality code and
                                actively contributed to our team's success. As his mentor, I confidently recommend him
                                for any front end development role; his professionalism and talent make him a valuable
                                asset to any project.
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={"icons/Experiences/Henrique.jpg"}
                            name={"Henrique Hermes"}
                            title={"Front End Developer"}
                            site="https://www.linkedin.com/in/henrique-hermes-59703a121/"
                        />
                    </Testimonial>
                </Stack>
            </Container>
        </Box>
    )
}
