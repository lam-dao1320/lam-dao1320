import { experience } from "../data/portfolio"

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24"
      style={{ background: "#F3F4F6" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-2 mb-12">
          <span className="section-label">Career</span>
          <h2 className="section-title" style={{ color: "#111827" }}>
            Work Experience
          </h2>
          <div
            className="w-14 h-1.5 rounded-sm"
            style={{ background: "#3B82F6" }}
          />
        </div>

        <div className="relative">
          {/* Timeline spine */}
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5"
            style={{ background: "#3B82F6" }}
          />

          <div className="flex flex-col gap-6 md:pl-16">
            {experience.map((exp, i) => {
              const isPink = exp.color === "pink"
              const accent = isPink ? "#3B82F6" : "#10B981"
              const accentBg = isPink ? "#1E3A5F" : "#064E3B"

              return (
                <div
                  key={exp.id}
                  className="relative mb-6 rounded-lg p-6 card-hover"
                  style={{
                    background: "#ffffff",
                    animation: `slide-up 0.6s ease-out ${i * 100}ms both`,
                  }}
                >
                  {/* Dot on timeline */}
                  <div
                    className="absolute"
                    style={{
                      left: "-2.75rem",
                      top: "1.5rem",
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: "#3B82F6",
                    }}
                  />

                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-5">
                    {/* Company badge */}
                    <div
                      className="w-14 h-14 rounded-lg flex items-center justify-center font-black text-sm shrink-0"
                      style={{
                        background: "#EFF6FF",
                        color: "#1D4ED8",
                        fontFamily: "'Outfit', sans-serif",
                        border: `2px solid #3B82F6`,
                      }}
                    >
                      {exp.initials}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <h3
                            className="font-bold text-base"
                            style={{
                              color: "#111827",
                              fontFamily: "'Outfit', sans-serif",
                            }}
                          >
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span
                              className="font-bold text-sm"
                              style={{
                                color: "#3B82F6",
                                fontFamily: "'Outfit', sans-serif",
                              }}
                            >
                              {exp.company}
                            </span>
                            <span
                              className="text-xs"
                              style={{ color: "#6B7280" }}
                            >
                              ·
                            </span>
                            <span
                              className="text-xs font-medium"
                              style={{
                                color: "#6B7280",
                                fontFamily: "'Outfit', sans-serif",
                              }}
                            >
                              {exp.companyType}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col items-start sm:items-end gap-1">
                          <span
                            className="text-xs font-bold px-2.5 py-1 rounded-md"
                            style={{
                              background: "#EFF6FF",
                              color: "#1D4ED8",
                              fontFamily: "'Outfit', sans-serif",
                            }}
                          >
                            {exp.period}
                          </span>
                          <span
                            className="text-xs font-medium"
                            style={{
                              color: "#6B7280",
                              fontFamily: "'Outfit', sans-serif",
                            }}
                          >
                            {exp.location} · {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-2.5 mb-5">
                    {exp.highlights.map((h, hi) => (
                      <li
                        key={hi}
                        className="flex items-start gap-2.5 text-sm leading-relaxed"
                        style={{
                          color: "#374151",
                          fontFamily: "'Outfit', sans-serif",
                        }}
                      >
                        <span
                          style={{
                            color: "#3B82F6",
                            marginTop: "2px",
                            flexShrink: 0,
                            fontWeight: 700,
                          }}
                        >
                          ▸
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span key={t} className="tag-blue">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
