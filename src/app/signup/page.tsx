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
import { Button, Input, Text, Box, VStack } from "@chakra-ui/react";
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
    <Box className="flex justify-center items-center min-h-screen ">
      <VStack
        spacing={4}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <Text className="text-2xl">Sign Up</Text>
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
        <Button colorScheme="purple" onClick={handleSignUp}>
          Sign Up
        </Button>
        <Text>or</Text>
        <Button className="text-black bg-white" onClick={handleGoogleSignUp}>
          {" "}
          <FcGoogle />
          <span className="px-2">Sign Up with Google</span>
        </Button>
        <Link href="/signin" className="hover:underline">
          Already have an account? Sign In
        </Link>
        <Link href="/">
          <b>Go back to home page</b>
        </Link>
      </VStack>
    </Box>
  );
};

export default SignUp;
