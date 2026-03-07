"use client";

import { useEffect, useState } from "react";

const sections = [
  { name: "Home", id: "hero" },
  { name: "About Us", id: "about" },
  { name: "Partners", id: "partners" },
  { name: "Projects", id: "works" },
  { name: "Our Research", id: "services" },
  { name: "Our Team", id: "contact" },
  { name: "Statistics", id: "stats" },
  { name: "Recent Topic", id: "articles" },
];

export default function TableOfContents() {
  const [activeSection, setActiveSection] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className="hidden xl:block fixed right-0 top-1/2 -translate-y-1/2 z-40"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Collapsed State - Just Lines */}
      {!isExpanded && (
        <div className="flex flex-col gap-3 pr-6 py-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="flex justify-end"
              aria-label={section.name}
            >
              <span
                className={`h-0.5 transition-all duration-200 ${
                  activeSection === section.id
                    ? "w-8 bg-accent"
                    : "w-6 bg-foreground/30 hover:bg-foreground/50"
                }`}
              />
            </button>
          ))}
        </div>
      )}

      {/* Expanded State - Full Panel */}
      {isExpanded && (
        <div className="animate-in slide-in-from-right-5 duration-300">
          <div className="bg-background/95 backdrop-blur-lg border-l border-y border-border rounded-l-xl shadow-2xl w-72 max-h-[80vh] overflow-y-auto">
            <div className="px-6 py-4 border-b border-border sticky top-0 bg-background/95 backdrop-blur-lg">
              <h3 className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">
                On this page
              </h3>
            </div>

            {/* Navigation Items */}
            <nav className="py-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full flex items-center gap-3 px-6 py-3 transition-all duration-150 ${
                    activeSection === section.id
                      ? "text-accent bg-accent/10 border-r-[3px] border-accent"
                      : "text-foreground/70 hover:text-foreground hover:bg-accent/5"
                  }`}
                >
                  {/* Indicator Dot */}
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      activeSection === section.id
                        ? "bg-accent scale-125"
                        : "bg-foreground/40"
                    }`}
                  />

                  {/* Section Name */}
                  <span className="text-sm font-medium">{section.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
