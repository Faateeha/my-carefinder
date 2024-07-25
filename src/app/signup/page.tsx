"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import Link from "next/link";
import { Button, Input, Text, Box, VStack, Image, Stack } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await updateProfile(user, { displayName: username });
      router.push("/");
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <Box className="min-h-screen flex flex-col justify-center items-center">
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing={0}
        alignItems="center"
        width="full"
        maxW="6xl"
        mx="auto"
      >
        <Box display={{ base: "none", lg: "block" }} flex="1">
          <Image
            src="/Images/signin.png"
            alt="Sign Up"
            boxSize="full"
            objectFit="cover"
          />
        </Box>
        <VStack
          spacing={4}
          bg="white"
          p={6}
          rounded="md"
          shadow="lg"
          w="full"
          maxW="md"
          mx="auto"
          mt={{ base: 8, lg: 0 }}
        >
          <Text fontSize="2xl" fontWeight="bold">Sign Up</Text>
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
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button colorScheme="purple" onClick={handleSignUp} w="full">
            Sign Up
          </Button>
          <Text>or</Text>
          <Button
            variant="outline"
            onClick={handleGoogleSignUp}
            w="full"
            leftIcon={<FcGoogle />}
          >
            Sign Up with Google
          </Button>
          <Link href="/signin">
            <Text color="purple.500" _hover={{ textDecoration: "underline" }}>
              Already have an account? Sign In
            </Text>
          </Link>
          <Link href="/">
            <Text color="purple.500" _hover={{ textDecoration: "underline" }}>
              <b>Go back to home page</b>
            </Text>
          </Link>
        </VStack>
      </Stack>
    </Box>
  );
};

export default SignUp;
