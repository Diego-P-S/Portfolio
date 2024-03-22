/* eslint-disable react/no-unescaped-entities */
import { Flex, Text, Image, Box, useMediaQuery } from "@chakra-ui/react"

const Technology = () => {
    const [isLowerThan768] = useMediaQuery("(max-width: 768px, max-height:800px)")

    return (
        <Flex
            id="Technologies"
            justifyContent="center"
            flexDir="column"
            bgColor="transparent"
            maxW="1500px"
            color="#FFF"
            my={50}
            paddingX="20px"
            w="full"
            h="full"
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
                <Text textAlign="initial" as="a" fontSize={{ base: 12, md: 14, lg: 20 }} marginBottom={10}>
                    Below, I've outlined some of the cutting-edge technologies I'm proficient in as a front-end
                    developer.
                </Text>
                <Flex
                    justifyContent="space-between"
                    overflow="hidden"
                    gap={{ base: "2", lg: "5" }}
                    overflowX="auto"
                    align={"center"}
                    paddingX={"20px"}>
                    <Box
                        minW="100px"
                        minH="100px"
                        transition="all .2s ease-in-out"
                        cursor={"pointer"}
                        _hover={{
                            transform: !isLowerThan768 ? "scale(1.2)" : "",
                        }}
                        display="flex"
                        justifyContent="center"
                        alignItems="center">
                        <Image w="70px" h="70px" src="icons/Technology/react.svg" alt="ReactJS" />
                    </Box>

                    <Box
                        transition="all .2s ease-in-out"
                        cursor={"pointer"}
                        _hover={{
                            transform: !isLowerThan768 ? "scale(1.2)" : "",
                        }}
                        minW="100px"
                        minH="100px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center">
                        <Image objectFit="contain" w="90px" h="90px" src="icons/Technology/nextjs.svg" alt="next.svg" />
                    </Box>
                    <Box
                        transition="all .2s ease-in-out"
                        cursor={"pointer"}
                        _hover={{
                            transform: !isLowerThan768 ? "scale(1.2)" : "",
                        }}
                        minW="100px"
                        minH="100px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center">
                        <Image
                            objectFit="contain"
                            w="90px"
                            h="90px"
                            src="icons/Technology/reactNative.svg"
                            alt="ReactNative"
                        />
                    </Box>
                    <Box
                        transition="all .2s ease-in-out"
                        cursor={"pointer"}
                        _hover={{
                            transform: !isLowerThan768 ? "scale(1.2)" : "",
                        }}
                        minW="100px"
                        minH="100px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center">
                        <Image objectFit="contain" w="100px" h="100px" src="icons/Technology/expo.svg" alt="expo.svg" />
                    </Box>
                    <Box
                        transition="all .2s ease-in-out"
                        cursor={"pointer"}
                        _hover={{
                            transform: !isLowerThan768 ? "scale(1.2)" : "",
                        }}
                        minW="100px"
                        minH="100px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center">
                        <Image
                            objectFit="contain"
                            w="60px"
                            h="60px"
                            src="icons/Technology/storybook-icon.svg"
                            alt="Storybook"
                        />
                    </Box>
                    <Box
                        transition="all .2s ease-in-out"
                        cursor={"pointer"}
                        _hover={{
                            transform: !isLowerThan768 ? "scale(1.2)" : "",
                        }}
                        minW="100px"
                        minH="100px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center">
                        <Image
                            objectFit="contain"
                            w="60px"
                            h="60px"
                            src="icons/Technology/typescript-icon.svg"
                            alt="TypeScript"
                        />
                    </Box>
                    <Box
                        transition="all .2s ease-in-out"
                        cursor={"pointer"}
                        _hover={{
                            transform: !isLowerThan768 ? "scale(1.2)" : "",
                        }}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        minW="100px"
                        minH="100px">
                        <Image
                            objectFit="contain"
                            w="60px"
                            h="60px"
                            src="icons/Technology/logo-javascript.svg"
                            alt="JavaScript"
                        />
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Technology
