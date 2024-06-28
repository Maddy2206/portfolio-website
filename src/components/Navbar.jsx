"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import motion from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/About", title: "About" },
  { url: "/projects", title: "Projects" },
  { url: "/Contact", title: "Contact" },
];




function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-16 flex items-center justify-between bg-white shadow-md px-4 sm:px-8 md:px-12 ">
      <div className="flex items-center gap-4">
        <Link href="/">
          <Image
            src="https://cdn-icons-png.flaticon.com/128/3476/3476457.png"
            alt="logo"
            height={30}
            width={30}
          />
        </Link>
        <div className="hidden md:flex items-center gap-4">
          {links.map((link) => (
            <Link key={link.url} href={link.url} className="hover:underline">
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="md:hidden flex items-center">
        <Button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu />
        </Button>
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center z-50">
            {links.map((link) => (
              <Link key={link.url} href={link.url} className="py-2 hover:underline">
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="flex gap-6 justify-end">
        <Link href="https://www.linkedin.com/in/medhansh-rawat-094126251/details/featured/">
          <Image src="/linkedin.png" height={25} width={25} alt="LinkedIn" />
        </Link>

        <Link href="https://github.com/Maddy2206">
          <Image src="/github.png" height={25} width={25} alt="GitHub" />
        </Link>

        <Link href="https://leetcode.com/u/Maddy_22/">
          <Image src="/leetcode.png" height={25} width={25} alt="GitHub" />
        </Link>

        <Link href="https://www.codechef.com/users/medhanshrawat2">
          <Image src="/codechef.png" height={15} width={20} alt="GitHub" />
        </Link>

        <Link href="https://codeforces.com/profile/maddy_22">
          <Image src="/codeforces.png" height={25} width={25} alt="GitHub" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
