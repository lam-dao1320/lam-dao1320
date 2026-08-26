import { useState, useRef, useEffect } from "react"
import { MessageCircle, Plus } from "lucide-react"
// import { useMutation } from "convex/react"
// import { api } from "../../convex/_generated/api"
import { chatKB, profile } from "../../backend/data/portfolio"

interface Message {
  id: number
  role: "user" | "assistant"
  text: string
  time: string
}

function getResponse(input: string): string {
  const lower = input.toLowerCase()
  for (const entry of chatKB) {
    if (entry.keywords.some((kw) => lower.includes(kw))) {
      return entry.response
    }
  }
  return "I can answer questions about Lam's skills, projects, work experience, education, or how to get in touch. What would you like to know?"
}

function fmt(date: Date) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
}

function renderText(text: string) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} style={{ color: "#1D4ED8" }}>
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  )
}

const SUGGESTED = [
  "What tech stack does Lam use?",
  "Tell me about the projects",
  "Work experience?",
  "How to contact Lam?",
]

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: "assistant",
      text: `Hi! I'm Lam's AI assistant 👋 Ask me anything about ${profile.name} — skills, projects, experience, or how to get in touch.`,
      time: fmt(new Date()),
    },
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, loading])

  const send = (text: string = input.trim()) => {
    if (!text || loading) return
    setMessages((m) => [
      ...m,
      { id: Date.now(), role: "user", text, time: fmt(new Date()) },
    ])
    setInput("")
    setLoading(true)
    setTimeout(
      () => {
        setMessages((m) => [
          ...m,
          {
            id: Date.now() + 1,
            role: "assistant",
            text: getResponse(text),
            time: fmt(new Date()),
          },
        ])
        setLoading(false)
      },
      900 + Math.random() * 600,
    )
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-lg flex items-center justify-center transition-all duration-200"
        style={{
          background: open ? "#EFF6FF" : "#0362ff",
          border: open ? "2px solid #3B82F6" : "none",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
        }}
        aria-label={open ? "Close chat" : "Open AI chat"}
      >
        {open ? (
          // <span
          //   className="text-2xl font-light leading-none"
          //   style={{ color: "#3B82F6" }}
          // >
          //   +
          // </span>
          <Plus className="text-[#3B82F6]" size={24}/>
        ) : (
          <MessageCircle className="text-white" size={24} />
        )}
      </button>

      {/* Unread indicator */}
      {!open && (
        <div
          className="fixed bottom-5 right-5 z-50 w-3 h-3 rounded-full pointer-events-none"
          style={{ background: "#10B981", border: "2px solid #ffffff" }}
        />
      )}

      {/* Chat panel */}
      <div
        className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 flex flex-col rounded-lg overflow-hidden"
        style={{
          background: "#ffffff",
          border: "1px solid #E5E7EB",
          maxHeight: "520px",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transform: open
            ? "translateY(0) scale(1)"
            : "translateY(10px) scale(0.97)",
          transformOrigin: "bottom right",
          transition: "opacity 0.2s ease, transform 0.2s ease",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center gap-3 px-5 py-4"
          style={{ borderBottom: "1px solid #E5E7EB" }}
        >
          <div className="relative">
            <div
              className="w-9 h-9 rounded-md flex items-center justify-center font-black text-sm"
              style={{
                background: "#3B82F6",
                color: "#ffffff",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              LD
            </div>
            <div
              className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full"
              style={{ background: "#10B981", border: "2px solid #ffffff" }}
            />
          </div>
          <div>
            <p
              className="font-bold text-sm"
              style={{ color: "#111827", fontFamily: "'Outfit', sans-serif" }}
            >
              Lam's AI Assistant
            </p>
            <p
              className="text-xs font-semibold"
              style={{ color: "#10B981", fontFamily: "'Outfit', sans-serif" }}
            >
              ● Online · RAG-powered
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="ml-auto p-1.5 rounded-md transition-colors duration-200"
            style={{ color: "#9CA3AF" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#111827")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#9CA3AF")
            }
          >
            ✕
          </button>
        </div>

        {/* Messages */}
        <div
          className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3"
          style={{ minHeight: 0, background: "#F9FAFB" }}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col gap-1 ${
                msg.role === "user" ? "items-end" : "items-start"
              }`}
            >
              <div
                className="max-w-[85%] rounded-lg px-4 py-2.5 text-sm leading-relaxed"
                style={
                  msg.role === "user"
                    ? {
                        background: "#3B82F6",
                        color: "#ffffff",
                        fontFamily: "'Outfit', sans-serif",
                      }
                    : {
                        background: "#ffffff",
                        border: "1px solid #E5E7EB",
                        color: "#374151",
                        fontFamily: "'Outfit', sans-serif",
                      }
                }
              >
                {renderText(msg.text)}
              </div>
              <span
                className="text-xs font-medium"
                style={{ color: "#9CA3AF", fontFamily: "'Outfit', sans-serif" }}
              >
                {msg.time}
              </span>
            </div>
          ))}

          {loading && (
            <div className="flex items-start">
              <div
                className="px-4 py-3 rounded-lg flex items-center gap-1.5"
                style={{ background: "#ffffff", border: "1px solid #E5E7EB" }}
              >
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: "#3B82F6",
                      animation: `blink-cursor 1s ease-in-out ${i * 200}ms infinite`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Suggestions */}
        {messages.length === 1 && (
          <div
            className="px-4 pb-2 pt-1 flex flex-wrap gap-1.5"
            style={{ background: "#F9FAFB" }}
          >
            {SUGGESTED.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="text-xs font-semibold px-2.5 py-1 rounded-md transition-all duration-200"
                style={{
                  background: "#DBEAFE",
                  color: "#1D4ED8",
                  fontFamily: "'Outfit', sans-serif",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "#BFDBFE")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "#DBEAFE")
                }
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{ borderTop: "1px solid #E5E7EB", background: "#ffffff" }}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Ask me anything..."
            className="flex-1 bg-transparent text-sm outline-none font-medium"
            style={{ color: "#111827", fontFamily: "'Outfit', sans-serif" }}
          />
          <button
            onClick={() => send()}
            disabled={!input.trim() || loading}
            className="w-8 h-8 rounded-md flex items-center justify-center transition-all duration-200 shrink-0"
            style={{
              background: input.trim() && !loading ? "#3B82F6" : "#F3F4F6",
              transform: input.trim() && !loading ? "scale(1)" : "scale(0.95)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 7h12M7 1l6 6-6 6"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
