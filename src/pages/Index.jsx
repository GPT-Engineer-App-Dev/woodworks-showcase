import { Box, Container, Flex, Heading, Text, VStack, Image, SimpleGrid, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">Carpenter Portfolio</Heading>
        <Flex>
          <Box mx={2}><Link to="#home">Home</Link></Box>
          <Box mx={2}><Link to="#about">About</Link></Box>
          <Box mx={2}><Link to="#projects">Projects</Link></Box>
          <Box mx={2}><Link to="#contact">Contact</Link></Box>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box id="home" bgImage="url('/path-to-carpentry-image.jpg')" bgSize="cover" bgPos="center" height="60vh" display="flex" alignItems="center" justifyContent="center">
        <Heading as="h2" size="2xl" color="white" textAlign="center">Welcome to [Carpenter's Name] Portfolio</Heading>
      </Box>

      {/* About Section */}
      <Box id="about" p={8} bg="gray.100">
        <Heading as="h3" size="xl" mb={4}>About Me</Heading>
        <Text fontSize="lg">I am a skilled carpenter with over 10 years of experience in creating custom furniture and home improvements. My passion is to bring your vision to life with quality craftsmanship and attention to detail.</Text>
      </Box>

      {/* Projects Section */}
      <Box id="projects" p={8}>
        <Heading as="h3" size="xl" mb={4}>Projects</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          <Box bg="white" boxShadow="md" borderRadius="md" overflow="hidden">
            <Image src="/path-to-project-image1.jpg" alt="Project 1" />
            <Box p={4}>
              <Heading as="h4" size="md">Project 1</Heading>
              <Text mt={2}>Description of project 1.</Text>
            </Box>
          </Box>
          <Box bg="white" boxShadow="md" borderRadius="md" overflow="hidden">
            <Image src="/path-to-project-image2.jpg" alt="Project 2" />
            <Box p={4}>
              <Heading as="h4" size="md">Project 2</Heading>
              <Text mt={2}>Description of project 2.</Text>
            </Box>
          </Box>
          <Box bg="white" boxShadow="md" borderRadius="md" overflow="hidden">
            <Image src="/path-to-project-image3.jpg" alt="Project 3" />
            <Box p={4}>
              <Heading as="h4" size="md">Project 3</Heading>
              <Text mt={2}>Description of project 3.</Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Contact Section */}
      <Box id="contact" p={8} bg="gray.100">
        <Heading as="h3" size="xl" mb={4}>Contact Me</Heading>
        <form>
          <FormControl id="name" mb={4}>
            <FormLabel>Name</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="email" mb={4}>
            <FormLabel>Email</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="message" mb={4}>
            <FormLabel>Message</FormLabel>
            <Textarea />
          </FormControl>
          <Button type="submit" colorScheme="blue">Send</Button>
        </form>
      </Box>
    </Container>
  );
};

export default Index;