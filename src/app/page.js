"use client";
import Image from 'next/image';
import Navbar from './components/Navbar';
import shape1 from "../app/assets/shape1.svg";
import shape2 from "../app/assets/shape2.svg";
import shape3 from "../app/assets/shape3.svg";
import Hero from './components/Hero';


export default function Home() {
  return (
    <>
      <Navbar />
      <div className='w-full static -z-50 overflow-hidden'>
        <Image className="absolute -left-48 top-4 shape1" src={shape1} alt="Ayurtech" />

        <Image className="absolute -right-36 top-3 shape3" src={shape3} alt="Ayurtech" />

        <Image className="absolute -right-20 -bottom-20 shape2" src={shape2} alt="Ayurtech" />
      </div>
      <Hero />
    </>
  )
}
