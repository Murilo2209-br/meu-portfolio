"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const links = [
    { href: "/", label: "Início" },
    { href: "/curriculo", label: "Currículo" },
    { href: "/projetos", label: "Projetos" },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/70 border-b border-zinc-800"
    >
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold text-lg tracking-tight">
          [Murilo Souza.]
        </Link>
        <div className="flex gap-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-zinc-400 hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}