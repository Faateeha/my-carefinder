"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/app/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { Box, Button, Input, Text, VStack, Heading } from "@chakra-ui/react";

const AdminRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await updateProfile(user, { displayName: username });
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        role: "admin",
      });
      alert("Registration successful. You are now an admin.");
      router.push("/admin");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bg="gray.50">
      <Box maxW="md" borderWidth={1} borderRadius="lg" boxShadow="lg" p={8} bg="white">
        <VStack spacing={6} align="stretch">
          <Heading as="h2" size="lg" textAlign="center" color="blue.500">
            Admin Registration
          </Heading>
          {error && <Text color="red.500">{error}</Text>}
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            variant="filled"
            focusBorderColor="blue.400"
          />
          <Input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            variant="filled"
            focusBorderColor="blue.400"
          />
          <Button colorScheme="blue" onClick={handleRegister} size="lg">
            Register
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default AdminRegister;


