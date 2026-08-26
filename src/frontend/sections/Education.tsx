import { education, certifications } from "../../backend/data/portfolio"

export default function Education() {
  return (
    <section id="education" className="py-24" style={{ background: "#F3F4F6" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-2 mb-12">
          <span className="section-label">Background</span>
          <h2 className="section-title" style={{ color: "#111827" }}>
            Education & Certifications
          </h2>
          <div className="w-14 h-1.5 rounded-sm" style={{ background: "#3B82F6" }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education timeline */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-8"
              style={{ color: "#9CA3AF", fontFamily: "'Outfit', sans-serif" }}
            >
              Academic History
            </h3>
            <div className="relative pl-6">
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5"
                style={{ background: "#3B82F6" }}
              />

              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="relative mb-6 rounded-lg p-6"
                  style={{ background: "#ffffff" }}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute"
                    style={{
                      left: "-1.75rem",
                      top: "1.5rem",
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: "#3B82F6",
                    }}
                  />

                  <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                    <div>
                      <h4
                        className="font-bold text-base leading-snug"
                        style={{ color: "#111827", fontFamily: "'Outfit', sans-serif" }}
                      >
                        {edu.degree}
                      </h4>
                      <p
                        className="text-sm font-semibold mt-0.5"
                        style={{ color: "#3B82F6", fontFamily: "'Outfit', sans-serif" }}
                      >
                        {edu.institution}
                      </p>
                    </div>
                    <span
                      className="shrink-0 text-xs font-bold px-2.5 py-1 rounded-md"
                      style={{ background: "#EFF6FF", color: "#1D4ED8", fontFamily: "'Outfit', sans-serif" }}
                    >
                      {edu.period}
                    </span>
                  </div>

                  <div
                    className="text-sm font-semibold mb-4"
                    style={{ color: "#6B7280", fontFamily: "'Outfit', sans-serif" }}
                  >
                    GPA:{" "}
                    <span style={{ color: "#111827", fontWeight: 700 }}>{edu.gpa}</span>
                  </div>

                  <ul className="flex flex-col gap-2">
                    {edu.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: "#374151", fontFamily: "'Outfit', sans-serif" }}
                      >
                        <span style={{ color: "#3B82F6", marginTop: "2px", flexShrink: 0, fontWeight: 700 }}>▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-8"
              style={{ color: "#9CA3AF", fontFamily: "'Outfit', sans-serif" }}
            >
              Professional Certifications
            </h3>
            <div className="grid gap-3">
              {certifications.map((cert) => {
                const isBlue = cert.color === "blue"
                const bg   = isBlue ? "#EFF6FF" : "#ECFDF5"
                const color = isBlue ? "#1D4ED8" : "#065F46"
                const iconBg = isBlue ? "#DBEAFE" : "#D1FAE5"
                return (
                  <div
                    key={cert.id}
                    className="card-hover rounded-lg p-4 flex items-center gap-4"
                    style={{ background: "#ffffff" }}
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 text-xl"
                      style={{ background: iconBg }}
                    >
                      🏅
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4
                        className="font-semibold text-sm leading-snug"
                        style={{ color: "#111827", fontFamily: "'Outfit', sans-serif" }}
                      >
                        {cert.title}
                      </h4>
                      <p
                        className="text-xs mt-0.5 font-medium"
                        style={{ color: "#6B7280", fontFamily: "'Outfit', sans-serif" }}
                      >
                        {cert.issuer}
                      </p>
                    </div>
                    <span
                      className="shrink-0 text-xs font-bold px-2.5 py-1 rounded-md"
                      style={{ background: bg, color }}
                    >
                      {cert.date}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Stats */}
            {/* <div
              className="mt-8 p-6 rounded-lg grid grid-cols-3 gap-4 text-center"
              style={{ background: "#3B82F6" }}
            >
              {[
                { value: "3.88", label: "GPA",            color: "#FEF3C7" },
                { value: "4",    label: "Certifications", color: "#D1FAE5" },
                { value: "4+",   label: "Years Exp.",     color: "#DBEAFE" },
              ].map(({ value, label, color }) => (
                <div key={label}>
                  <div
                    className="font-black text-2xl"
                    style={{ color, fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
                  >
                    {value}
                  </div>
                  <div
                    className="text-xs font-medium mt-0.5"
                    style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Outfit', sans-serif" }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
