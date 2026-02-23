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
                    Below are the technologies and tools I'm proficient in, spanning front-end development, testing,
                    and quality assurance.
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
                            src="icons/Technology/figma.svg"
                            alt="Figma"
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
                            src="icons/Technology/python.svg"
                            alt="Python"
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
                            src="icons/Technology/nodejs.svg"
                            alt="Node.js"
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
                            src="icons/Technology/cpp.svg"
                            alt="C++"
                        />
                    </Box>
                </Flex>

                <Text
                    marginTop={8}
                    marginBottom={4}
                    fontSize={{ base: 18, md: 24, lg: 30 }}
                    backgroundClip="text"
                    color="#ff6b31"
                    fontWeight="bold">
                    Testing & QA Tools
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
                        flexDir="column"
                        justifyContent="center"
                        alignItems="center">
                        <Image
                            w="70px"
                            h="70px"
                            src="icons/Technology/github-actions.svg"
                            alt="GitHub Actions"
                        />
                        <Text fontSize={{ base: 8, md: 10 }} marginTop={1} color="#ccc">
                            GitHub Actions
                        </Text>
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
                        flexDir="column"
                        justifyContent="center"
                        alignItems="center">
                        <Image
                            objectFit="contain"
                            w="70px"
                            h="70px"
                            src="icons/Technology/zephyr-scale.png"
                            alt="Zephyr Scale"
                        />
                        <Text fontSize={{ base: 8, md: 10 }} marginTop={1} color="#ccc">
                            Zephyr Scale
                        </Text>
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
                        flexDir="column"
                        justifyContent="center"
                        alignItems="center">
                        <Image
                            objectFit="contain"
                            w="70px"
                            h="70px"
                            src="icons/Technology/qt-creator.svg"
                            alt="Qt Creator"
                        />
                        <Text fontSize={{ base: 8, md: 10 }} marginTop={1} color="#ccc">
                            Qt Creator
                        </Text>
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
                        flexDir="column"
                        justifyContent="center"
                        alignItems="center">
                        <Image
                            objectFit="contain"
                            w="70px"
                            h="70px"
                            src="icons/Technology/git.svg"
                            alt="Git"
                        />
                        <Text fontSize={{ base: 8, md: 10 }} marginTop={1} color="#ccc">
                            Git
                        </Text>
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
                        flexDir="column"
                        justifyContent="center"
                        alignItems="center">
                        <Image
                            objectFit="contain"
                            w="70px"
                            h="70px"
                            src="icons/Technology/jira.svg"
                            alt="Jira"
                        />
                        <Text fontSize={{ base: 8, md: 10 }} marginTop={1} color="#ccc">
                            Jira
                        </Text>
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
                        flexDir="column"
                        justifyContent="center"
                        alignItems="center">
                        <Image
                            objectFit="contain"
                            w="70px"
                            h="70px"
                            src="icons/Technology/test-automation.svg"
                            alt="Test Automation"
                        />
                        <Text fontSize={{ base: 8, md: 10 }} marginTop={1} color="#ccc">
                            Test Automation
                        </Text>
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
                        flexDir="column"
                        justifyContent="center"
                        alignItems="center">
                        <Image
                            objectFit="contain"
                            w="70px"
                            h="70px"
                            src="icons/Technology/hl7.svg"
                            alt="HL7"
                        />
                        <Text fontSize={{ base: 8, md: 10 }} marginTop={1} color="#ccc">
                            HL7
                        </Text>
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
                        flexDir="column"
                        justifyContent="center"
                        alignItems="center">
                        <Image
                            objectFit="contain"
                            w="70px"
                            h="70px"
                            src="icons/Technology/mirth-connect.svg"
                            alt="Mirth Connect"
                        />
                        <Text fontSize={{ base: 8, md: 10 }} marginTop={1} color="#ccc">
                            Mirth Connect
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Technology
