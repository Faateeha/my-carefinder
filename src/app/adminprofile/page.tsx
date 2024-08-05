"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/app/firebase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Box, Text, Spinner, Center, Container } from "@chakra-ui/react";
import { doc, getDoc } from "firebase/firestore";
import MarkDownEditor from "@/app/markdown";

const AdminDashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      if (!loading && user) {
        const userDoc = doc(db, "users", user.uid);
        const docSnap = await getDoc(userDoc);
        if (docSnap.exists() && docSnap.data()?.role === "admin") {
          setIsAdmin(true);
        } else {
          router.push("/");
        }
      } else if (!loading && !user) {
        router.push("/admin");
      }
    };
    checkAdmin();
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

  if (!isAdmin) {
    return null;
  }

  return (
    <Container maxW="container.lg" p={6}>
      <Box
        bg="white"
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="lg"
        p={6}
        my={10}
      >
        <Text fontSize="4xl" fontWeight="bold" mb={4} color="blue.500">
          Admin Dashboard
        </Text>
        <Text fontSize="xl" mb={6}>
          Welcome, Admin!
        </Text>
        <MarkDownEditor />
      </Box>
    </Container>
  );
};

export default AdminDashboard;


