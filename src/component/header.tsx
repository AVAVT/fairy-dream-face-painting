"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathName = usePathname();
  return (
    <section className="bg-[#9C3C74] py-4 shadow-[0_0px_5px_rgba(0,0,0,0.2)] z-1 relative">
      <div className="container-space justify-center text-xl flex gap-8 text-white font-bold">
        <Link
          href="/"
          className="hover:underline"
          {...(pathName === "/"
            ? { style: { textDecoration: "underline" } }
            : {})}
        >
          About Us
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
