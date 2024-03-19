"use client"

import { Box, chakra, Container, Stack, Text, useColorModeValue, VisuallyHidden } from "@chakra-ui/react"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { ReactNode } from "react"
import Image from "next/image"

const SocialButton = ({ children, label, href }: { children: ReactNode; label: string; href: string }) => {
    return (
        <chakra.button
            bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
            rounded={"full"}
            w={8}
            h={8}
            cursor={"pointer"}
            as={"a"}
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

export default function SmallWithLogoLeft() {
    return (
        <Box bg={useColorModeValue("gray.50", "gray.900")} color={useColorModeValue("gray.700", "gray.200")}>
            <Container
                as={Stack}
                maxW="1500px"
                py={4}
                direction={{ base: "column", md: "row" }}
                spacing={4}
                justify={{ base: "center", md: "space-between" }}
                align={{ base: "center", md: "center" }}>
                <Image src={"/icons/DiegoLogo.svg"} width={100} height={100} alt={"DiegoLogo"} />

                <Text fontSize={20} fontWeight={500}>
                    diegosantosmtd@gmail.com
                </Text>
                <Stack direction={"row"} spacing={6}>
                    <SocialButton
                        label={"LinkedIn"}
                        href={"https://www.linkedin.com/in/diego-pereira-dos-santos-b7790218a/"}>
                        <FaLinkedin size={50} />
                    </SocialButton>
                    <SocialButton label={"GitHub"} href={"https://github.com/Diego-P-S"}>
                        <FaGithub size={50} />
                    </SocialButton>
                    <SocialButton label={"Instagram"} href={"https://www.instagram.com/diegocheers/"}>
                        <FaInstagram size={50} />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    )
}
