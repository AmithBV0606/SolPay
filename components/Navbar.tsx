"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Link from "next/link";
import Image from "next/image";
import BannerNote from "./BannerNote";

const Navbar = () => {
  return (
    <nav className="">
      {/* Navbar */}
      <div className="flex justify-between items-center px-1 sm:px-4 bg-[#1A1C23] h-16 sm:h-24">
        <Link href="/">
          <div className="relative">
            <Image
              src="/solana_logo.png"
              width={60}
              height={60}
              className="transition-transform duration-200 transform hover:scale-100 hover:cursor-pointer"
              alt="Solana Logo"
            />
          </div>
        </Link>

        <WalletMultiButton />
      </div>

      {/* Banner Note : */}
      <BannerNote />
    </nav>
  );
};

export default Navbar;