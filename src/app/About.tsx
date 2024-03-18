/* eslint-disable react/no-unescaped-entities */
import { Flex, Text } from "@chakra-ui/react"

const About = () => {
    return (
        <Flex marginX="auto" maxW="1500px" padding="30px" flexDir="column">
            <Text
                fontSize={{ base: 24, md: 32, lg: 48 }}
                backgroundClip="text"
                color="#ff6b31 "
                fontWeight="bold"
                marginBottom="20px">
                About me
            </Text>

            <Text as={"a"} fontSize={{ base: 12, md: 16, lg: 24 }}>
                Hello! I'm Diego, a 36-year-old Brazilian front-end developer currently residing in Perth, Australia.
                With a year and a half of experience and a background in Analysis and Systems Development, I'm
                constantly driven by the desire to learn and evolve.
                <br />
                <br />
                My journey so far has been an exciting blend of exploration and learning. I've immersed myself in the
                realms of web and mobile development, particularly fascinated by the intersection of design and
                functionality. My approach always prioritizes delivering the best user experience.
                <br />
                <br />
                Additionally, I strive to develop responsive code, ensuring that the products I create are accessible
                and functional across a wide range of devices and screen sizes. While my journey has been filled with
                challenges and discoveries, I'm excited about the opportunities that the future holds. I'm eager to
                collaborate on innovative projects and contribute to the ever-evolving technological landscape.
            </Text>
        </Flex>
    )
}

export default About
