"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/app/firebase";
import { useRouter } from "next/navigation";
import { Box, Button, Input, Text, VStack, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const AdminLogin = () => {
  const [user, loading, error] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error("Login error", err);
    }
  };

  useEffect(() => {
    if (user) {
      const checkAdminRole = async () => {
        const userDoc = doc(db, "users", user.uid);
        const docSnap = await getDoc(userDoc);

        if (docSnap.exists() && docSnap.data()?.role === "admin") {
          router.push("/adminprofile");
        } else {
          auth.signOut();
          alert("You are not authorized to access this page.");
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
      bg="gray.50"
    >
      <Box 
        maxW="md" 
        borderWidth={1} 
        borderRadius="lg" 
        boxShadow="lg" 
        p={8}
        bg="white"
      >
        <VStack spacing={6} align="stretch">
          <Heading as="h2" size="lg" textAlign="center" color="purple.500">
            Admin Login
          </Heading>
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            variant="filled"
            focusBorderColor="purple.400"
          />
          <Input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            variant="filled"
            focusBorderColor="purple.400"
          />
          <Button colorScheme="purple" onClick={handleLogin} size="lg">
            Login
          </Button>
          {loading && <Text color="gray.500">Loading...</Text>}
          {error && <Text color="red.500">Error: {error.message}</Text>}
        </VStack>
      </Box>
    </Box>
  );
};

export default AdminLogin;

