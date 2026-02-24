import { Flex, Text, Image, Link } from "@chakra-ui/react"
import Container from "./Container"

const projects = [
    {
        title: "Raquel Steffen Fitness",
        description: "A comprehensive fitness and wellness platform offering personal training, pilates, yoga, and group classes. Features include an integrated e-commerce system for class purchases, real-time class scheduling with Google Calendar integration, automated email notifications, and secure payment processing. The platform enables clients to browse classes, book sessions, and manage their fitness journey seamlessly.",
        image: "/icons/projects/mainPage.png",
        link: "https://www.raquelsteffen.com.au/",
    },
]

const Projects = () => {
    return (
        <Container
            id="Projects"
            height={"auto"}
            backgroundColor="rgba(49,49,51,0.7)"
            opacity={0.8}
            borderRadius="30px"
            maxW="1500px"
            marginX="auto"
            marginY={10}
            padding="20px">
            <Flex flexDir="column">
                <Text
                    backgroundClip="text"
                    color="#ff6b31"
                    as={"a"}
                    fontSize={{ base: 24, md: 32, lg: 40 }}
                    fontWeight="bold"
                    marginBottom="20px">
                    Featured Projects
                </Text>
                {projects.map((project) => (
                    <Flex
                        key={project.title}
                        justifyItems={"center"}
                        gap={2}
                        flexDir={{ base: "column", xl: "row" }}>
                        <Flex h="100%" flexDir={"column"} wrap={"wrap"} marginRight={10}>
                            <Text fontWeight="bold" fontSize={{ base: 14, md: 16, lg: 20 }} color="#ff6b31" mb={2}>
                                {project.title}
                            </Text>
                            <Text textAlign="initial" fontSize={{ base: 12, md: 14, lg: 20 }}>
                                {project.description}
                            </Text>
                        </Flex>
                        <Flex flexDir="column">
                            <Link href={project.link} isExternal display="block">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    borderRadius="lg"
                                    w="full"
                                    h="auto"
                                    transition="all 0.3s ease"
                                    _hover={{
                                        transform: "scale(1.02)",
                                        boxShadow: "0 8px 24px rgba(255, 107, 49, 0.3)",
                                    }}
                                    cursor="pointer"
                                />
                            </Link>
                        </Flex>
                    </Flex>
                ))}
            </Flex>
        </Container>
    )
}

export default Projects
