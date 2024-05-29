import { Box, Container, VStack, Text, Heading, Image, Flex, SimpleGrid, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="gray.800" color="white" p={4}>
        <Flex maxW="container.lg" mx="auto" justify="space-between" align="center">
          <Heading size="md">Carpenter's Portfolio</Heading>
          <Flex>
            <Link to="#home"><Text mx={2}>Home</Text></Link>
            <Link to="#about"><Text mx={2}>About</Text></Link>
            <Link to="#projects"><Text mx={2}>Projects</Text></Link>
            <Link to="#contact"><Text mx={2}>Contact</Text></Link>
          </Flex>
        </Flex>
      </Box>

      {/* Hero Section */}
      <Box id="home" bgImage="url('/path/to/your/carpentry-image.jpg')" bgSize="cover" bgPos="center" color="white" py={20} textAlign="center">
        <Heading size="2xl">Welcome to [Carpenter's Name] Portfolio</Heading>
        <Text fontSize="xl" mt={4}>Crafting quality woodwork with passion and precision.</Text>
      </Box>

      {/* About Section */}
      <Container id="about" maxW="container.lg" py={20}>
        <VStack spacing={4} textAlign="center">
          <Heading>About Me</Heading>
          <Text fontSize="lg">I am a skilled carpenter with over 10 years of experience in creating custom woodwork. My passion for carpentry is reflected in every project I undertake.</Text>
        </VStack>
      </Container>

      {/* Projects Section */}
      <Container id="projects" maxW="container.lg" py={20}>
        <VStack spacing={4} textAlign="center">
          <Heading>Projects</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={8}>
            <Box>
              <Image src="/path/to/project1.jpg" alt="Project 1" />
              <Text mt={2}>Project 1 Description</Text>
            </Box>
            <Box>
              <Image src="/path/to/project2.jpg" alt="Project 2" />
              <Text mt={2}>Project 2 Description</Text>
            </Box>
            {/* Add more projects as needed */}
          </SimpleGrid>
        </VStack>
      </Container>

      {/* Contact Section */}
      <Container id="contact" maxW="container.lg" py={20}>
        <VStack spacing={4} textAlign="center">
          <Heading>Contact Me</Heading>
          <Text fontSize="lg">Feel free to reach out for any custom carpentry projects or inquiries.</Text>
          <Box as="form" mt={8} w="100%">
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="email" isRequired mt={4}>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="message" isRequired mt={4}>
              <FormLabel>Message</FormLabel>
              <Textarea />
            </FormControl>
            <Button colorScheme="blue" mt={4} type="submit">Send Message</Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;