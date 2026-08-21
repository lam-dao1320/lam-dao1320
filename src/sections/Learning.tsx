import { radarData, learningAreas } from "../data/portfolio"

function RadarChart({ size = 400 }: { size?: number }) {
  const cx = size / 2
  const cy = size / 2
  const r = size * 0.36
  const N = radarData.length
  const levels = 4

  const angle = (i: number) => (2 * Math.PI * i) / N - Math.PI / 2
  const pt = (i: number, val: number) => ({
    x: cx + (val / 100) * r * Math.cos(angle(i)),
    y: cy + (val / 100) * r * Math.sin(angle(i)),
  })
  const axisEnd = (i: number) => ({
    x: cx + r * Math.cos(angle(i)),
    y: cy + r * Math.sin(angle(i)),
  })
  const levelPoly = (level: number) =>
    Array.from({ length: N }, (_, i) => {
      const ratio = level / levels
      return `${cx + ratio * r * Math.cos(angle(i))},${cy + ratio * r * Math.sin(angle(i))}`
    }).join(" ")

  const dataPoly = radarData
    .map((d, i) => {
      const p = pt(i, d.value)
      return `${p.x},${p.y}`
    })
    .join(" ")

  return (
    <svg width={size * 1.2} height={size} viewBox={`0 0 ${size} ${size}`}>
      {Array.from({ length: levels }, (_, l) => (
        <polygon
          key={l}
          points={levelPoly(l + 1)}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="1"
        />
      ))}
      {Array.from({ length: N }, (_, i) => {
        const end = axisEnd(i)
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={end.x}
            y2={end.y}
            stroke="#E5E7EB"
            strokeWidth="1"
          />
        )
      })}
      <polygon
        points={dataPoly}
        fill="rgba(59,130,246,0.15)"
        stroke="#3B82F6"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {radarData.map((d, i) => {
        const p = pt(i, d.value)
        return (
          <g key={i}>
            <circle
              cx={p.x}
              cy={p.y}
              r={5}
              fill="#ffffff"
              stroke="#3B82F6"
              strokeWidth="2.5"
            />
            <circle cx={p.x} cy={p.y} r={2} fill="#3B82F6" />
          </g>
        )
      })}
      {radarData.map((d, i) => {
        const a = angle(i)
        const labelR = r + 28
        const lx = cx + labelR * Math.cos(a)
        const ly = cy + labelR * Math.sin(a)
        const anchor = lx < cx - 8 ? "end" : lx > cx + 8 ? "start" : "middle"
        return (
          <g key={i}>
            <text
              x={lx}
              y={ly}
              textAnchor={anchor}
              dominantBaseline="middle"
              fill="#6B7280"
              fontSize="10"
              fontFamily="'Outfit', sans-serif"
              fontWeight="600"
            >
              {d.subject}
            </text>
            <text
              x={lx}
              y={ly + 13}
              textAnchor={anchor}
              dominantBaseline="middle"
              fill="#3B82F6"
              fontSize="10"
              fontFamily="'Outfit', sans-serif"
              fontWeight="700"
            >
              {d.value}%
            </text>
          </g>
        )
      })}
      <circle cx={cx} cy={cy} r={3} fill="#3B82F6" />
    </svg>
  )
}

export default function Learning() {
  return (
    <section id="learning" className="py-24" style={{ background: "#F3F4F6" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-2 mb-12">
          <span className="section-label">Growth</span>
          <h2 className="section-title" style={{ color: "#111827" }}>
            My Learning Journey
          </h2>
          <div
            className="w-14 h-1.5 rounded-sm"
            style={{ background: "#3B82F6" }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Radar */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-6"
              style={{ color: "#9CA3AF", fontFamily: "'Outfit', sans-serif" }}
            >
              Expertise Radar
            </h3>
            <div
              className="rounded-lg p-4 flex flex-col items-center gap-6"
              style={{ background: "#F3F4F6" }}
            >
              <RadarChart size={400} />
              <div className="grid grid-cols-3 gap-4 w-full">
                {radarData.map((d) => (
                  <div key={d.subject} className="text-center">
                    <div
                      className="font-black text-xl"
                      style={{
                        color: "#3B82F6",
                        fontFamily: "'Outfit', sans-serif",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {d.value}%
                    </div>
                    <div
                      className="text-xs font-medium mt-0.5"
                      style={{
                        color: "#6B7280",
                        fontFamily: "'Outfit', sans-serif",
                      }}
                    >
                      {d.subject}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Learning areas */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-6"
              style={{ color: "#9CA3AF", fontFamily: "'Outfit', sans-serif" }}
            >
              Currently Exploring
            </h3>
            <div className="flex flex-col gap-4">
              {learningAreas.map((area, i) => {
                const isBlue = area.color === "blue"
                const accent = isBlue ? "#3B82F6" : "#10B981"
                const accentBg = isBlue ? "#EFF6FF" : "#ECFDF5"
                const fill = isBlue
                  ? "progress-fill-blue"
                  : "progress-fill-emerald"
                return (
                  <div
                    key={area.area}
                    className="card-hover rounded-lg p-5"
                    style={{
                      background: "#F9FAFB",
                      border: "1px solid #E5E7EB",
                      animation: `slide-up 0.5s ease-out ${i * 100}ms both`,
                    }}
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h4
                          className="font-bold text-sm"
                          style={{
                            color: "#111827",
                            fontFamily: "'Outfit', sans-serif",
                          }}
                        >
                          {area.area}
                        </h4>
                        <p
                          className="text-xs mt-1 leading-relaxed font-medium"
                          style={{
                            color: "#6B7280",
                            fontFamily: "'Outfit', sans-serif",
                          }}
                        >
                          {area.description}
                        </p>
                      </div>
                      <span
                        className="shrink-0 font-black text-xl px-3 py-1 rounded-md"
                        style={{
                          background: accentBg,
                          color: accent,
                          fontFamily: "'Outfit', sans-serif",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {area.progress}%
                      </span>
                    </div>
                    <div className="progress-bar mb-3">
                      <div
                        className={fill}
                        style={
                          {
                            "--progress-width": `${area.progress}%`,
                          } as React.CSSProperties
                        }
                      />
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {area.tags.map((t) => (
                        <span
                          key={t}
                          className={isBlue ? "tag-blue" : "tag-emerald"}
                        >
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

        {/* Philosophy — amber color block */}
        <div
          className="mt-14 rounded-lg p-8 relative overflow-hidden"
          style={{ background: "#F59E0B" }}
        >
          <div
            className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
            style={{ background: "rgba(255,255,255,0.1)" }}
          />
          <div
            className="absolute bottom-0 right-24 w-24 h-24 pointer-events-none rounded-full"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />
          <div className="relative">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{
                color: "rgba(255,255,255,0.7)",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              Philosophy
            </p>
            <blockquote
              className="font-bold text-lg leading-relaxed"
              style={{
                color: "#ffffff",
                maxWidth: "700px",
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: "-0.01em",
              }}
            >
              "The intersection of data and intelligence is where the most
              consequential software of our generation will be built. I learn to
              be useful at that intersection — not just as a consumer of tools,
              but as an architect of them."
            </blockquote>
            <p
              className="mt-3 text-sm font-semibold"
              style={{
                color: "rgba(255,255,255,0.75)",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              — Lam Dao
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
