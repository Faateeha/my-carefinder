"use client";

import Image from "next/image";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Testimonial from "@/app/testimonial";
import Newsletter from "@/app/newsletter";
import Hero from "@/app/hero";
import {Text, Button } from "@chakra-ui/react";




export default function Home() {
  useEffect(() => {
    Aos.init({
        duration: 1000
    })
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Hero />
      <h1 className="" data-aos="zoom-in">Home page</h1>
      <Testimonial />
      <Newsletter />
      
    </main>
    
  );
}