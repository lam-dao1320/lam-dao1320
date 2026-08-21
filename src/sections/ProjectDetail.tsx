import { projects } from "../data/portfolio"

type Project = typeof projects[number]

const STATUS_STYLE: Record<string, { bg: string; color: string }> = {
  Production:   { bg: "#D1FAE5", color: "#065F46" },
  "Open Source":{ bg: "#DBEAFE", color: "#1D4ED8" },
  Beta:         { bg: "#FEF3C7", color: "#92400E" },
  Private:      { bg: "#F3F4F6", color: "#6B7280" },
}

export default function ProjectDetail({ project, onBack }: { project: Project; onBack: () => void }) {
  const status = STATUS_STYLE[project.status] ?? STATUS_STYLE.Private
  const isEven = projects.findIndex(p => p.id === project.id) % 2 === 0
  const accent  = isEven ? "#3B82F6" : "#10B981"
  const accentBg = isEven ? "#EFF6FF" : "#ECFDF5"
  const others  = projects.filter(p => p.id !== project.id).slice(0, 3)

  return (
    <div className="min-h-screen pt-16" style={{ background: "#ffffff" }}>
      {/* Hero image + header bar */}
      <div className="relative h-72 md:h-96 overflow-hidden" style={{ background: "#F3F4F6" }}>
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        {/* Flat overlay — sharp bottom, no gradient blur */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(17,24,39,0.2) 0%, rgba(17,24,39,0.85) 100%)" }}
        />

        <button
          onClick={onBack}
          className="absolute top-6 left-6 flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-md transition-all duration-200"
          style={{ background: "#ffffff", color: "#3B82F6", fontFamily: "'Outfit', sans-serif" }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#F3F4F6")}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "#ffffff")}
        >
          ← Back to Portfolio
        </button>

        <div className="absolute bottom-8 left-6 right-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span
              className="text-xs font-bold px-2.5 py-1 rounded-md"
              style={{ background: status.bg, color: status.color, fontFamily: "'Outfit', sans-serif" }}
            >
              {project.status}
            </span>
            <span className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Outfit', sans-serif" }}>
              {project.category} · {project.year}
            </span>
          </div>
          <h1
            className="font-black leading-none"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)", color: "#ffffff", letterSpacing: "-0.03em", fontFamily: "'Outfit', sans-serif" }}
          >
            {project.title}
          </h1>
          <p className="mt-2 text-lg font-bold" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Outfit', sans-serif" }}>
            {project.tagline}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            <div>
              <h2 className="font-black text-xl mb-4" style={{ color: "#111827", fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}>
                Project Overview
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#374151", fontFamily: "'Outfit', sans-serif" }}>
                {project.longDesc}
              </p>
            </div>

            <div>
              <h2 className="font-black text-xl mb-4" style={{ color: "#111827", fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}>
                Key Achievements
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="card-hover rounded-lg p-4 flex items-start gap-3"
                    style={{ background: accentBg }}
                  >
                    <span
                      className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-black shrink-0"
                      style={{ background: accent, color: "#ffffff", fontFamily: "'Outfit', sans-serif" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-relaxed font-medium" style={{ color: "#374151", fontFamily: "'Outfit', sans-serif" }}>
                      {h}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {project.images[1] && (
              <div>
                <h2 className="font-black text-xl mb-4" style={{ color: "#111827", fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}>
                  Gallery
                </h2>
                <div className="rounded-lg overflow-hidden" style={{ border: "1px solid #E5E7EB" }}>
                  <img src={project.images[1]} alt={`${project.title} screenshot`} className="w-full object-cover" style={{ maxHeight: "360px" }} />
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-5">
            <div className="rounded-lg p-6" style={{ background: "#F3F4F6" }}>
              <h3 className="font-bold mb-4" style={{ color: "#111827", fontFamily: "'Outfit', sans-serif" }}>Links</h3>
              <div className="flex flex-col gap-3">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary flex items-center justify-center gap-2 text-sm">
                    🌐 Live Demo
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline flex items-center justify-center gap-2 text-sm">
                    GitHub Repo
                  </a>
                )}
              </div>
            </div>

            <div className="rounded-lg p-6" style={{ background: "#F3F4F6" }}>
              <h3 className="font-bold mb-4" style={{ color: "#111827", fontFamily: "'Outfit', sans-serif" }}>Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={t} className={i % 2 === 0 ? "tag-blue" : "tag-emerald"}>{t}</span>
                ))}
              </div>
            </div>

            <div className="rounded-lg p-6" style={{ background: "#F3F4F6" }}>
              <h3 className="font-bold mb-4" style={{ color: "#111827", fontFamily: "'Outfit', sans-serif" }}>Details</h3>
              {[
                { label: "Status",   value: project.status,   color: status.color },
                { label: "Year",     value: project.year,     color: "#374151" },
                { label: "Category", value: project.category, color: "#374151" },
              ].map(({ label, value, color }) => (
                <div
                  key={label}
                  className="flex items-center justify-between py-2.5"
                  style={{ borderBottom: "1px solid #E5E7EB" }}
                >
                  <span className="text-sm font-medium" style={{ color: "#6B7280", fontFamily: "'Outfit', sans-serif" }}>{label}</span>
                  <span className="text-sm font-bold" style={{ color, fontFamily: "'Outfit', sans-serif" }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* More projects */}
        <div className="mt-16 pt-12" style={{ borderTop: "1px solid #E5E7EB" }}>
          <h2 className="font-black text-xl mb-6" style={{ color: "#111827", fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}>
            More Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {others.map(p => (
              <button
                key={p.id}
                onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setTimeout(onBack, 300) }}
                className="card-hover rounded-lg overflow-hidden text-left group"
                style={{ background: "#ffffff", border: "1px solid #E5E7EB" }}
              >
                <img src={p.thumbnail} alt={p.title} className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="p-4">
                  <h4 className="font-bold text-sm" style={{ color: "#111827", fontFamily: "'Outfit', sans-serif" }}>{p.title}</h4>
                  <p className="text-xs mt-1 font-medium" style={{ color: "#6B7280", fontFamily: "'Outfit', sans-serif" }}>{p.tagline}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
