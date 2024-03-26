import React from "react";
import { Box, Heading, Text, VStack, HStack, Wrap, WrapItem, Link, Image } from "@chakra-ui/react";
import { FaBook, FaChartLine } from "react-icons/fa";

const researchTopics = ["Artificial Intelligence", "Robotics", "Quantum Computing", "Nanotechnology", "Renewable Energy"];

const papers = [
  {
    title: "Advances in AI for Autonomous Systems",
    author: "John Doe",
    url: "#",
  },
  {
    title: "Quantum Computing: The Future of Computing",
    author: "Jane Smith",
    url: "#",
  },
  {
    title: "Nanotechnology in Medicine",
    author: "Dr. Michael Johnson",
    url: "#",
  },
];

const Index = () => {
  return (
    <Box maxWidth="960px" margin="auto" padding={8}>
      <Heading as="h1" size="2xl" textAlign="center" marginBottom={8}>
        Applied R&D Organization
      </Heading>
      <Image src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGxhYnxlbnwwfHx8fDE3MTE0NjI2NjV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Research Lab" borderRadius="md" marginBottom={8} />
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading as="h2" size="xl" marginBottom={4}>
            Research Topics
          </Heading>
          <Wrap spacing={4}>
            {researchTopics.map((topic) => (
              <WrapItem key={topic}>
                <Box backgroundColor="blue.500" color="white" paddingX={4} paddingY={2} borderRadius="md">
                  {topic}
                </Box>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
        <Box>
          <Heading as="h2" size="xl" marginBottom={4}>
            Research Papers
          </Heading>
          <VStack spacing={4} align="stretch">
            {papers.map((paper) => (
              <Box key={paper.title} borderWidth={1} borderRadius="md" padding={4}>
                <HStack>
                  <Box as={FaBook} size="24px" marginRight={2} />
                  <Link href={paper.url} isExternal>
                    <Heading as="h3" size="md">
                      {paper.title}
                    </Heading>
                  </Link>
                </HStack>
                <Text>{paper.author}</Text>
              </Box>
            ))}
          </VStack>
        </Box>
        <Box>
          <Heading as="h2" size="xl" marginBottom={4}>
            Research Graphs
          </Heading>
          <VStack spacing={4}>
            <Link href="#">
              <HStack>
                <Box as={FaChartLine} size="24px" marginRight={2} />
                <Text>AI Adoption Trends</Text>
              </HStack>
            </Link>
            <Link href="#">
              <HStack>
                <Box as={FaChartLine} size="24px" marginRight={2} />
                <Text>Quantum Computing Market Growth</Text>
              </HStack>
            </Link>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
