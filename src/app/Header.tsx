import { Button, Flex } from "@chakra-ui/react"
import Image from "next/image"

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
                    <Image src={"/icons/DiegoLogo.svg"} width={100} height={100} alt={"DiegoLogo"} />
                </Flex>
                <Flex marginTop={{ base: "14px", lg: "0px" }}>
                    <Button
                        _hover={{ color: "#ff6b31" }}
                        as={"a"}
                        height="30px"
                        href="#Experiences"
                        fontSize="18px"
                        variant="unstyled">
                        Experiences
                    </Button>
                    <Button
                        _hover={{ color: "#ff6b31" }}
                        height="30px"
                        as={"a"}
                        href="#Technologies"
                        fontSize="18px"
                        variant="unstyled"
                        marginX={{ base: "20px", lg: "20px" }}>
                        Technologies
                    </Button>
                    <Button
                        _hover={{ color: "#ff6b31" }}
                        as={"a"}
                        height="30px"
                        fontSize="18px"
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
