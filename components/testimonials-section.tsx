'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const testimonials = [
    {
      quote:
        "A equipe da Ostrya foi fundamental para reestruturar nossas dívidas. Em apenas 6 meses, conseguimos renegociar termos muito mais favoráveis com nossos credores.",
      author: 'Carlos Mendes',
      company: 'Produtor de Grãos - RS',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      quote:
        "Trabalhar com Jorge e sua equipe transformou completamente nossa situação financeira. O conhecimento técnico e a empatia foram incomparáveis.",
      author: 'Marina Silva',
      company: 'Ind. de Alimentos - SC',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
    {
      quote:
        "Profissionais sérios, com expertise comprovada. Recomendo para qualquer empresa que esteja em dificuldades financeiras.",
      author: 'Ricardo Santos',
      company: 'Logística Rural - RS',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    },
  ]

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="relative py-20 md:py-28 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
            Resultados Reais
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Histórias de sucesso de empresas que voltaram à lucratividade com nossa consultoria
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="bg-surface-1 rounded-lg border border-divider p-8 md:p-12">
            {/* Quote */}
            <blockquote className="text-center mb-8">
              <p className="text-xl md:text-2xl text-foreground italic leading-relaxed mb-8">
                "{testimonials[current].quote}"
              </p>
            </blockquote>

            {/* Author Info */}
            <div className="flex flex-col items-center">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].author}
                className="w-16 h-16 rounded-full object-cover mb-4 border border-divider"
              />
              <p className="font-semibold text-foreground text-lg">
                {testimonials[current].author}
              </p>
              <p className="text-muted-foreground text-sm">
                {testimonials[current].company}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded border border-divider hover:bg-surface-1 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 text-gold" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded border border-divider hover:bg-surface-1 transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5 text-gold" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === current ? 'bg-gold w-8' : 'bg-divider'
                }`}
                aria-label={`Testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
