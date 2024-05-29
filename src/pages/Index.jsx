import { Box, Container, VStack, Text, Heading, Image, Flex, Button, Input, Textarea } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">Carpenter Portfolio</Heading>
        <Flex>
          <Button as={Link} to="/" variant="link" color="white" mr={4}>Home</Button>
          <Button as={Link} to="#about" variant="link" color="white" mr={4}>About</Button>
          <Button as={Link} to="#projects" variant="link" color="white" mr={4}>Projects</Button>
          <Button as={Link} to="#contact" variant="link" color="white">Contact</Button>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box
        as="section"
        bgImage="url('/path/to/your/carpentry-background.jpg')"
        bgSize="cover"
        bgPosition="center"
        height="60vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        textAlign="center"
      >
        <VStack spacing={4}>
          <Heading size="2xl">Welcome to [Carpenter's Name] Portfolio</Heading>
          <Text fontSize="xl">Crafting quality woodwork with precision and care</Text>
        </VStack>
      </Box>

      {/* About Section */}
      <Box as="section" id="about" p={8} bg="gray.100">
        <Heading size="xl" mb={4}>About Me</Heading>
        <Text fontSize="lg">
          Hello! I'm [Carpenter's Name], a skilled carpenter with over [X] years of experience in crafting high-quality woodwork. My passion for carpentry drives me to create beautiful and functional pieces that meet the unique needs of each client.
        </Text>
      </Box>

      {/* Projects Section */}
      <Box as="section" id="projects" p={8}>
        <Heading size="xl" mb={4}>Projects</Heading>
        <Flex wrap="wrap" justifyContent="space-around">
          {/* Example Project */}
          <Box width="300px" bg="white" boxShadow="md" mb={4}>
            <Image src="/path/to/project-image.jpg" alt="Project Image" />
            <Box p={4}>
              <Heading size="md">Project Title</Heading>
              <Text mt={2}>Brief description of the project highlighting key features and craftsmanship.</Text>
            </Box>
          </Box>
          {/* Add more projects as needed */}
        </Flex>
      </Box>

      {/* Contact Section */}
      <Box as="section" id="contact" p={8} bg="gray.100">
        <Heading size="xl" mb={4}>Contact Me</Heading>
        <VStack spacing={4} as="form">
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" />
          <Textarea placeholder="Your Message" />
          <Button colorScheme="blue">Send Message</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;