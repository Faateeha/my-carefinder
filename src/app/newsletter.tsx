"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import React from "react";
import { useEffect } from "react";
import { Box, Text, Flex, Button, Input } from "@chakra-ui/react";

export default function Newsletter() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <Box w="100%" bg="blue.500" py={10}>
      <Text
        data-aos="zoom-in"
        fontSize="3xl"
        fontWeight="bold"
        textAlign="center"
        mb={6}
        color="white"
      >
        Newsletter
      </Text>
      <Flex justifyContent="center" alignItems="center">
        <Box p={6} rounded="md" shadow="md" w="full" maxW="xl" bg="white">
          <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={4}>
            Connecting You To Care!
          </Text>
          <Text py={3} fontWeight="medium" textAlign="center" mb={4}>
            Subscribe to our newsletter to get updates on our latest news
          </Text>
          <Flex justifyContent="center">
            <Input
              type="email"
              placeholder="Enter email"
              w="70%"
              p={2}
              my={4}
              borderColor="gray.300"
              borderRadius="md"
            />
            <Button colorScheme="blue" ml={2}>
              Subscribe
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
