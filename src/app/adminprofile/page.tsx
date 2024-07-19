"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "@/app/firebase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Box, Text, Spinner, Center } from "@chakra-ui/react";

const AdminDashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (!loading && user) {
      firestore.collection('users').doc(user.uid).get().then(doc => {
        if (doc.exists && doc.data()?.role === "admin") {
          setIsAdmin(true);
        } else {
          router.push("/");
        }
      });
    } else if (!loading && !user) {
      router.push("/admin-login");
    }
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
    <Box className="container my-10 mx-auto px-4 py-20 text-purple-400">
      <Text fontSize="3xl" fontWeight="bold">
        Admin Dashboard
      </Text>
      {/* Add your admin dashboard components here */}
      <Text>Hello Admin</Text>
    </Box>
  );
};

export default AdminDashboard;
