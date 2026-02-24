/* eslint-disable react/no-unescaped-entities */
import { Flex, Text } from "@chakra-ui/react"

const About = () => {
    return (
        <Flex marginX="auto" maxW="1500px" padding="20px" flexDir="column">
            <Text
                fontSize={{ base: 24, md: 32, lg: 40 }}
                backgroundClip="text"
                color="#ff6b31 "
                fontWeight="bold"
                marginBottom="20px">
                About me
            </Text>

            <Text as={"a"} fontSize={{ base: 12, md: 14, lg: 20 }}>
                Hello! I'm Diego, a 38-year-old Brazilian developer and quality assurance professional currently
                residing in Perth, Australia. With a background in Analysis and Systems Development, I bring expertise
                in front-end development, software testing, and I enjoy venturing into backend development with C++,
                Python, and Node.js.
                <br />
                <br />
                My journey encompasses complementary skill sets: crafting intuitive web and mobile applications,
                ensuring software quality through comprehensive testing strategies, and exploring backend technologies.
                As a Software Tester at Vitaltrace, I've developed expertise in test automation, CI/CD pipelines with
                GitHub Actions, and test management using Zephyr Scale. I'm passionate about the intersection of
                development and quality assurance, believing that great software requires both excellent code and
                rigorous testing.
                <br />
                <br />
                My approach combines technical proficiency with attention to detail and a curiosity for full-stack
                development. Whether I'm developing responsive interfaces, creating automated test scripts, or
                experimenting with backend solutions, I prioritize delivering exceptional user experiences and robust,
                reliable software. I'm constantly learning and evolving, eager to collaborate on innovative projects
                that push the boundaries of technology while maintaining the highest standards of quality.
            </Text>
        </Flex>
    )
}

export default About
