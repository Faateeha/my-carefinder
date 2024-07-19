"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Testimonial from "@/app/testimonial";
import Newsletter from "@/app/newsletter";
import Hero from "@/app/hero";
import { Text, Button, Box, VStack, Flex } from "@chakra-ui/react";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-12">
      <Hero />

      <Flex
        w="full"
        align="center"
        justify="center"
        data-aos="fade-up"
        px={6}
        direction={{ base: "column", md: "row" }}
        spacing={8}
      >
        <VStack align="start" spacing={4} maxW="lg" textAlign={{ base: "center", md: "left" }}>
          <Text fontSize="2xl" fontWeight="bold">
            Welcome to Carefinder
          </Text>
          <Text fontSize="lg" color="gray.600">
            Discover healthcare facilities and book appointments with ease. Your health is our priority, and we&apos;re here to connect you to the best care available.
          </Text>
          <Link href="/getstarted">
          <Button colorScheme="purple" size="lg" className="mt-4">
            Get Started
          </Button>
          </Link>
        </VStack>

        <Box flexShrink={0} w="full" maxW="md" mt={{ base: 8, md: 0 }}>
          <Image
            src="/Images/carefinder2.webp"
            alt="Healthcare"
            layout="responsive"
            width={800}
            height={400}
            className="rounded-lg"
          />
        </Box>
      </Flex>

      <Testimonial />
      <Flex
        w="full"
        align="center"
        justify="center"
        data-aos="fade-up"
        px={6}
        direction={{ base: "column", md: "row" }}
        spacing={8}
      >
        <VStack align="start" spacing={4} maxW="lg" textAlign={{ base: "center", md: "left" }}>
          <Text fontSize="2xl" fontWeight="bold">
            Why Carefinder?
          </Text>
          <Text fontSize="lg" color="gray.600">
          With the growing need for accessible healthcare information, Carefinder was created to address the challenge of finding reliable hospital information. Our platform aims to bridge the gap between healthcare providers and patients by providing accurate and up-to-date hospital data.
          </Text>
        </VStack>

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
      </Flex>


      <Box w="full" data-aos="fade-up">
      <Newsletter />
      </Box>

      
    </main>
  );
}

