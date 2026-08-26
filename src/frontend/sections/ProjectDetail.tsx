import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { SiGithub } from 'react-icons/si';
import AutoImageSlider from "../components/AutoImageSlider";
import { projects } from "../../backend/data/portfolio"

const STATUS_STYLE: Record<string, { bg: string; color: string }> = {
  "Production":   { bg: "#D1FAE5", color: "#065F46" },
  "Open Source":  { bg: "#DBEAFE", color: "#1D4ED8" },
  "Beta":         { bg: "#FEF3C7", color: "#92400E" },
  "Private":      { bg: "#F3F4F6", color: "#6B7280" },
}

// async function getImageByProjectId(id: string): Promise<string[]> {
//   const dir = {
//       fsPath: path.join(process.cwd(), "public", id),
//       publicPrefix: `/${id}`,
//     }
  
//   try {
//     const files = await fs.readdir(dir.fsPath);
//     const imageFiles = files
//       .filter((file) => /\.(png|jpe?g|gif|webp)$/i.test(file))
//       .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

//     if (imageFiles.length > 0) return imageFiles.map((fileName) => `${dir.publicPrefix}/${fileName}`);
//   } catch (err) {
//     console.error(`Error reading images for project ${id}:`, err);
//   }
//   return [];
// }

function StarBullet({
  items,
  accent,
  accentBg,
  icon,
}: {
  items: string[]
  accent: string
  accentBg: string
  icon: string
}) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            className="shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-xs font-black mt-0.5"
            style={{ background: accentBg, color: accent, fontFamily: "'Outfit', sans-serif" }}
          >
            {icon}
          </span>
          <span
            className="text-sm leading-relaxed font-medium"
            style={{ color: "#374151", fontFamily: "'Outfit', sans-serif" }}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}

