import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export default defineSchema({
  metrics: defineTable({
    name: v.union(
      v.literal("page_views"),
      v.literal("chat_interactions"),
      v.literal("resume_downloads")
    ),
    count: v.number(),
  }).index("by_name", ["name"]),
})
