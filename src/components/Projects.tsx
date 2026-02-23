import { Flex, Text, Image, Badge, Link } from "@chakra-ui/react"
import Container from "./Container"

const projects = [
    {
        title: "Raquel Steffen Fitness",
        description: "A comprehensive fitness and wellness platform offering personal training, pilates, yoga, and group classes. Features include an integrated e-commerce system for class purchases, real-time class scheduling with Google Calendar integration, automated email notifications, and secure payment processing. The platform enables clients to browse classes, book sessions, and manage their fitness journey seamlessly.",
        image: "/icons/projects/mainPage.png",
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Chakra UI",
            "Node.js",
            "Stripe API",
            "Google Calendar API",
            "Email Notifications",
            "E-commerce Integration",
            "Responsive Design"
        ],
        link: "https://www.raquelsteffen.com.au/",
        github: "https://github.com/yourusername/raquel-steffen"
    },
    // Add more projects here as needed
]


const Projects = () => {
    return (
        <Container
            id="Projects"
            py={20}
            backgroundColor="rgba(49,49,51,0.7)"
            opacity={0.8}
            borderRadius="30px"
            maxW="1500px"
            marginX="auto"
            marginY={10}
        >
            <Flex flexDir="column">
                <Text
                    fontSize={{ base: "3xl", md: "4xl" }}
                    fontWeight="bold"
                    textAlign="center"
                    mb={10}
                    color="#ff6b31"
                >
                    Featured Projects
                </Text>
                <Flex
                    gap={8}
                    wrap="wrap"
                    justify="center"
                    px={{ base: 4, md: 8 }}
                >
                    {projects.map((project) => (
                        <Flex
                            key={project.title}
                            gap={2}
                            flexDir={{ base: "column", xl: "row" }}
                        >
                            <Flex flexDir="column" align="center" minW="300px" maxW="400px" mb={{ base: 4, xl: 0 }}>
                                <Link href={project.link} isExternal _hover={{ opacity: 0.8 }}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        borderRadius="lg"
                                        w="100%"
                                        h="auto"
                                        transition="all 0.3s ease"
                                        _hover={{ transform: "scale(1.02)", boxShadow: "0 8px 24px rgba(255, 107, 49, 0.3)" }}
                                        cursor="pointer"
                                    />
                                </Link>
                                <Text fontWeight="bold" fontSize="2xl" mt={4}>{project.title}</Text>
                                <Flex wrap="wrap" gap={2} mt={2}>
                                    {project.technologies.map(tech => (
                                        <Badge key={tech} colorScheme="orange">{tech}</Badge>
                                    ))}
                                </Flex>
                            </Flex>
                            <Flex flexDir="column" flex="1" justify="center">
                                <Text fontSize={{ base: 14, md: 18 }}>{project.description}</Text>
                                {/* Optionally, add a carousel or more images here */}
                            </Flex>
                        </Flex>
                    ))}
                </Flex>
            </Flex>
        </Container>
    )
}

export default Projects 