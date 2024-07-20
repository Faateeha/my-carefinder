"use client";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { Box, Input, Button, Text, VStack } from "@chakra-ui/react";

// Initialize Firestore and Auth
const auth = getAuth();
const db = getFirestore();

const AdminRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Add user to the users collection with admin role
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        role: "admin",
      });

      alert("Registration successful. You are now an admin.");
      router.push("/admin");
    } catch (err) {
      console.error("Registration error", err);
    }
  };

  return (
    <Box className="container mx-auto px-4 py-20 text-purple-400">
      <VStack spacing={4} align="start">
        <Text fontSize="3xl" fontWeight="bold">
          Admin Registration
        </Text>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <Input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <Button colorScheme="purple" onClick={handleRegister}>
          Register
        </Button>
      </VStack>
    </Box>
  );
};

export default AdminRegister;

