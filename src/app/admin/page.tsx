"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/app/firebase"; // Ensure you have firestore initialized
import { useRouter } from "next/navigation";
import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const AdminLogin = () => {
  const [user, loading, error] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.error("Login error", err);
    }
  };

  useEffect(() => {
    if (user) {
      db.collection('users').doc(user.uid).get().then(doc => {
        if (doc.exists && doc.data()?.role === "admin") {
          router.push("/adminprofile");
        } else {
          auth.signOut();
          alert("You are not authorized to access this page.");
        }
      });
    }
  }, [user, router]);

  return (
    <Box className="container mx-auto px-4 py-20 text-purple-400">
      <VStack spacing={4} align="start">
        <Text fontSize="3xl" fontWeight="bold">
          Admin Login
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
        <Button colorScheme="purple" onClick={handleLogin}>
          Login
        </Button>
        {loading && <Text>Loading...</Text>}
        {error && <Text>Error: {error.message}</Text>}
      </VStack>
    </Box>
  );
};

export default AdminLogin;
