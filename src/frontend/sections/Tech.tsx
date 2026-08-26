import { useState } from "react"
import { techCategories } from "../../backend/data/portfolio"

function SkillBar({ name, level, idx, color }: { name: string; level: number; idx: number; color: "blue" | "emerald" }) {
  const fill = color === "blue" ? "progress-fill-blue" : "progress-fill-emerald"
  const textColor = color === "blue" ? "#1D4ED8" : "#065F46"
  return (
    <div className="flex flex-col gap-1.5" style={{ animationDelay: `${idx * 50}ms` }}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium" style={{ color: "#374151", fontFamily: "'Outfit', sans-serif" }}>
          {name}
        </span>
        <span className="text-xs font-bold" style={{ color: textColor, fontFamily: "'Outfit', sans-serif" }}>
          {level}%
        </span>
      </div>
      <div className="progress-bar">
        <div className={fill} style={{ "--progress-width": `${level}%` } as React.CSSProperties} />
      </div>
    </div>
  )
}

export default function Tech() {
  const [activeTab, setActiveTab] = useState(0)
  const current = techCategories[activeTab]
  const isEven  = activeTab % 2 === 0
  const color   = isEven ? "blue" : "emerald"

  return (
    <section id="tech" className="pt-24 pb-15" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-2 mb-12">
          <span className="section-label">Skills</span>
          <h2 className="section-title" style={{ color: "#111827" }}>Technical Stack</h2>
          <div className="w-14 h-1.5 rounded-sm" style={{ background: "#3B82F6" }} />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tab list */}
          <div className="flex flex-col gap-1">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#9CA3AF", fontFamily: "'Outfit', sans-serif" }}>
              Category
            </p>
            {techCategories.map((cat, i) => {
              const isActive  = i === activeTab
              const catColor  = i % 2 === 0 ? "#3B82F6" : "#10B981"
              const catBg     = i % 2 === 0 ? "#EFF6FF" : "#ECFDF5"
              return (
                <button
                  key={cat.label}
                  onClick={() => setActiveTab(i)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200"
                  style={{
                    background: isActive ? catBg : "transparent",
                    color: isActive ? catColor : "#6B7280",
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: isActive ? 700 : 500,
                    fontSize: "0.9rem",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: isActive ? catColor : "#D1D5DB" }}
                  />
                  {cat.label}
                  {isActive && (
                    <span className="ml-auto text-xs font-semibold" style={{ color: catColor }}>
                      {cat.skills.length}
                    </span>
                  )}
                </button>
              )
            })}
          </div>

          {/* Skills panel */}
          <div
            className="lg:col-span-2 rounded-lg p-8"
            style={{ background: "#ffffff" }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-lg" style={{ color: "#111827", fontFamily: "'Outfit', sans-serif" }}>
                {current.label}
              </h3>
              <span
                className="text-xs font-bold px-3 py-1 rounded-md"
                style={{
                  background: isEven ? "#EFF6FF" : "#ECFDF5",
                  color: isEven ? "#1D4ED8" : "#065F46",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                {current.skills.length} technologies
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
              {current.skills.map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} idx={i} color={color} />
              ))}
            </div>

            <div
              className="mt-8 pt-6 flex items-center justify-between"
              style={{ borderTop: "1px solid #F3F4F6" }}
            >
              <span className="text-sm font-medium" style={{ color: "#9CA3AF", fontFamily: "'Outfit', sans-serif" }}>
                Average Proficiency
              </span>
              <span
                className="font-black text-2xl"
                style={{
                  color: isEven ? "#3B82F6" : "#10B981",
                  fontFamily: "'Outfit', sans-serif",
                  letterSpacing: "-0.02em",
                }}
              >
                {Math.round(current.skills.reduce((a, s) => a + s.level, 0) / current.skills.length)}%
              </span>
            </div>
          </div>
        </div>

        {/* Also worked with */}
        {/* <div className="mt-14">
          <p className="text-xs font-bold uppercase tracking-widest mb-6 text-center" style={{ color: "#9CA3AF", fontFamily: "'Outfit', sans-serif" }}>
            Also worked with
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "LangChain", "LlamaIndex", "Ollama", "ChromaDB", "FAISS", "Weaviate",
              "Tableau", "Power BI", "Looker", "dbt", "Great Expectations",
              "Prometheus", "Grafana", "OpenTelemetry", "ArgoCD",
              "Playwright", "pytest", "Jest", "Vitest",
              "Figma", "Notion", "Linear",
            ].map((tool, i) => (
              <button
                key={tool}
                className="tag-ghost transition-all duration-200 cursor-default"
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  if (i % 2 === 0) { el.style.background = "#DBEAFE"; el.style.color = "#1D4ED8" }
                  else             { el.style.background = "#D1FAE5"; el.style.color = "#065F46" }
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = "#F3F4F6"
                  el.style.color      = "#4B5563"
                }}
              >
                {tool}
              </button>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
