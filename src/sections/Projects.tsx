import { useState } from "react"
import { projects } from "../data/portfolio"

const CATEGORIES = ["All", "ML / MLOps", "Full-Stack", "AI / RAG", "ML / Data"]

const CATEGORY_CARD_BG: Record<string, string> = {
  "ML / MLOps":  "#EFF6FF",
  "Full-Stack":  "#ECFDF5",
  "AI / RAG":    "#FFFBEB",
  "ML / Data":   "#EFF6FF",
}

const STATUS_STYLE: Record<string, { bg: string; color: string }> = {
  Production:   { bg: "#D1FAE5", color: "#065F46" },
  "Open Source":{ bg: "#DBEAFE", color: "#1D4ED8" },
  Beta:         { bg: "#FEF3C7", color: "#92400E" },
  Private:      { bg: "#F3F4F6", color: "#6B7280" },
}

export default function Projects({ onProjectSelect }: { onProjectSelect: (id: string) => void }) {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="py-24" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-2 mb-8">
          <span className="section-label">Work</span>
          <h2 className="section-title" style={{ color: "#111827" }}>Featured Projects</h2>
          <div className="w-14 h-1.5 rounded-sm" style={{ background: "#3B82F6" }} />
        </div>

        {/* Category filter */}
        {/* <div className="flex gap-2 flex-wrap mb-10">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="text-sm px-4 py-1.5 rounded-md font-semibold transition-all duration-200"
              style={{
                background: activeCategory === cat ? "#3B82F6" : "#F3F4F6",
                color: activeCategory === cat ? "#ffffff" : "#374151",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              {cat}
            </button>
          ))}
        </div> */}

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => {
            const status = STATUS_STYLE[project.status] ?? STATUS_STYLE.Private
            const cardBg = CATEGORY_CARD_BG[project.category] ?? "#F9FAFB"
            return (
              <article
                key={project.id}
                className="card-hover rounded-lg overflow-hidden cursor-pointer group"
                style={{
                  background: "#ffffff",
                  border: "1px solid #E5E7EB",
                  animation: `slide-up 0.5s ease-out ${i * 70}ms both`,
                }}
                onClick={() => onProjectSelect(project.id)}
              >
                {/* Thumbnail */}
                <div className="relative h-44 overflow-hidden" style={{ background: cardBg }}>
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Flat overlay — no gradient, just a sharp bottom bar for readability */}
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.55))" }}
                  />
                  <span
                    className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-md"
                    style={{ background: status.bg, color: status.color, fontFamily: "'Outfit', sans-serif" }}
                  >
                    {project.status}
                  </span>
                  <span
                    className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-md"
                    style={{ background: "rgba(255,255,255,0.9)", color: "#374151", fontFamily: "'Outfit', sans-serif" }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-xs font-semibold" style={{ color: "#9CA3AF", fontFamily: "'Outfit', sans-serif" }}>
                    {project.year}
                  </span>
                  <h3
                    className="font-bold text-base leading-snug mt-0.5 mb-1 transition-colors duration-200"
                    style={{ color: "#111827", fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.01em" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#3B82F6"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#111827"}
                  >
                    {project.title}
                    <span className="font-normal ml-1.5" style={{ color: "#9CA3AF", fontSize: "0.8rem" }}>
                      — {project.tagline}
                    </span>
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#6B7280", fontFamily: "'Outfit', sans-serif" }}>
                    {project.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 4).map(t => (
                      <span key={t} className="tag-ghost">{t}</span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="tag-ghost">+{project.tech.length - 4}</span>
                    )}
                  </div>

                  <div
                    className="flex items-center justify-between pt-3"
                    style={{ borderTop: "1px solid #F3F4F6" }}
                  >
                    <span
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: "#3B82F6", fontFamily: "'Outfit', sans-serif" }}
                    >
                      View Details →
                    </span>
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-semibold px-2.5 py-1 rounded-md transition-colors duration-200"
                          style={{ background: "#F3F4F6", color: "#374151", fontFamily: "'Outfit', sans-serif" }}
                          onClick={e => e.stopPropagation()}
                          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#E5E7EB")}
                          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "#F3F4F6")}
                        >
                          GitHub
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-semibold px-2.5 py-1 rounded-md transition-colors duration-200"
                          style={{ background: "#DBEAFE", color: "#1D4ED8", fontFamily: "'Outfit', sans-serif" }}
                          onClick={e => e.stopPropagation()}
                          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#BFDBFE")}
                          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "#DBEAFE")}
                        >
                          Live ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
