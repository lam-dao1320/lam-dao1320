import { useState, useEffect } from "react"
import { useMutation } from "convex/react"
import { api } from "../convex/_generated/api"
import Navbar from "./components/Navbar"
import ChatWidget from "./components/ChatWidget"
import Hero from "./sections/Hero"
import Education from "./sections/Education"
import Projects from "./sections/Projects"
import Experience from "./sections/Experience"
import Tech from "./sections/Tech"
import Learning from "./sections/Learning"
import ProjectDetail from "./sections/ProjectDetail"
import { projects } from "./data/portfolio"
import { profile } from "./data/portfolio"

export default function App() {
  const [currentProjectId, setCurrentProjectId] = useState<string | null>(null)

  // Convex mutations — fired directly from App for cross-cutting concerns
  const seedMetrics = useMutation(api.metrics.seedIfEmpty)
  const incrementMetric = useMutation(api.metrics.increment)

  // Seed initial counts and track page view on first mount
  useEffect(() => {
    seedMetrics({}).then(() => {
      incrementMetric({ name: "page_views" })
    })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleProjectSelect = (id: string) => {
    setCurrentProjectId(id)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleBackToMain = () => {
    setCurrentProjectId(null)
    setTimeout(() => {
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 100)
  }

  const handleNavClickFromDetail = (sectionId: string) => {
    setCurrentProjectId(null)
    setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 100)
  }

  if (currentProjectId) {
    const project = projects.find((p) => p.id === currentProjectId)
    if (project) {
      return (
        <>
          <Navbar
            isDetailView
            onBack={handleBackToMain}
            onNavClick={handleNavClickFromDetail}
          />
          <ProjectDetail project={project} onBack={handleBackToMain} />
          <ChatWidget />
        </>
      )
    }
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero
          onViewProjects={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        />
        <Education />
        <Projects onProjectSelect={handleProjectSelect} />
        <Experience />
        <Tech />
        <Learning />
      </main>

      <footer className="py-12" style={{ background: "#111827" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <span
              className="w-8 h-8 rounded-md flex items-center justify-center text-sm font-black"
              style={{
                background: "#3B82F6",
                color: "#ffffff",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              LD
            </span>
            <span
              className="text-sm font-semibold"
              style={{ color: "#D1D5DB", fontFamily: "'Outfit', sans-serif" }}
            >
              © 2026 Ngoc Hong Lam Dao · React + Vite + Figma Make
            </span>
          </div>
          <div className="flex gap-4">
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
                style={{ color: "#6B7280", fontFamily: "'Outfit', sans-serif" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#ffffff")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#6B7280")
                }
              >
                {label} ↗
              </a>
            ))}
          </div>
          <a
            href="/LamDao_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
            style={{ padding: "8px 18px" }}
          >
            Resume PDF
          </a>
        </div>
      </footer>

      <ChatWidget />
    </>
  )
}
