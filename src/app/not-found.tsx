// app/not-found.tsx
import { Box, Text, Button, Image, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      textAlign={{ base: 'center', md: 'left' }}
      bgGradient="linear(to-br, purple.100, purple.50)"
      p={6}
    >
      {/* Image placeholder */}
      <Image
        src="/Images/404.png"
        alt="Not Found"
        boxSize={{ base: '200px', md: '50%' }}
        objectFit="contain"
        mb={{ base: 4, md: 0 }}
        display={{ base: 'none', md: 'block' }}
        flexShrink={0}
        maxW="50%"
      />
      <Stack
        spacing={4}
        alignItems="center"
        textAlign={{ base: 'center', md: 'left' }}
        maxW={{ base: '100%', md: '50%' }}
        pl={{ base: 0, md: 6 }}
      >
        <Text fontSize="6xl" fontWeight="bold" color="blue.600">
          404
        </Text>
        <Text fontSize="2xl" color="blue.600">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </Text>
        <Stack spacing={4} direction={{ base: 'column', md: 'row' }}>
          <Link href="/">
            <Button colorScheme="blue" size="lg">
              Go Back to Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" colorScheme="blue" size="lg">
              Contact Us
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default NotFoundPage;



