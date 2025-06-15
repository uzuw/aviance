"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/airplanes", label: "Airplanes" },
  { href: "/suppliers", label: "Suppliers" },
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-3xl font-extrabold text-white tracking-wide">
          Aviance
        </Link>
        <div className="space-x-6 hidden md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-white transition-all duration-200 hover:underline underline-offset-4 ${
                pathname === link.href ? "font-bold scale-105" : "opacity-80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Optional mobile icon */}
        <div className="md:hidden text-white">
          <Menu />
        </div>
      </div>
    </nav>
  );
}
