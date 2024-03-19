/* eslint-disable react/no-unescaped-entities */
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
            my={50}
            paddingX={{ base: "10px", md: "30px" }}
            w="full"
            h="full"
            minH="100vh"
            marginX="auto">
            <Text
                marginBottom="20px"
                fontSize={{ base: 24, md: 32, lg: 40 }}
                backgroundClip="text"
                color="#ff6b31"
                fontWeight="bold">
                Technologies
            </Text>

            <Flex flexDir={"column"}>
                <Text textAlign="initial" as="a" fontSize={{ base: 12, md: 16, lg: 24 }} marginBottom={10}>
                    Below, I've outlined some of the cutting-edge technologies I'm proficient in as a front-end
                    developer.
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
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Technology
