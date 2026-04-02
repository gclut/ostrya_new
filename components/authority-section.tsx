export function AuthoritySection() {
  const credentials = [
    "Atuação em empresas do agronegócio, indústria e varejo",
    "Processos de reestruturação financeira com dívidas acima de R$ 5M",
    "Diagnósticos conduzidos em mais de 200 operações",
    "Especialização em crédito rural e financiamentos agrícolas",
    "Atendimento presencial no Sul do Brasil e remoto em todo o país",
    "Profissionais com formação em finanças, contabilidade e economia",
  ]

  return (
    <section className="bg-surface-1 py-28 border-t border-divider">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left */}
          <div className="lg:flex-1">
            <p className="text-xs font-sans uppercase tracking-[0.3em] text-primary mb-6 opacity-80">
              Por que nós
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground text-balance leading-[1.1] mb-8">
              Especialistas em financeiro de quem produz e constrói.
            </h2>
            <p className="font-sans text-muted-foreground text-lg leading-relaxed mb-6">
              Não somos consultores generalistas. Trabalhamos com a complexidade real de empresas em crescimento e produtores rurais do Sul do Brasil — contextos onde o crédito é estratégico e o erro financeiro tem consequência concreta.
            </p>
            <p className="font-sans text-muted-foreground text-lg leading-relaxed">
              Cada caso é tratado com profundidade técnica e sem atalhos. O objetivo não é parecer que estamos ajudando — é gerar resultado mensurável.
            </p>
          </div>

          {/* Right — credential list */}
          <div className="lg:flex-1">
            <ul className="space-y-0 border-t border-divider">
              {credentials.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-5 py-5 border-b border-divider group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5 group-hover:scale-150 transition-transform duration-200" />
                  <span className="font-sans text-foreground/80 text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
