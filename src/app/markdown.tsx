"use client";

import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import dynamic from "next/dynamic";
import { Box, Button, VStack, Input, FormControl, FormLabel } from "@chakra-ui/react";
import { db } from "@/app/firebase";

// Dynamically import the markdown editor to avoid SSR issues
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

const AdminMarkdownEditor: React.FC = () => {
  const [content, setContent] = useState<string>("");
  const [hospitalName, setHospitalName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [contact, setContact] = useState<string>("");

  const handleSave = async () => {
    try {
      const hospitalsCollection = collection(db, "hospitals");
      await addDoc(hospitalsCollection, {
        name: hospitalName,
        address,
        contact,
        content,
        createdAt: new Date(),
      });
      alert("Content saved successfully!");
    } catch (error) {
      console.error("Error saving content: ", error);
    }
  };

  return (
    <VStack spacing={6} align="start" w="full" p={4}>
      <FormControl id="hospitalName" mb={4}>
        <FormLabel>Hospital Name</FormLabel>
        <Input
          placeholder="Hospital Name"
          size="lg"
          value={hospitalName}
          onChange={(e) => setHospitalName(e.target.value)}
        />
      </FormControl>
      <FormControl id="address" mb={4}>
        <FormLabel>Address</FormLabel>
        <Input
          placeholder="Hospital Address"
          size="lg"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </FormControl>
      <FormControl id="contact" mb={4}>
        <FormLabel>Contact</FormLabel>
        <Input
          placeholder="Hospital Contact"
          size="lg"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </FormControl>
      <Box
        borderWidth="1px"
        borderRadius="md"
        overflow="hidden"
        p={4}
        bg="white"
        boxShadow="md"
        w="full"
      >
        <MDEditor
          value={content}
          onChange={setContent}
          height={400}
        />
      </Box>
      <Button colorScheme="blue" onClick={handleSave}>
        Save Content
      </Button>
    </VStack>
  );
};

export default AdminMarkdownEditor;


