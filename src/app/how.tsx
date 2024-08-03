import { Box, Text, SimpleGrid, VStack } from "@chakra-ui/react";

export default function HowItWorks() {
  return (
    <Box w="100%" className="bg-purple-300" py={10} px={4}>
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={6}>
        How It Works.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        {sections.map((section, index) => (
          <VStack
            key={index}
            p={6}
            bg="white"
            shadow="md"
            borderRadius="md"
            alignItems="start"
          >
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              {section.title}
            </Text>
            <Text color="gray.600">{section.description}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
}

const sections = [
  {
    title: "Share",
    description: "Easily share hospital information with others.",
  },
  {
    title: "Get Started",
    description: "Quickly sign up and start exploring.",
  },
  {
    title: "Markdown Support",
    description: "Use markdown to format your notes and documents.",
  },
  {
    title: "Select",
    description: "Choose from a variety of options tailored to you.",
  },
  {
    title: "Search",
    description: "Search for preferred hospital name/address within your location or select from a list of nearby hospitals.",
  },
  {
    title: "Sign Up",
    description: "Create an account to unlock full features.",
  },
];
