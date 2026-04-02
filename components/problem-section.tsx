export function ProblemSection() {
  const problems = [
    {
      number: "01",
      title: "Você fatura, mas o caixa está sempre apertado",
      description:
        "O dinheiro entra, mas não sobra. A margem existe no papel, mas some antes do fim do mês. Sem saber exatamente onde vai, fica impossível planejar.",
    },
    {
      number: "02",
      title: "A dívida cresceu mais rápido que o negócio",
      description:
        "Crédito tomado na urgência, juros que compõem, prazo que venceu. Hoje a prestação come o lucro operacional e a saída não parece clara.",
    },
    {
      number: "03",
      title: "Você toma decisões sem base nos números",
      description:
        "Comprar, investir, contratar — tudo na intuição. O financeiro não entrega informação confiável na hora que você precisa decidir.",
    },
    {
      number: "04",
      title: "Crescimento que gerou desorganização",
      description:
        "O negócio evoluiu, mas o controle financeiro ficou para trás. Hoje há mais gente, mais custo, mais complexidade — e menos clareza.",
    },
  ]

  return (
    <section id="problema" className="bg-background py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <p className="text-xs font-sans uppercase tracking-[0.3em] text-primary mb-6 opacity-80">
          O Problema
        </p>

        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance max-w-3xl mb-4">
          O problema não é faturamento.{" "}
          <span className="text-primary">É estrutura.</span>
        </h2>
        <p className="font-sans text-muted-foreground text-lg leading-relaxed max-w-xl mb-16">
          Reconheça sua situação. Esses cenários são mais comuns do que parecem — e todos têm solução.
        </p>

        <div className="grid md:grid-cols-2 gap-px bg-divider border border-divider">
          {problems.map((p) => (
            <div
              key={p.number}
              className="group bg-surface-1 p-8 lg:p-10 transition-colors duration-300 hover:bg-surface-2"
            >
              <span className="font-serif text-5xl font-light text-primary/25 group-hover:text-primary/50 transition-colors duration-300 select-none">
                {p.number}
              </span>
              <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mt-4 mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mid-page CTA */}
        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6 border-t border-divider pt-12">
          <p className="font-serif text-2xl md:text-3xl font-light text-foreground max-w-lg text-balance">
            Se você se identificou com algum desses cenários — podemos conversar.
          </p>
          <a
            href="#contato"
            className="shrink-0 inline-flex items-center bg-primary text-primary-foreground font-sans text-sm font-medium px-7 py-3.5 tracking-wide uppercase transition-all duration-300 hover:opacity-85 active:scale-95"
          >
            Conversa gratuita de 30 min
          </a>
        </div>
      </div>
    </section>
  )
}
