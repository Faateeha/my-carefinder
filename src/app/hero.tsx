"use client";
import Image from 'next/image';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="relative w-full h-[600px]" data-aos="zoom-out">
      <Image
        src="/Images/carefinder6.webp"
        alt="carefinder"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}

