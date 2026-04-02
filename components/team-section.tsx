'use client'

export function TeamSection() {
  const team = [
    {
      id: 'jorge',
      name: 'Jorge Ferreira',
      title: 'Economista & Consultor Financeiro',
      roles: ['Economista', 'Consultor Financeiro'],
      credential: 'CFA Charterholder',
      initials: 'JF',
      bio: 'Economista, mestre em Finanças Corporativas (Unisinos) e CFA charterholder. Possui experiência de 15 anos no mercado financeiro e de capitais. Sócio fundador da Ostrya Investimentos e Ostrya Capital. Professor de finanças, economia e gestão em cursos de Graduação, MBA e Mestrado na Unisinos.',
      fullBio: [
        'Trabalhou com reestruturação de crédito corporativo entre 2016 e 2020 e foi Superintendente Executivo dos Comitês de Crédito do Banrisul entre 2020 e 2023.',
        'Participou da análise, concessão e reestruturação de crédito para as maiores empresas do sul do país.',
        'Avaliação de Empresas (Insper), Reestruturação de Empresas (Insper) e Fusões e Aquisições (Insper).',
        'Consultor de Títulos e Valores Mobiliários e Gestor de Carteiras (CVM). Analista de títulos e valores mobiliários (APIMEC).'
      ]
    },
    {
      id: 'geile',
      name: 'Geile Paim',
      title: 'Advogada Especialista em Crédito',
      roles: ['Advogada', 'Especialista em Crédito'],
      credential: 'Especialista em Direito Empresarial',
      initials: 'GP',
      bio: 'Advogada com especialização em direito empresarial e reestruturação de crédito. Atua há mais de 12 anos com negociação e recuperação de crédito para instituições financeiras e empresas.',
      fullBio: [
        'Especialista em recuperação judicial e extrajudicial de crédito com atuação junto a grandes instituições financeiras.',
        'Experiência sólida em renegociação de contratos, gestão de risco e cobrança especializada.',
        'Certificações em Crédito e Risco (FGV), Gestão Financeira (Insper), Falência e Recuperação de Empresas (FGV).',
        'Qualificações especializadas: Crédito para Agronegócio, Crédito Imobiliário, Produtos de Investimento e Financiamento de Veículos.'
      ]
    },
  ]

  return (
    <section id="team" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <h2 className="font-serif text-5xl font-light mb-4 text-foreground">
            Nossa Equipe
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Especialistas com décadas de experiência em reestruturação financeira e recuperação de crédito
          </p>
        </div>

        {/* Team Members */}
        <div className="space-y-12">
          {team.map((member) => (
            <div
              key={member.id}
              className="border border-divider rounded-xl overflow-hidden bg-card hover:border-gold/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row gap-8 p-8 md:p-10">
                {/* Photo Circle */}
                <div className="flex-shrink-0 flex items-center justify-center">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 border border-gold/40 flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-serif text-6xl md:text-7xl font-light text-gold">
                        {member.initials}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Name */}
                  <h3 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-2">
                    {member.name}
                  </h3>

                  {/* Title */}
                  <p className="text-lg text-foreground/90 mb-4">
                    {member.title}
                  </p>

                  {/* Roles & Credential */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.roles.map((role, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-surface-2 border border-divider rounded text-xs font-medium text-foreground/70"
                      >
                        {role}
                      </span>
                    ))}
                    <span className="px-3 py-1 bg-gold/10 border border-gold/30 rounded text-xs font-medium text-gold">
                      {member.credential}
                    </span>
                  </div>

                  {/* Main Bio */}
                  <p className="text-foreground/80 leading-relaxed mb-6 text-justify">
                    {member.bio}
                  </p>

                  {/* Additional Info */}
                  <div className="pt-6 border-t border-divider">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-4">
                      Principais Atuações
                    </p>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {member.fullBio.map((item, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-foreground/70">
                          <span className="text-gold mt-0.5 flex-shrink-0">▪</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 pt-12 border-t border-divider">
          <p className="text-center text-foreground/70 text-lg leading-relaxed max-w-3xl mx-auto">
            Ambos trabalham em conjunto para entregar soluções integradas que combinam análise financeira rigorosa com expertise jurídica, garantindo reestruturação eficaz e segura para seu negócio.
          </p>
        </div>
      </div>
    </section>
  )
}
