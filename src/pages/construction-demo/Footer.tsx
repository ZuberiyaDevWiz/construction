import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1a2a3a] md:py-10 text-white">
      <div className=" mx-auto md:flex md:flex-row flex flex-col md:max-w-7xl px-6 justify-between">
        <div className="md:flex md:flex-col flex space-x-2 md:space-x-0 py-4 md:py-0 items-center">
          <img src="/logo.png" alt="" width={70} height={20} />

          <div className="flex space-x-5 pt-2 text-xl text-[#ffc107]">
            <FaFacebook className="hover:scale-110" />
            <FaInstagram className="hover:scale-110" />
            <FaTwitter className="hover:scale-110" />
            <FaLinkedin className="hover:scale-110" />
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-semibold text-[#ffc107]">
              Quick Links
            </h3>
            <Link
              className="text-gray-300 hover:scale-105 hover:text-[#ffc107]"
              href="#"
            >
              Home
            </Link>
            <Link
              className="text-gray-300 hover:scale-105 hover:text-[#ffc107]"
              href="#"
            >
              Projects
            </Link>
            <Link
              className="text-gray-300 hover:scale-105 hover:text-[#ffc107]"
              href="#"
            >
              Services
            </Link>
            <Link
              className="text-gray-300 hover:scale-105 hover:text-[#ffc107]"
              href="#"
            >
              About
            </Link>
            <Link
              className="text-gray-300 hover:scale-105 hover:text-[#ffc107]"
              href="#"
            >
              Contact
            </Link>
          </div>
          <div className="flex flex-col space-y-2 ">
            <h3 className="text-lg font-semibold text-[#ffc107]">Contact Us</h3>
            <p className="text-gray-300">123, Main street, Anytown ST 12345.</p>
            <p className="text-gray-300">+123-456-7890</p>
          </div>
        </div>
        <div className="flex md:w-64 flex-col space-y-4 py-8 md:pt-0">
          <h3 className="font-poppins text-lg font-semibold text-[#ffc107]">
            Get A Quote
          </h3>
          <input
            className="bg-transparent  p-2 md:text-sm ring-1 ring-white"
            placeholder="Name"
            type="text"
          />
          <textarea
            className="bg-transparent  p-2 md:text-sm ring-1 ring-white"
            placeholder="Message"
          />
          <button className="font-poppins bg-[#ffc107] px-4 py-2 md:text-sm  font-semibold text-black hover:bg-yellow-600">
            Submit
          </button>
        </div>
      </div>
    </footer>
  );
}
