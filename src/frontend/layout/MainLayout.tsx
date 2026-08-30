import { useParams } from "react-router"
import { useEffect } from "react"
import Navbar from "../components/Navbar"
import ChatWidget from "../components/ChatWidget"
import Hero from "../sections/Hero"
import Education from "../sections/Education"
import Projects from "../sections/Projects"
import Experience from "../sections/Experience"
import Tech from "../sections/Tech"
import Learning from "../sections/Learning"
import { profile } from "../../backend/data/portfolio"

export function MainLayout() {
  const { id } = useParams<{ id: string }>();
  // console.log("MainLayout id:", id); // Debugging line to check the value of id
  
  useEffect(() => {
    document.getElementById(id ? id : "profile")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [id]);

  return (
    <>
      <Navbar isDetailView={false}/>
      <main>
        <Hero
          onViewProjects={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        />
        <Education />
        <Projects />
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
            href="/lam-dao1320/info/LamDao_Resume.pdf"
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
  );
}