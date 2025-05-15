import { Box, Flex, Text, Image, Link, useColorModeValue } from "@chakra-ui/react"
import { motion } from "framer-motion"
import Container from "./Container"
import { useState } from "react"
import { Badge, Divider, IconButton } from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons"

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
        link: "https://www.raquelsteffen.com.br",
        github: "https://github.com/yourusername/raquel-steffen"
    },
    // Add more projects here as needed
]

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
    const [showFull, setShowFull] = useState(false)
    const bgColor = useColorModeValue("white", "gray.800")
    const borderColor = useColorModeValue("gray.200", "gray.700")
    const shortDesc = project.description.length > 160 && !showFull
        ? project.description.slice(0, 160) + "..."
        : project.description

    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
            transition={{ duration: 0.25 }}
        >
            <Box
                bg={bgColor}
                borderRadius="2xl"
                overflow="hidden"
                border="1px"
                borderColor={borderColor}
                boxShadow="2xl"
                _hover={{ boxShadow: "dark-lg" }}
                maxW="370px"
                minW={{ base: "90vw", sm: "340px" }}
                mx="auto"
            >
                <Box position="relative" h="220px" w="100%">
                    <Image
                        src={project.image}
                        alt={project.title}
                        w="100%"
                        h="220px"
                        objectFit="cover"
                    />
                    <Box
                        position="absolute"
                        bottom={0}
                        left={0}
                        w="100%"
                        px={4}
                        py={3}
                        bgGradient="linear(to-t, rgba(0,0,0,0.7), rgba(0,0,0,0.0))"
                    >
                        <Text color="white" fontWeight="bold" fontSize="xl" letterSpacing="wide">
                            {project.title}
                        </Text>
                    </Box>
                </Box>
                <Divider my={2} />
                <Box p={5} pt={2} display="flex" flexDirection="column" alignItems="flex-start">
                    <Text color="gray.700" fontSize="md" mb={2}>
                        {shortDesc}
                        {project.description.length > 160 && (
                            <IconButton
                                aria-label={showFull ? "Show less" : "Show more"}
                                icon={showFull ? <ChevronUpIcon /> : <ChevronDownIcon />}
                                size="xs"
                                variant="ghost"
                                ml={1}
                                onClick={() => setShowFull((v) => !v)}
                            />
                        )}
                    </Text>
                    {showFull && project.description.length > 160 && (
                        <Text color="gray.700" fontSize="md" mb={2}>{project.description.slice(160)}</Text>
                    )}
                    <Flex wrap="wrap" gap={2} mt={2}>
                        {project.technologies.map((tech, idx) => (
                            <Badge
                                key={tech}
                                colorScheme={badgeColor(idx)}
                                px={3}
                                py={1}
                                borderRadius="md"
                                fontSize="sm"
                                fontWeight="semibold"
                                boxShadow="sm"
                            >
                                {tech}
                            </Badge>
                        ))}
                    </Flex>
                </Box>
            </Box>
        </motion.div>
    )
}

// Helper to assign different badge colors
function badgeColor(idx: number) {
    const colors = [
        "orange", "blue", "purple", "green", "teal", "pink", "yellow", "cyan", "red", "gray"
    ]
    return colors[idx % colors.length]
}

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
                                <Image src={project.image} alt={project.title} borderRadius="lg" w="100%" h="auto" />
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