import { useState, useEffect } from "react"

const NAV_LINKS = [
  { label: "Profile", id: "profile" },
  { label: "Education", id: "education" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Tech", id: "tech" },
  { label: "My Learning", id: "learning" },
]

interface NavbarProps {
  onNavClick?: (id: string) => void
  isDetailView?: boolean
  onBack?: () => void
}

export default function Navbar({
  onNavClick,
  isDetailView,
  onBack,
}: NavbarProps) {
  const [active, setActive] = useState("profile")
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (isDetailView) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { threshold: 0.3, rootMargin: "-64px 0px -40% 0px" },
    )
    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [isDetailView])

  const scrollTo = (id: string) => {
    if (onNavClick) {
      onNavClick(id)
      return
    }
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" })
    setMenuOpen(false)
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: "#ffffff", borderBottom: "1px solid #E5E7EB" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => (isDetailView ? onBack?.() : scrollTo("profile"))}
          className="flex items-center gap-2.5"
        >
          <span
            className="w-8 h-8 rounded-md flex items-center justify-center text-sm font-bold"
            style={{ background: "#3B82F6", color: "#ffffff" }}
          >
            LD
          </span>
          <span
            className="font-bold text-sm"
            style={{ color: "#111827", fontFamily: "'Outfit', sans-serif" }}
          >
            Lam Dao
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200"
              style={{
                color: active === id ? "#3B82F6" : "#6B7280",
                background: active === id ? "#EFF6FF" : "transparent",
                fontFamily: "'Outfit', sans-serif",
                fontWeight: active === id ? 600 : 500,
              }}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="/LamDao_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden md:block"
            style={{ padding: "8px 18px", fontSize: "13px", fontWeight: 700 }}
          >
            Resume PDF
          </a>
          {/* <button onClick={onResumeDownload} className="btn-primary hidden md:block" style={{ padding: "8px 18px", fontSize: "13px", fontWeight: 700 }}>
            Download Resume
          </button> */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1.5 rounded-md"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block h-0.5 w-5 rounded"
                style={{ background: "#111827" }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && !isDetailView && (
        <div style={{ background: "#ffffff", borderTop: "1px solid #E5E7EB" }}>
          <div className="px-6 py-4 flex flex-col gap-1 max-w-7xl mx-auto">
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors duration-200"
                style={{
                  color: active === id ? "#3B82F6" : "#374151",
                  background: active === id ? "#EFF6FF" : "transparent",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                {label}
              </button>
            ))}
            <a
              href="/LamDao_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-3 text-sm"
              style={{ padding: "10px 18px" }}
            >
              Resume PDF
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
