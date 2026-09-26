"use client";
import { motion } from "framer-motion";

const experiencias = [
  {
    cargo: "[ANALISTA DE REDES]",
    empresa: "[IWNET TELECOM / TJ TELECOM / ATHON Telecom]",
    periodo: "[02/2018 — 17/06/2026]",
    descricao: "[Atuei como Analista de Redes Sênior e Consultor de Infraestrutura no setor de provedores de internet, planejando e mantendo ambientes de telecomunicações escaláveis e de alta disponibilidade. Trabalhei com redes LAN/WAN, roteamento, servidores, segurança e documentação técnica, além de prestar consultoria a clientes para desenhar soluções alinhadas às suas necessidades.]", 
  },
];

const formacao = [
  { curso: "[Tecnólogo em Redes de Computadores]", instituicao: "[Senac São Paulo]", periodo: "[ Em andamento ]" },
];

const habilidades = ["[Oracle Cloud Infrastructure 2025 Certified Foundations Associate]", "[HCPA – Huawei PON Certified Associate]", "[Redes e Protocolos: LAN/WAN]", "[Gestão: NETBOX]", "[Linux Server, Windows Server]", "[CNH: Categoria B]" ];
const idiomas = ["[Inglês: Intermediário – Nível B2]", "[Português: Nativo ]"];

function Section({ title, children, delay = 0 }: { title: string; children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="mb-10"
    >
      <h2 className="text-xl font-semibold mb-4 text-emerald-400">{title}</h2>
      {children}
    </motion.div>
  );
}

export default function CurriculoPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">Currículo</h1>
      <p className="text-zinc-400 mb-10">[Analista de Redes Sênior e Consultor de Infraestrutura de Telecomunicações, com 8 anos de experiência no setor de provedores de internet. Especialista em redes LAN/WAN, roteamento, alta disponibilidade, otimização de tráfego e segurança, com atuação também em consultoria e desenho de soluções personalizadas.]</p>

      <Section title="Experiência">
        {experiencias.map((exp, i) => (
          <div key={i} className="mb-6 border-l-2 border-zinc-800 pl-4">
            <h3 className="font-medium">{exp.cargo} — {exp.empresa}</h3>
            <p className="text-sm text-zinc-500 mb-1">{exp.periodo}</p>
            <p className="text-zinc-400 text-sm">{exp.descricao}</p>
          </div>
        ))}
      </Section>

      <Section title="Formação" delay={0.1}>
        {formacao.map((f, i) => (
          <div key={i} className="mb-4 border-l-2 border-zinc-800 pl-4">
            <h3 className="font-medium">{f.curso}</h3>
            <p className="text-sm text-zinc-500">{f.instituicao} · {f.periodo}</p>
          </div>
        ))}
      </Section>

      <Section title="Habilidades" delay={0.2}>
        <div className="flex flex-wrap gap-2">
          {habilidades.map((h) => (
            <span key={h} className="text-sm px-3 py-1 rounded-full bg-zinc-800 text-zinc-300">{h}</span>
          ))}
        </div>
      </Section>

      <Section title="Idiomas" delay={0.3}>
        <ul className="text-zinc-400 text-sm space-y-1">
          {idiomas.map((idioma) => <li key={idioma}>{idioma}</li>)}
        </ul>
      </Section>
    </section>
  );
}