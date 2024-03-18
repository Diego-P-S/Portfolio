import { Button, Flex } from "@chakra-ui/react"

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
                justifyContent={"flex-end"}>
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
                    marginX="20px">
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
    )
}

export default Header
