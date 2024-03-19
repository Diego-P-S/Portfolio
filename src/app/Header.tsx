import { Button, Flex, IconButton } from "@chakra-ui/react"
import Image from "next/image"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"

interface Props {
    onOpen: any
}

const Header = ({ onOpen }: Props) => {
    return (
        <Flex padding="20px" top="0" right="0" position="absolute" width="full">
            <Flex
                flexDir={{ base: "column", lg: "row" }}
                align="center"
                marginX="auto"
                maxW="1500px"
                padding="30px"
                w="full"
                justifyContent={"space-between"}>
                <Flex>
                    <Flex gap={4} mt="5px" alignItems={"center"}>
                        <IconButton
                            onClick={() =>
                                window.open("https://www.linkedin.com/in/diego-pereira-dos-santos-b7790218a/", "_blank")
                            }
                            borderRadius={"full"}
                            fontSize={"25px"}
                            icon={<FaLinkedinIn />}
                            aria-label={"linkedin"}
                        />
                        <Image src={"/icons/DiegoLogo.svg"} width={100} height={100} alt={"DiegoLogo"} />
                        <IconButton
                            onClick={() => window.open("https://github.com/Diego-P-S", "_blank")}
                            borderRadius={"full"}
                            fontSize={"25px"}
                            icon={<FaGithub />}
                            aria-label={"github"}
                        />
                    </Flex>
                </Flex>
                <Flex marginTop={{ base: "14px", lg: "0px" }} wrap="wrap">
                    <Button
                        _hover={{ color: "#ff6b31" }}
                        as={"a"}
                        height="30px"
                        href="#Experiences"
                        fontSize={{ base: "12px", lg: "20px" }}
                        variant="unstyled">
                        Experiences
                    </Button>
                    <Button
                        _hover={{ color: "#ff6b31" }}
                        height="30px"
                        as={"a"}
                        href="#Technologies"
                        fontSize={{ base: "12px", lg: "20px" }}
                        variant="unstyled"
                        marginX={{ base: "10px", lg: "20px" }}>
                        Technologies
                    </Button>
                    <Button
                        _hover={{ color: "#ff6b31" }}
                        as={"a"}
                        height="30px"
                        fontSize={{ base: "12px", lg: "20px" }}
                        variant="unstyled"
                        onClick={onOpen}>
                        Lets talk?
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Header
