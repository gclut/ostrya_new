export function Footer() {
  return (
    <footer className="bg-background border-t border-divider py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <a href="#" className="font-serif text-xl font-semibold tracking-wide text-foreground">
            Finança<span className="text-primary">Sul</span>
          </a>
          <p className="font-sans text-xs text-muted-foreground mt-2">
            Consultoria financeira para empresas e produtores rurais do Sul do Brasil.
          </p>
        </div>
        <div className="flex flex-col items-start md:items-end gap-1">
          <p className="font-sans text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} FinançaSul. Todos os direitos reservados.
          </p>
          <p className="font-sans text-xs text-muted-foreground/50">
            Sul do Brasil — Atendimento nacional
          </p>
        </div>
      </div>
    </footer>
  )
}
