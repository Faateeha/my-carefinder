import Image from "next/image";
import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { MdOutlineMailOutline } from "react-icons/md";
import { Box, Text, Flex, Link, Stack, Divider } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Box as="footer"  className="pt-5 bg-gray-300">
      <Flex
        className="container mx-auto"
        direction={{ base: 'column', md: 'row', lg: 'row' }}
        justify="space-between"
        align="flex-start"
        px={4}
        wrap="wrap"
      >
        <Stack spacing={4} flex="1" mb={{ base: 6, lg: 0 }} mr={{ lg: 10 }}>
          <Image
            src="/Images/care-org.png"
            alt="Carefinder logo"
            width={100}
            height={75}
          />
          <Text>Call: 8108900332</Text>
          <Text>Mail: info.@carefinder.com.org</Text>
          <Text>Follow us on Social Media</Text>
          <Flex justify="space-between" width={{ base: 'full', md: '75%' }} my={6}>
            <Link href="https://x.com/Adeyemi_fathia_" isExternal>
              <FaTwitter size="24" className="hover:text-gray-600" />
            </Link>
            <Link href="https://linkedin.com/in/adeyemi-fathia-a73908270" isExternal>
              <FiLinkedin size="24" className="hover:text-gray-600"/>
            </Link>
            <Link href="https://github.com/Faateeha" isExternal>
              <SiGithub size="24" className="hover:text-gray-600"/>
            </Link>
            <Link href="mailto:fathiaomolara02@gmail.com" isExternal>
              <MdOutlineMailOutline size="24" className="hover:text-gray-600"/>
            </Link>
          </Flex>
        </Stack>

        <Flex justify="space-between" flex="2" direction={{ base: 'column', md: 'row', lg: 'row' }} gap={6} flexWrap="wrap">
          <Stack spacing={2} className="font-medium" flex="1" minW={{ base: "full", md: "auto" }}>
            <Text fontWeight="bold">Information</Text>
            <Link href="#" className="hover:text-gray-800">Careers</Link>
            <Link href="#" className="hover:text-gray-800">Our Mission</Link>
            <Link href="#" className="hover:text-gray-800">Our Vision</Link>
            <Link href="#" className="hover:text-gray-800">Terms and Conditions</Link>
            <Link href="#" className="hover:text-gray-800">Help</Link>
            <Link href="#" className="hover:text-gray-800">Sign up as an Admin</Link>
          </Stack>
          <Stack spacing={2} className="font-medium" mt={{ base: 6, md: 0 }} ml={{ base: 0, lg: 10 }} flex="1" minW={{ base: "full", md: "auto" }}>
            <Text fontWeight="bold">Quick Links</Text>
            <Link href="/about" className="hover:text-gray-800">About</Link>
            <Link href="#" className="hover:text-gray-800">Contact Us</Link>
            <Link href="#" className="hover:text-gray-800">Book an Appointment</Link>
            <Link href="#" className="hover:text-gray-800">Frequently Asked Questions</Link>
          </Stack>
          <Stack spacing={2} className="font-medium" mt={{ base: 6, md: 0 }} ml={{ base: 0, lg: 10 }} flex="1" minW={{ base: "full", md: "auto" }}>
            <Text fontWeight="bold">Company</Text>
            <Link href="/about" className="hover:text-gray-800">About Us</Link>
            <Link href="/getstarted" className="hover:text-gray-800">Get Started</Link>
            <Link href="/contact" className="hover:text-gray-800">Contact Us</Link>
            <Link href="/testimonial" className="hover:text-gray-800">Testimonials</Link>
          </Stack>
        </Flex>
      </Flex>
      <Divider my={6} />
      <Box bg="blue.600" py={2}>
        <Text textAlign="center" color="white">&copy; All rights reserved. Carefinder 2024</Text>
      </Box>
    </Box>
  );
};

export default Footer;
