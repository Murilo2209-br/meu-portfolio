"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1"
      >
        <p className="text-emerald-400 font-medium mb-2">Olá, eu sou</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Murilo Souza</h1>
        <p className="text-zinc-400 text-lg mb-8">
          [Infraestrutura não é apenas sobre conectar dispositivos.
É sobre construir uma base segura, escalável e automatizada que impulsione o desempenho e entregue valor real.]
        </p>
        <div className="flex gap-4">
          <Link href="/projetos" className="px-5 py-3 bg-emerald-500 text-zinc-950 font-medium rounded-lg hover:bg-emerald-400 transition-colors">
            Ver projetos
          </Link>
          <Link href="/curriculo" className="px-5 py-3 border border-zinc-700 rounded-lg hover:border-zinc-500 transition-colors">
            Ver currículo
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative w-56 h-56 md:w-72 md:h-72 shrink-0"
      >
        <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-2xl" />
        <Image src="/foto-perfil.jpeg" alt="Foto de perfil" fill className="rounded-full object-cover border-4 border-zinc-800 relative" />
      </motion.div>
    </section>
  );
}