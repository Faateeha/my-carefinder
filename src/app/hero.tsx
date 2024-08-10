"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import Aos from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="relative w-full h-[400px]" data-aos="zoom-out">
      <Image
        src="/Images/carefinder6.webp"
        alt="carefinder"
        fill
        style={{ objectFit: 'cover' }} // Use style prop instead of objectFit
      />
    </div>
  );
}


