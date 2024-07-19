"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import Link from "next/link";
import { Button, Input, Text, Box, VStack } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

const SignIn: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSignin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            router.push('/getstarted')
        } catch(error) {
            setError(error.message)
        }
    }
    const handleGoogleSignIn = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            router.push('/');
        } catch (error: any) {
            setError(error.message);
        }
    }
    return (
        <Box className="flex justify-center items-center min-h-screen ">
            <VStack spacing={4} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                <Text className="text-2xl">Sign In</Text>
                {error && <Text color="red.500">{error}</Text>}
                <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input placeholder="password" type="password" value={password}
                onChange={(e) => setPassword(e.target.value)} />
                <Button colorScheme="purple" onClick={handleSignin}>Sign In</Button>
                <Text>or</Text>
                <Button className="text-black bg-white" onClick={handleGoogleSignIn}><FcGoogle /><span className="px-2">Sign In with Google</span></Button>
                <Link href="/signup" className="hover:underline">Don&apos;t have an account? Sign Up</Link>
                <Link href="/"><b>Go back to home page</b></Link>
            </VStack>
        </Box>
    )
}

export default SignIn;