import { Flex, Text, Image, Box } from "@chakra-ui/react"

const Technology = () => {
    return (
        <Flex
            id="Technologies"
            justifyContent="center"
            flexDir="column"
            bgColor="transparent"
            maxW="1500px"
            color="#FFF"
            paddingX={{ base: "10px", md: "30px" }}
            w="full"
            h="full"
            marginX="auto">
            <Text
                marginBottom="20px"
                fontSize={{ base: "18px", lg: "28px" }}
                fontFamily="oswald"
                backgroundClip="text"
                color="#ff6b31"
                fontWeight="bold">
                Technologies
            </Text>

            <Flex justifyContent="space-between" overflow="hidden" gap={{ base: "2", lg: "5" }} overflowX="auto">
                <Box minW="90px" minH="100px">
                    <Image
                        objectFit="contain"
                        w="60px"
                        h="60px"
                        src="icons/Technology/react.svg"
                        alt="React_Developers"
                    />
                </Box>
                <Box minW="90px" minH="100px">
                    <Image
                        objectFit="contain"
                        w="90px"
                        h="90px"
                        src="icons/Technology/nextjs.svg"
                        alt="React Native Developers.svg"
                    />
                </Box>
                <Box minW="90px" minH="100px">
                    <Image
                        objectFit="contain"
                        w="70px"
                        h="70px"
                        src="icons/Technology/reactNative.svg"
                        alt="React_Developers"
                    />
                </Box>
                <Box minW="90px" minH="100px">
                    <Image
                        objectFit="contain"
                        w="90px"
                        h="90px"
                        src="icons/Technology/expo.svg"
                        alt="React Native Developers.svg"
                    />
                </Box>
                <Box minW="90px" minH="100px">
                    <Image
                        objectFit="contain"
                        w="60px"
                        h="60px"
                        src="icons/Technology/storybook-icon.svg"
                        alt="React_Developers"
                    />
                </Box>
                <Box minW="90px" minH="100px">
                    <Image
                        objectFit="contain"
                        w="60px"
                        h="60px"
                        src="icons/Technology/typescript-icon.svg"
                        alt="React_Developers"
                    />
                </Box>
                <Box minW="90px" minH="100px">
                    <Image
                        objectFit="contain"
                        w="60px"
                        h="60px"
                        src="icons/Technology/logo-javascript.svg"
                        alt="React_Developers"
                    />
                </Box>{" "}
            </Flex>
        </Flex>
    )
}

export default Technology
