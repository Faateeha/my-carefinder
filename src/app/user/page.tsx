"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { Box, Text, Button, VStack, Flex, Spinner, Center } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const UserDashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      // Redirect to home or login if the user is not authenticated
      router.push("/");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <Center height="100vh">
        <Spinner size="xl" color="purple.500" />
      </Center>
    );
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <Box className="container  px-4 py-20 text-blue-400 bg-gray-200">
      {user && (
        <VStack spacing={4} align="start">
          <Text fontSize="3xl" fontWeight="bold">
            Hello, {user.displayName || user.email}
          </Text>
          <Text fontSize="md" color="gray.600" className="text-center">
            Welcome to your dashboard. Here, you can manage your profile, view your activities, and access various features.
          </Text>
          <Text fontSize="md" color="gray.600">
            If you need any help, feel free to reach out to our support team.
          </Text>
          <Flex>
            <Button colorScheme="blue" mr={2}>
              Edit Profile
            </Button>
            <Button colorScheme="blue" variant="outline">
              View Activities
            </Button>
          </Flex>
        </VStack>
      )}
    </Box>
  );
};

export default UserDashboard;