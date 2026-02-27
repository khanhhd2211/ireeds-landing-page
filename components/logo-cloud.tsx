"use client"

import Image from "next/image"

export default function LogoCloud() {
  const logos = [
    { name: "AFD", image: "/images/afd.png" },
    { name: "CNES", image: "/images/cnes.png" },
    { name: "CSIRO", image: "/images/csirco.png" },
    { name: "DCC", image: "/images/dcc.png" },
    { name: "STAC", image: "/images/stac.png" },
    { name: "VIE", image: "/images/vie.png" },
    { name: "UEL", image: "/images/uel.png" },
  ]

  return (
    <section className="py-12 border-y border-border bg-accent border-none overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
        
        <div className="flex animate-scroll">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div key={`first-${index}`} className="flex-shrink-0 mx-8 md:mx-12">
              <Image
                src={logo.image}
                alt={logo.name}
                width={120}
                height={60}
                className="h-12 md:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div key={`second-${index}`} className="flex-shrink-0 mx-8 md:mx-12">
              <Image
                src={logo.image}
                alt={logo.name}
                width={120}
                height={60}
                className="h-12 md:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
