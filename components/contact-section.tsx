"use client"

import type React from "react"

import { useState } from "react"
import { ArrowUpRight, Send } from "lucide-react"
import Image from "next/image"

export default function ContactSection() {
  return (
    <section id="team" className="py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Send className="w-5 h-5 text-accent" strokeWidth={2} />
              <span className="text-sm font-medium text-foreground/70">Our Team</span>
            </div>
            
            <h2 className="text-3xl font-serif text-foreground mb-6 md:text-5xl">Our Team</h2>

            <p className="text-foreground/70 max-w-xl">
              IREEDS is a unique collaboration of a large number of scientists, 
              economists, computational experts, researchers, and analysts from leading research institutions and universities around the world.
            </p>
            <a
              href="/team"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-foreground px-6 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              View Team
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          {/* Right: Team Image */}
          <div className="lg:w-3/3 rounded-2xl overflow-hidden">
            <Image
              src="/images/team.jpg"
              alt="Our Team"
              width={800}
              height={500}
              className="w-full h-64 md:h-80 object-cover transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
