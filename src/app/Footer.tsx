import { Flex, Text } from "@chakra-ui/react"

const Footer = () => {
    return (
        <Flex color="#FFF" justify="center" bgGradient="linear-gradient(125deg,#ff6b31 20%,#FFF)" padding="10px">
            <Flex align="center" flexDirection={{ base: "column", md: "row" }} maxW="1500px" w="full">
                <Text marginTop={{ base: "10px", md: 0 }} fontWeight={600} color="#fff" marginLeft={3}>
                    diegosantosmtd@gmail.com
                </Text>
            </Flex>
        </Flex>
    )
}

export default Footer
