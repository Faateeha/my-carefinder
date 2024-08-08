import {
  Box,
  Heading,
  Text,
  Flex,
  List,
  ListItem,
  Link,
  VStack,
} from "@chakra-ui/react";
import Hero from "@/app/hero";
import Image from "next/image";
const About: React.FC = () => {
  return (
    <div>
      <Hero />
      <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-200">
        <Heading as="h1" size="2xl">
          About Carefinder
        </Heading>

        <Text fontSize="lg">
          Carefinder is a comprehensive platform designed to help users find,
          export, and share information about hospitals within their region in
          Nigeria. Our mission is to make healthcare more accessible and
          transparent for everyone.
        </Text>

        <Heading as="h2" size="lg">
          Purpose
        </Heading>
        <Text fontSize="lg">
          With the growing need for accessible healthcare information,
          Carefinder was created to address the challenge of finding reliable
          hospital information. Our platform aims to bridge the gap between
          healthcare providers and patients by providing accurate and up-to-date
          hospital data.
        </Text>

        <Heading as="h2" size="lg" className="py-2">
          Features
        </Heading>
        <Flex
          w="full"
          align="center"
          justify="center"
          px={6}
          direction={{ base: "column", md: "row" }}
          gap={8}
        >
          <Box flexShrink={0} w="full" maxW="md" mt={{ base: 8, md: 0 }}>
            <Image
              src="/Images/carefinder8.jpeg"
              alt="Healthcare"
              layout="responsive"
              width={800}
              height={400}
              className="rounded-lg"
            />
          </Box>
          <VStack
            align="start"
            spacing={4}
            maxW="lg"
            textAlign={{ base: "center", md: "left" }}
            className="px-4"
          >
            <List spacing={2} fontSize="xl">
              <ListItem>
                🔍 <strong>Search Hospitals:</strong> Easily search for
                hospitals based on location and other criteria.
              </ListItem>
              <ListItem>
                📄 <strong>Export Information:</strong> Export hospital details
                for offline use or sharing with others.
              </ListItem>
              <ListItem>
                📤 <strong>Share:</strong> Share hospital information directly
                with friends and family.
              </ListItem>
              <ListItem>
                🗺️ <strong>Map View:</strong> Visualize hospital locations on an
                interactive map.
              </ListItem>
            </List>
          </VStack>
        </Flex>

        <Heading as="h2" size="lg">
          User Benefits
        </Heading>
        <Text fontSize="lg">
          Carefinder empowers users by providing them with the tools to make
          informed decisions about their healthcare options. Whether you&apos;re
          looking for the nearest hospital, need to export hospital details for
          reference, or want to share information with loved ones, Carefinder
          has you covered.
        </Text>

        <Heading as="h2" size="lg">
          Technology
        </Heading>
        <Text fontSize="lg">
          Carefinder is built using modern web technologies including Next.js,
          TypeScript, Chakra UI, and Tailwind CSS. We also leverage Firebase for
          authentication and data storage, ensuring a secure and seamless user
          experience.
        </Text>

        <Heading as="h2" size="lg">
          Future Plans
        </Heading>
        <Text fontSize="lg">
          We are continuously working on improving Carefinder. Future updates
          will include additional filtering options, user reviews, and a more
          comprehensive database of hospitals. Stay tuned for more exciting
          features!
        </Text>

        <Heading as="h2" size="lg">
          Contact Us
        </Heading>
        <Text fontSize="lg">
          If you have any questions, feedback, or need support, please feel free
          to{" "}
          <Link href="/contact" color="blue.500" className="hover:underline">
            contact us
          </Link>
          .
        </Text>
      </div>
    </div>
  );
};

export default About;
