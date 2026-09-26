import Link from "next/link";

export default function NotFound() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-32 text-center">
      <h1 className="text-6xl font-bold text-emerald-400 mb-4">404</h1>
      <p className="text-zinc-400 mb-8">Essa página não existe.</p>
      <Link href="/" className="px-5 py-3 bg-emerald-500 text-zinc-950 font-medium rounded-lg hover:bg-emerald-400 transition-colors">
        Voltar para o início
      </Link>
    </section>
  );
}