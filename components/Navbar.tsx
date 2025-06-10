"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="p-4 bg-[#1A1C23]">
      <div className="flex justify-between items-center px-10">
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
    </nav>
  );
};

export default Navbar;