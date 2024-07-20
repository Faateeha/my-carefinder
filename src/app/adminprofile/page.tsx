"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/app/firebase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Box, Text, Spinner, Center } from "@chakra-ui/react";
import { doc, getDoc } from "firebase/firestore";

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
    <Box className="container my-10 mx-auto px-4 py-20 text-purple-400">
      <Text fontSize="3xl" fontWeight="bold">
        Admin Dashboard
      </Text>
      <Text>Hello Admin</Text>
    </Box>
  );
};

export default AdminDashboard;

