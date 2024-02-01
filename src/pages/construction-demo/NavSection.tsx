import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import SuccessCard from "./successCard";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoMenu } from "react-icons/io5";

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="link">
          <IoMenu className="bg-none text-3xl text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col space-y-4 pt-4">
          <Link href="/" className="hover:text-[#ffc107] text-[#ffc107]">
            Home
          </Link>
          <Link href="/" className="hover:text-[#ffc107]">
            Services
          </Link>
          <Link href="/" className="hover:text-[#ffc107]">
            About Us
          </Link>
          <Link href="/" className="hover:text-[#ffc107]">
            Contact Us
          </Link>
        </div>
        <SheetFooter>
          <button className="font-poppins mt-10 bg-[#ffc107] w-fit  px-5 py-2 text-sm font-semibold text-gray-900 hover:scale-105">
            GET A QUOTE
          </button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

function NavSection() {
  return (
    <div className="relative w-full">
      <div className="h-[750px]">
        <Image
          src="/construction_img.jpg"
          alt="img"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-70" />
      <div className="absolute top-2 left-0 w-full">
        <div className="flex items-center justify-between md:px-32 px-3">
          <div className="flex items-center">
            <div className="w-20">
              <img src="/logo.png" alt="logo" />
            </div>
            <h1 className="font-poppins font-bold text-white">
              ULTRA
              <br />
              NEON
            </h1>
          </div>
          <MobileMenu />
          <h1 className="font-poppins text-sm text-yellow-400 md:block hidden">
            Make a call +91 9739849106
          </h1>
          <div className="md:flex hidden space-x-6 text-lg text-yellow-400 ">
            <FaFacebook className="hover:scale-125" />
            <FaInstagram className="hover:scale-125" />
            <FaTwitter className="hover:scale-125" />
            <FaLinkedin className="hover:scale-125" />
          </div>
        </div>
        <div className="border-t border-gray-400 pt-8" />
        <div className="md:flex md:flex-row  hidden justify-between md:px-32 px-5 ">
          <div className="flex space-x-8 text-white">
            <Link href="/" className="hover:text-[#ffc107] text-[#ffc107]">
              Home
            </Link>
            <Link href="/" className="hover:text-[#ffc107]">
              Services
            </Link>
            <Link href="/" className="hover:text-[#ffc107]">
              About Us
            </Link>
            <Link href="/" className="hover:text-[#ffc107]">
              Contact Us
            </Link>
          </div>
          <button className="font-poppins bg-[#ffc107] w-fit  px-5 py-2 text-sm font-semibold text-gray-900 hover:scale-105">
            GET A QUOTE
          </button>
        </div>
        <h1 className="font-poppins md:px-32 px-6  md:pt-28  md:text-2xl text-lg font-bold text-yellow-400">
          Build Your Dream
        </h1>
        <h1 className="font-poppins md:px-32 px-6  py-5  md:text-7xl text-4xl font-bold text-white">
          Vision Got Larger
        </h1>
        <p className="md:px-32 px-6  md:text-sm text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          necessitatibus <br /> nam culpa recusandae aspernatur tenetur
          deserunt? Cupiditate perspiciatis possimus <br /> labore aspernatur
          molestiae, fuga vitae, delectus ad, doloribus autem eos ipsam.
        </p>
        <div className="flex space-x-10 md:px-32 px-6  pt-10">
          <button className="font-poppins bg-[#ffc107] px-5 py-2 md:text-sm font-semibold text-gray-900 hover:scale-105">
            Our Services
          </button>
          <button className="font-poppins px-5 py-2 md:text-sm font-semibold text-white ring-1 ring-white hover:scale-105 hover:bg-gray-300 hover:text-black">
            Contact Us
          </button>
        </div>
        <SuccessCard />
      </div>
    </div>
  );
}

export default NavSection;
