import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Box, Text, Flex, Button } from "@chakra-ui/react";

export default function Newsletter() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <Box className="container mx-auto px-4 py-8">
      <Text data-aos="zoom-in" fontSize="3xl" fontWeight="bold" textAlign="center" mb={6}>
        Newsletter
      </Text>
      <Flex justifyContent="center">
        <Box className="bg-purple-500 p-6 rounded shadow-md w-full max-w-xl" data-aos="zoom-in">
          <Text className="text-2xl font-bold text-center mb-4">Connecting You To Care!</Text>
          <Text className="py-3 font-medium text-center mb-4">Subscribe to our newsletter to get updates on our latest news</Text>
          <Flex justifyContent="center">
            <input type="email" placeholder="Enter email" className="w-full p-2 my-4 border border-gray-300 rounded" />
            <Button colorScheme="purple" ml={2}>Subscribe</Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}