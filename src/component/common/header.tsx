"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.jpg";

export function Header() {
  const pathName = usePathname();
  return (
    <section className="py-4 relative flex flex-col items-center">
      <div className="flex flex-col items-center mb-4">
        <Image src={logo} alt="logo" width={200} height={200} />
        <p className="text-sm sm:text-base">Let's make it magic</p>
      </div>
      <div className="container-space text-[#444444] sm:text-lg lg:text-xl flex gap-8 font-bold items-center justify-center">
        <Link
          href="/"
          className="hover:underline"
          {...(pathName === "/"
            ? { style: { textDecoration: "underline" } }
            : {})}
        >
          Home
        </Link>
        <Link
          href="/about-me"
          className="hover:underline"
          {...(pathName === "/about-me"
            ? { style: { textDecoration: "underline" } }
            : {})}
        >
          About Me
        </Link>
        <Link
          href="/general-information"
          className="hover:underline"
          {...(pathName === "/general-information"
            ? { style: { textDecoration: "underline" } }
            : {})}
        >
          General Information
        </Link>
        <Link
          href="/contact"
          className="hover:underline"
          {...(pathName === "/contact"
            ? { style: { textDecoration: "underline" } }
            : {})}
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
