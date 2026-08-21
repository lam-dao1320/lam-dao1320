import { useRef, useEffect, useState } from "react"
import { useQuery } from "convex/react"
import { api } from "../../convex/_generated/api"
import { useCountUp } from "../hooks/useCountUp"
import { profile } from "../data/portfolio"
import { METRIC_DEFAULTS } from "../hooks/useMetrics"

interface MetricCardProps {
  label: string
  liveValue: number
  icon: string
  accentColor: string
  delay: number
}

function MetricCard({
  label,
  liveValue,
  icon,
  accentColor,
  delay,
}: MetricCardProps) {
  const initialRef = useRef<number | null>(null)
  if (liveValue > 0 && initialRef.current === null)
    initialRef.current = liveValue

  const animTarget = initialRef.current ?? 0
  const count = useCountUp(animTarget, 2000, delay)
  const animDone = animTarget > 0 && count >= animTarget
  const displayed = animDone ? liveValue : count

  return (
    <div
      className="card-hover rounded-lg p-5 flex flex-col gap-2 cursor-default"
      style={{
        background: "#ffffff",
        animation: `slide-up 0.6s ease-out ${delay + 500}ms both`,
      }}
    >
      <div className="flex items-center justify-between">
        <span className="text-xl">{icon}</span>
        <span
          className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded"
          style={{
            background: accentColor + "18",
            color: accentColor,
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          LIVE
        </span>
      </div>
      <div
        className="text-3xl font-black tabular-nums"
        style={{
          color: accentColor,
          fontFamily: "'Outfit', sans-serif",
          letterSpacing: "-0.02em",
        }}
      >
        {displayed.toLocaleString()}
      </div>
      <div
        className="text-sm font-medium"
        style={{ color: "#6B7280", fontFamily: "'Outfit', sans-serif" }}
      >
        {label}
      </div>
    </div>
  )
}

const TITLE_TEXTS = ["Full-Stack Developer", "Data Analyst", "Business Analyst"]

interface HeroProps {
  onViewProjects: () => void
}

export default function Hero({ onViewProjects }: HeroProps) {
  const metricsData = useQuery(api.metrics.getAll)

  const pageViews = metricsData?.page_views ?? METRIC_DEFAULTS.page_views
  const chatInteractions =
    metricsData?.chat_interactions ?? METRIC_DEFAULTS.chat_interactions
  const resumeDownloads =
    metricsData?.resume_downloads ?? METRIC_DEFAULTS.resume_downloads

  const [titleIdx, setTitleIdx] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const target = TITLE_TEXTS[titleIdx]
    let timeout: ReturnType<typeof setTimeout>
    if (typing) {
      if (displayed.length < target.length) {
        timeout = setTimeout(
          () => setDisplayed(target.slice(0, displayed.length + 1)),
          60,
        )
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      } else {
        setTitleIdx((i) => (i + 1) % TITLE_TEXTS.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, titleIdx])

  return (
    <section
      id="profile"
      className="relative overflow-hidden pt-16"
      style={{ background: "#3B82F6", minHeight: "100vh" }}
    >
      {/* Geometric decorations — flat, low-opacity white shapes */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.06)",
          top: -120,
          right: -80,
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
          bottom: 60,
          left: -60,
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 160,
          height: 160,
          background: "rgba(255,255,255,0.06)",
          bottom: 200,
          right: 120,
          transform: "rotate(24deg)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.1)",
          top: 180,
          left: "38%",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full py-20 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div
            className="flex flex-col gap-6"
            style={{ animation: "slide-up 0.7s ease-out both" }}
          >
            <div className="flex items-center gap-3">
              <span className="section-label-white">Portfolio 2026</span>
              <span
                className="h-px w-12"
                style={{ background: "rgba(255,255,255,0.3)" }}
              />
              <span
                className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  color: "#ffffff",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: "#10B981",
                    animation: "pulse-dot 2s ease-out infinite",
                  }}
                />
                Open to Work
              </span>
            </div>

            <div>
              <h1
                className="font-black leading-none mb-3"
                style={{
                  fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                  letterSpacing: "-0.03em",
                  color: "#ffffff",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                {profile.name}
              </h1>
              <div
                className="font-bold flex items-center gap-2"
                style={{
                  fontSize: "clamp(1.1rem, 2.2vw, 1.6rem)",
                  color: "rgba(255,255,255,0.85)",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                <span>{displayed}</span>
                <span
                  style={{
                    animation: "blink-cursor 1s ease-in-out infinite",
                    color: "#FEF3C7",
                  }}
                >
                  |
                </span>
              </div>
            </div>

            <p
              className="text-base leading-relaxed max-w-lg"
              style={{
                color: "rgba(255,255,255,0.8)",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              {profile.summary}
            </p>

            <div className="flex items-center gap-2 flex-wrap">
              {[
                { icon: "📍", text: profile.location },
                { icon: "✉️", text: profile.email },
              ].map(({ icon, text }) => (
                <span
                  key={text}
                  className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-md"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.85)",
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  {icon} {text}
                </span>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap pt-2">
              <button onClick={onViewProjects} className="btn-white-outline">
                View Projects
              </button>
              <a
                href="/LamDao_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-white"
              >
                Resume PDF
              </a>
            </div>

            <div className="flex gap-4 pt-1">
              {[
                {
                  label: "GitHub",
                  href: `https://github.com/${profile.github}`,
                },
                {
                  label: "LinkedIn",
                  href: `https://linkedin.com/in/${profile.linkedin}`,
                },
                { label: "Email", href: `mailto:${profile.email}` },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold transition-colors duration-200"
                  style={{
                    color: "rgba(255,255,255,0.65)",
                    fontFamily: "'Outfit', sans-serif",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#ffffff")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.65)")
                  }
                >
                  {label} ↗
                </a>
              ))}
            </div>
          </div>

          {/* Right: avatar + metric cards */}
          <div
            className="flex flex-col gap-6"
            style={{ animation: "slide-up 0.7s ease-out 150ms both" }}
          >
            <div className="flex justify-center lg:justify-end">
              <div className="relative float-anim">
                <div
                  className="rounded-full w-100 h-100 overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/20 group overflow-hidden" 
                  style={{ border: "4px solid rgba(255,255,255,0.5)" }}
                >
                  <img
                    src="/Profile.jpeg"
                    alt="Lam Dao"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Flat geometric accent shapes */}
                {/* <div
                  className="absolute -top-3 -right-3 w-8 h-8"
                  style={{ background: "#FEF3C7", borderRadius: "2px" }}
                /> */}
                <div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider whitespace-nowrap"
                  style={{
                    background: "#ffffff",
                    color: "#3B82F6",
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  {profile.monthsOfExp}+ Months Experience
                </div>
              </div>
            </div>

            {/* Real-time metric cards (white on blue bg) */}
            {/* <div className="grid grid-cols-3 gap-3">
              <MetricCard
                label="Total Page Views"
                liveValue={pageViews}
                icon="👁"
                accentColor="#3B82F6"
                delay={0}
              />
              <MetricCard
                label="Chat Interactions"
                liveValue={chatInteractions}
                icon="💬"
                accentColor="#10B981"
                delay={150}
              />
              <MetricCard
                label="Resume Downloads"
                liveValue={resumeDownloads}
                icon="⬇"
                accentColor="#F59E0B"
                delay={300}
              />
            </div> */}

            {/* <div className="flex items-center justify-end gap-2">
              <span
                className="text-xs font-medium"
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                Powered by
              </span>
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-md"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  color: "#ffffff",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                Convex Real-Time DB
              </span>
            </div> */}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: "fade-in 1s ease-out 1.5s both" }}
      >
        <span
          className="text-xs font-bold uppercase tracking-widest"
          style={{
            color: "rgba(255,255,255,0.5)",
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          Scroll
        </span>
        <div
          className="w-5 h-8 rounded-full border-2 flex items-start justify-center p-1"
          style={{ borderColor: "rgba(255,255,255,0.3)" }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{
              background: "rgba(255,255,255,0.7)",
              animation: "float 1.5s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  )
}
