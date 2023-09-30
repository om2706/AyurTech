"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ayurTechLogo from "../assets/ayurTechLogo.png";


export default function Navbar() {
  return (
    <>
      <nav className="w-full h-16 fixed z-10 flex justify-between border-b-2 border-neutral-300 bg-white">
        <Link href="/">
            <Image className="w-auto h-full mx-16" src={ayurTechLogo} alt="Ayurtech" />
        </Link>
        <ul className="flex justify-evenly items-center gap-x-16 mr-20">
            <li>
                <Link href="/" className="text-xl">Home</Link>
            </li>
            <li>
                <Link href="/components/about" className="text-xl">About</Link>
            </li>
            <li>
                <Link href="/components/contributer" className="text-xl">Contribute</Link>
            </li>
        </ul>
      </nav>
    </>
  );
}
