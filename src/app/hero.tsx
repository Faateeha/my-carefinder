import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative w-full h-[600px]">
      <Image
        src="/Images/carefinder6.webp"
        alt="carefinder"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}

