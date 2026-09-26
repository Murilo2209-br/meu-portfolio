export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8 mt-16">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} [Murilo Souza]. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <a href="https://github.com/Murilo2209-br" target="_blank" className="hover:text-white">GitHub</a>
          <a href="https://www.linkedin.com/in/murilo-barros-de-souza/" target="_blank" className="hover:text-white">LinkedIn</a>
          <a href="mailto:[murilobarros2008@gmail.com]" className="hover:text-white">E-mail</a>
        </div>
      </div>
    </footer>
  );
}