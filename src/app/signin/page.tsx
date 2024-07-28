"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";
import Link from "next/link";
import { Button, Input, Text, Box, VStack, Image, Stack } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import Aos from "aos";
import "aos/dist/aos.css";

const SignIn: React.FC = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/getstarted");
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError("Please enter your email to reset password.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setError("Password reset email sent!");
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
            data-aos="fade-right"
            src="/Images/signin.png"
            alt="Sign In"
            boxSize="full"
            objectFit="cover"
          />
        </Box>
        <VStack
          data-aos="fade-left"
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
          <Text fontSize="2xl" fontWeight="bold">Sign In</Text>
          {error && <Text color="red.500">{error}</Text>}
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
          <Button colorScheme="purple" onClick={handleSignin} w="full">
            Sign In
          </Button>
          <Button
            variant="link"
            colorScheme="purple"
            onClick={handleForgotPassword}
          >
            Forgot Password?
          </Button>
          <Text>or</Text>
          <Button
            variant="outline"
            onClick={handleGoogleSignIn}
            w="full"
            leftIcon={<FcGoogle />}
          >
            Sign In with Google
          </Button>
          <Link href="/signup">
            <Text color="purple.500" _hover={{ textDecoration: "underline" }}>
              Don't have an account? Sign Up
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

export default SignIn;