function SectionBlock({
  label,
  title,
  accentColor,
  children,
}: {
  label: string
  title: string
  accentColor: string
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <span
          className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-md"
          style={{
            background: accentColor + "18",
            color: accentColor,
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          {label}
        </span>
        <div className="h-px flex-1" style={{ background: "#E5E7EB" }} />
      </div>
      <h2
        className="font-black text-xl mb-5"
        style={{ color: "#111827", fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
      >
        {title}
      </h2>
      {children}
    </div>
  )
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  // const images = import.meta.glob(`/public/**/*.{png,jpg,jpeg,gif,webp}`, { eager: true });
  // const getImageByProjectId = (id: string) => {
  //   const path = `/public/${id}`;
  //   const image = images[path] as { default: string } | undefined;
  //   return image ? image.default : null;
  // }

  if (!project) {
    navigate("/lam-dao1320");
    return null;
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // if (id) console.log(getImageByProjectId(id)); // Debugging line to check the image path
  }, [id]);

  const status = STATUS_STYLE[project.status] ?? STATUS_STYLE.Private
  const idx = projects.findIndex((p) => p.id === project.id)
  const isEven = idx % 2 === 0
  const accent = isEven ? "#3B82F6" : "#10B981"
  const accentBg = isEven ? "#EFF6FF" : "#ECFDF5"
  const accentAlt = isEven ? "#10B981" : "#F59E0B"
  const accentAltBg = isEven ? "#ECFDF5" : "#FFFBEB"
  const others = projects.filter((p) => p.id !== project.id).slice(0, 3)

  return (
    <div className="min-h-screen pt-16" style={{ background: "#ffffff" }}>
      {/* Hero image + header bar */}
      <div className="relative h-72 md:h-96 overflow-hidden" style={{ background: "#F3F4F6" }}>
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(17,24,39,0.15) 0%, rgba(17,24,39,0.88) 100%)",
          }}
        />

        {/* Back button */}
        <button
          onClick={() => navigate(`/lam-dao1320`)}
          className="absolute top-6 left-6 flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-md transition-all duration-200"
          style={{ background: "#ffffff", color: "#3B82F6", fontFamily: "'Outfit', sans-serif" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.background = "#EFF6FF")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.background = "#ffffff")
          }
        >
          ← Back to Portfolio
        </button>

        {/* Header links row */}
        <div className="absolute top-6 right-6 flex gap-2">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-md transition-all duration-200"
              style={{ background: "#3B82F6", color: "#ffffff", fontFamily: "'Outfit', sans-serif" }}
            >
              🌐 Live Demo
            </a>
          )}
        </div>

        {/* Title block */}
        <div className="absolute bottom-8 left-6 right-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <span
              className="text-xs font-bold px-2.5 py-1 rounded-md"
              style={{
                background: status.bg,
                color: status.color,
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              {project.status}
            </span>
            <span
              className="text-xs font-semibold"
              style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Outfit', sans-serif" }}
            >
              {project.category} · {project.timeline}
              {"duration" in project && project.duration ? ` · ${project.duration}` : ""}
            </span>
          </div>
          <h1
            className="font-black leading-none"
            style={{
              fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)",
              color: "#ffffff",
              letterSpacing: "-0.03em",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            {project.title}
          </h1>
          <p
            className="mt-2 text-base font-semibold"
            style={{ color: "rgba(255,255,255,0.72)", fontFamily: "'Outfit', sans-serif" }}
          >
            {project.tagline}
          </p>
        </div>
      </div>

      {/* ── Details meta bar ───────────────────────── */}
      {/* <div style={{ background: "#F9FAFB", borderBottom: "1px solid #E5E7EB" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap gap-6">
          {[
            { label: "Status", value: project.status, valueColor: status.color },
            {
              label: "Duration",
              value: "duration" in project && project.duration ? project.duration : project.year,
              valueColor: "#111827",
            },
            { label: "Category", value: project.category, valueColor: accent },
            { label: "Year", value: project.year, valueColor: "#374151" },
          ].map(({ label, value, valueColor }) => (
            <div key={label} className="flex items-center gap-2">
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#9CA3AF", fontFamily: "'Outfit', sans-serif" }}
              >
                {label}
              </span>
              <span
                className="text-xs font-black"
                style={{ color: valueColor, fontFamily: "'Outfit', sans-serif" }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </div> */}

      {/* ── Main content ───────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left: STAR narrative */}
          <div className="lg:col-span-2 flex flex-col gap-12">

            {/* 1. Overview — Situation */}
            {"situation" in project && project.situation && (
              <SectionBlock label="Situation" title="Project Overview" accentColor={accent}>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#374151", fontFamily: "'Outfit', sans-serif" }}
                >
                  {project.situation}
                </p>
              </SectionBlock>
            )}

            {/* 2. Task & Objectives */}
            {"objectives" in project && project.objectives && (
              <SectionBlock label="Task" title="Role & Objectives" accentColor={accentAlt}>
                {"role" in project && project.role && (
                  <div
                    className="mb-5 px-4 py-3 rounded-md"
                    style={{ background: accentBg, border: `1px solid ${accent}22` }}
                  >
                    <span
                      className="text-xs font-bold uppercase tracking-widest block mb-1"
                      style={{ color: accent, fontFamily: "'Outfit', sans-serif" }}
                    >
                      My Role
                    </span>
                    <p
                      className="text-sm font-medium leading-relaxed"
                      style={{ color: "#374151", fontFamily: "'Outfit', sans-serif" }}
                    >
                      {project.role}
                    </p>
                  </div>
                )}
                <StarBullet
                  items={project.objectives}
                  accent={accentAlt}
                  accentBg={accentAltBg}
                  icon="→"
                />
              </SectionBlock>
            )}

            {/* 3. Actions — what was built / how */}
            {"actions" in project && project.actions && (
              <SectionBlock label="Action" title="Key Solutions Implemented" accentColor={accent}>
                <StarBullet
                  items={project.actions}
                  accent={accent}
                  accentBg={accentBg}
                  icon="✦"
                />
              </SectionBlock>
            )}

            {/* 4. Results — measurable outcomes */}
            {"results" in project && project.results && (
              <SectionBlock label="Result" title="Outcomes & Impact" accentColor="#10B981">
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.results.map((r, i) => (
                    <div
                      key={i}
                      className="card-hover rounded-lg p-4 flex items-start gap-3"
                      style={{ background: "#ECFDF5", border: "1px solid #A7F3D0" }}
                    >
                      <span
                        className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-black shrink-0"
                        style={{
                          background: "#10B981",
                          color: "#ffffff",
                          fontFamily: "'Outfit', sans-serif",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p
                        className="text-sm leading-relaxed font-medium"
                        style={{ color: "#065F46", fontFamily: "'Outfit', sans-serif" }}
                      >
                        {r}
                      </p>
                    </div>
                  ))}
                </div>
              </SectionBlock>
            )}

            {/* 5. Gallery */}
            {project.images.length > 0 && (
              <SectionBlock label="Gallery" title="Screenshots & Visuals" accentColor="#6B7280">
                <AutoImageSlider images={project.images} title={project.title} />
              </SectionBlock>
            )}
          </div>

          {/* Right: sidebar */}
          <div className="flex flex-col gap-5">
            {/* Links */}
            <div className="rounded-lg p-6" style={{ background: "#F3F4F6" }}>
              <h3
                className="font-bold text-sm mb-4"
                style={{ color: "#111827", fontFamily: "'Outfit', sans-serif" }}
              >
                Links
              </h3>
              <div className="flex flex-col gap-3">
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary flex items-center justify-center gap-2 text-sm"
                  >
                    🌐 Live Demo
                  </a>
                ) : (
                  <div
                    className="text-center text-xs font-medium py-2 rounded-md"
                    style={{ color: "#9CA3AF", background: "#E5E7EB", fontFamily: "'Outfit', sans-serif" }}
                  >
                    No live demo available
                  </div>
                )}
                {project.link && (
                    <a
                      href={project.link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-row items-center justify-center gap-2 text-sm hover:bg-[#3B82F6] hover:text-white hover:transform-[scale(1.05)]"
                      style={{ background: 'transparent', color: '#3B82F6', fontFamily: "'Outfit', sans-serif", fontWeight: '700', borderRadius: '6px', cursor: 'pointer', transition: 'all 0.2s ease', border: '2px solid #3B82F6', padding: '0.5rem 1rem' }}
                    >
                      <project.link.Icon size={14} /> View on {project.link.type}
                    </a>
                )}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="rounded-lg p-6" style={{ background: "#F3F4F6" }}>
              <h3
                className="font-bold text-sm mb-4"
                style={{ color: "#111827", fontFamily: "'Outfit', sans-serif" }}
              >
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={t}
                    className={i % 3 === 0 ? "tag-blue" : i % 3 === 1 ? "tag-emerald" : "tag-amber"}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="rounded-lg p-6" style={{ background: "#F3F4F6" }}>
              <h3
                className="font-bold text-sm mb-4"
                style={{ color: "#111827", fontFamily: "'Outfit', sans-serif" }}
              >
                Details
              </h3>
              {[
                { label: "Status", value: project.status, color: status.color },
                { label: "Timeline", value: project.timeline, color: "#374151" },
                { label: "Category", value: project.category, color: accent },
              ].map(({ label, value, color }) => (
                <div
                  key={label}
                  className="flex items-center justify-between py-2.5"
                  style={{ borderBottom: "1px solid #E5E7EB" }}
                >
                  <span
                    className="text-xs font-medium"
                    style={{ color: "#6B7280", fontFamily: "'Outfit', sans-serif" }}
                  >
                    {label}
                  </span>
                  <span
                    className="text-xs font-bold"
                    style={{ color, fontFamily: "'Outfit', sans-serif" }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick highlights (compact) */}
            <div className="rounded-lg p-6" style={{ background: "#F3F4F6" }}>
              <h3
                className="font-bold text-sm mb-4"
                style={{ color: "#111827", fontFamily: "'Outfit', sans-serif" }}
              >
                Key Highlights
              </h3>
              <ul className="flex flex-col gap-2.5">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span
                      className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full"
                      style={{ background: accent, marginTop: "6px" }}
                    />
                    <span
                      className="text-xs font-medium leading-relaxed"
                      style={{ color: "#374151", fontFamily: "'Outfit', sans-serif" }}
                    >
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── More projects ─────────────────────────── */}
        <div className="mt-16 pt-12" style={{ borderTop: "1px solid #E5E7EB" }}>
          <h2
            className="font-black text-xl mb-6"
            style={{
              color: "#111827",
              fontFamily: "'Outfit', sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            More Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {others.map((p) => (
              <button
                key={p.id}
                onClick={() => navigate(`/lam-dao1320/projects/${p.id}`)}
                className="card-hover rounded-lg overflow-hidden text-left group"
                style={{ background: "#ffffff", border: "1px solid #E5E7EB" }}
              >
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-4">
                  <h4
                    className="font-bold text-sm"
                    style={{ color: "#111827", fontFamily: "'Outfit', sans-serif" }}
                  >
                    {p.title}
                  </h4>
                  <p
                    className="text-xs mt-1 font-medium"
                    style={{ color: "#6B7280", fontFamily: "'Outfit', sans-serif" }}
                  >
                    {p.tagline}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
