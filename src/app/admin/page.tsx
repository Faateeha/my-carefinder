"use client";


import { Box, Button, Input, Text, VStack, Heading, Image } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/app/firebase";

const AdminLogin = () => {
  const [user, loading, error] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      setAuthError(err.message);
    }
  };

  useEffect(() => {
    if (user) {
      const checkAdminRole = async () => {
        try {
          const userDoc = doc(db, "users", user.uid);
          const docSnap = await getDoc(userDoc);

          if (docSnap.exists() && docSnap.data()?.role === "admin") {
            router.push("/adminprofile");
          } else {
            auth.signOut();
            alert("You are not authorized to access this page.");
          }
        } catch (error) {
          console.error("Error checking admin role: ", error);
        }
      };

      checkAdminRole();
    }
  }, [user, router]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bg="gray.200"
    >
      <Box display="flex" width="full" maxW="4xl" boxShadow="lg">
        {/* Left side image */}
        <Box
          flex="1"
          display={{ base: "none", md: "block" }}
          bg="purple.500"
          color="white"
          borderRadius="lg"
        >
          <Image
            src="/Images/admin.png" 
            alt="Admin Login"
            objectFit="cover"
            height="100%"
            borderRadius="lg 0 0 lg"
          />
        </Box>

        {/* Right side form */}
        <Box
          flex="1"
          p={8}
          bg="white"
          borderRadius="lg"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <VStack spacing={6} align="stretch">
            <Heading as="h2" size="lg" textAlign="center" color="blue.500">
              Admin Login
            </Heading>
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              variant="filled"
              focusBorderColor="blue.500"
            />
            <Input
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              variant="filled"
              focusBorderColor="blue.500"
            />
            <Button colorScheme="blue" onClick={handleLogin} size="lg">
              Login
            </Button>
            {loading && <Text color="gray.500">Loading...</Text>}
            {authError && <Text color="red.500">Error: {authError}</Text>}
            <Button colorScheme="blue" onClick={() => router.push("/adminreg")}>
              Become an Admin
            </Button>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLogin;
