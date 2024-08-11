"use client";
import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import hospitalData from '@/data/data.json';
import { Box, Text, VStack } from '@chakra-ui/react';
import Aos from "aos";
import "aos/dist/aos.css";
import Link from 'next/link';

const HospitalDetail = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000
    })
  }, []);
  const pathname = usePathname();
  const name = pathname.split('/').pop();

  const hospital = hospitalData.find((h) =>
    encodeURIComponent(h["Hospital name"].toLowerCase().replace(/\s+/g, '-')) === name
  );
  

  if (!hospital) return <Text className="text-center mt-10">Loading...</Text>;

  const email = `${hospital["Hospital name"]
    .toLowerCase()
    .replace(/\s+/g, '')}@gmail.com`;

  return (
    <VStack data-aos="flip-right" className="min-h-screen justify-center">
      <Box className="max-w-2xl mx-auto p-6 bg-blue-400 rounded-lg shadow-lg">
        <Text fontSize="3xl" fontWeight="bold" className="text-white mb-4">
          {hospital["Hospital name"]}
        </Text>
        <hr className="my-4" />
        <Box className="space-y-3 text-gray-700">
          <Text fontSize="lg">Address: {hospital.address}</Text>
          <Text fontSize="lg">Contact: {hospital.contact}</Text>
          <Text fontSize="lg">Email: {email}</Text>
        </Box>
        <Link href="/getstarted">
            <Text color="white" _hover={{ textDecoration: "underline" }} mt={2} className="text-center">
              <b>Go back </b>
            </Text>
          </Link>
      </Box>
    </VStack>
  );
};

export default HospitalDetail;

