import React from "react"
import ReactDOM from "react-dom/client"
import { ConvexProvider, ConvexReactClient } from "convex/react"
import App from "./App"
import "./index.css"

const CONVEX_URL = import.meta.env.VITE_CONVEX_URL as string | undefined

// Create a client. If no URL is configured the app still renders — Convex
// queries return undefined (we show initial fallback numbers) and mutations
// silently fail. Set VITE_CONVEX_URL in .env.local for real-time tracking.
const convex = new ConvexReactClient(
  CONVEX_URL && CONVEX_URL !== "https://agreeable-porcupine-298.convex.cloud/"
    ? CONVEX_URL
    : "https://agreeable-porcupine-298.convex.cloud/"
)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConvexProvider client={convex}>
      <App />
    </ConvexProvider>
  </React.StrictMode>
)
