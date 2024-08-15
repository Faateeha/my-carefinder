import Image from 'next/image';
import React from 'react';
import { Box, Flex, Heading, Text, Input, Textarea, Button } from "@chakra-ui/react";

function Contact() {
  return (
    <section className="pt-16 bg-gray-100" id="contact">
      <Box className="flex flex-col md:flex-row items-center container mx-auto px-4 md:px-0">
        <Box className="w-full md:w-1/2" data-aos="fade-right">
          <Image
            src="/Images/carefinder-contact.jpg"
            alt="Carefinder"
            width={500}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </Box>
        <Box className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8" data-aos="fade-left">
          <Heading as="h1" size="xl" className="text-3xl md:text-4xl font-bold mb-4">Get in touch</Heading>
          <Text className="mb-6 text-sm md:text-base">Our team would love to hear from you</Text>
          <form method="POST" action="" className="space-y-5 py-6">
            <Input 
              type="text" 
              name="name" 
              placeholder="Name" 
              className="form-input" 
              size="md" 
              focusBorderColor="blue.500" 
            />
            <Input 
              type="email" 
              name="email" 
              placeholder="Email" 
              className="form-input" 
              size="md" 
              focusBorderColor="blue.500" 
            />
            <Textarea 
              name="message" 
              cols={30} 
              rows={10} 
              placeholder="Message" 
              className="form-input" 
              size="md" 
              focusBorderColor="blue.500" 
            />
            <Flex justify="center" pt={2}>
              <Button 
                type="submit" 
                colorScheme="blue" 
                size="md"
                className="w-36 md:w-48"
              >
                Send
              </Button>
            </Flex>
          </form>
        </Box>
      </Box>
    </section>
  );
}

export default Contact;