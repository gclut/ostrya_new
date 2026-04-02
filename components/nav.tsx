"use client"

import { useState, useEffect } from "react"

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-divider"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <a href="#" className="font-serif text-xl font-semibold tracking-wide text-foreground">
          Finança<span className="text-primary">Sul</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#problema" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase">
            O Problema
          </a>
          <a href="#solucoes" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase">
            Soluções
          </a>
          <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase">
            FAQ
          </a>
        </nav>
        <a
          href="#contato"
          className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2 tracking-wide transition-all duration-300 hover:opacity-85 active:scale-95"
        >
          Fale Conosco
        </a>
      </div>
    </header>
  )
}
