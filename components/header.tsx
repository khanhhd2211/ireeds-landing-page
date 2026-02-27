"use client"

import type React from "react"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "HOME", href: "/" },
    { 
      name: "ABOUT", 
      href: "#about",
      dropdown: [
        { name: "Vision", href: "/about/vision" },
        { name: "Legal Structure", href: "/about/legal-structure" },
        { name: "Partnership", href: "/about/partnership" },
      ]
    },
    { name: "TEAM", href: "/team" },
    { name: "WORKS", href: "#works" },
    { name: "SERVICES", href: "#services" },
    { name: "BLOG", href: "#blog" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle anchor links (starting with #) for smooth scrolling
    if (!href.startsWith('#')) {
      return // Let Next.js router handle regular routes
    }
    
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={`mx-auto max-w-7xl transition-all duration-300 ${
          scrolled
            ? "mt-4 mx-4 px-6 py-2 shadow-2xl border border-accent/30 bg-background/40 backdrop-blur-lg rounded-lg"
            : "px-6 py-4 bg-background/30 backdrop-blur-lg mx-4 shadow-lg border border-accent/20"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="transition-all duration-300"
          >
            <Image
              src="/images/ireeds-logo.png"
              alt="IREEDS Logo"
              width={scrolled ? 100 : 120}
              height={scrolled ? 40 : 50}
              className="h-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.dropdown ? (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setAboutDropdownOpen(true)}
                  onMouseLeave={() => setAboutDropdownOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-accent transition-colors cursor-pointer py-2"
                  >
                    {item.name}
                    <ChevronDown className="h-3 w-3" />
                  </button>
                  
                  {aboutDropdownOpen && (
                    <div className="absolute top-full left-0 pt-2 z-50">
                      <div className="w-48 bg-background border border-border rounded-lg shadow-lg py-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-foreground/70 hover:text-accent hover:bg-accent/10 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : item.href.startsWith('#') ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors cursor-pointer"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors cursor-pointer"
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden md:flex items-center gap-2 rounded-full border border-foreground px-5 py-2.5 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors cursor-pointer"
          >
            Let&apos;s talk
            <ArrowUpRight className="h-4 w-4" />
          </a>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                item.dropdown ? (
                  <div key={item.name}>
                    <button
                      onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                      className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-accent transition-colors w-full text-left"
                    >
                      {item.name}
                      <ChevronDown className={`h-3 w-3 transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {aboutDropdownOpen && (
                      <div className="ml-4 mt-2 flex flex-col gap-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-sm text-foreground/70 hover:text-accent transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors cursor-pointer"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors cursor-pointer"
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="flex items-center gap-2 rounded-full border border-foreground px-5 py-2.5 text-sm font-medium text-foreground w-fit cursor-pointer"
              >
                Let&apos;s talk
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
