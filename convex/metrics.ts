import { mutation, query } from "./_generated/server"
import { v } from "convex/values"

const INITIAL: Record<string, number> = {
  page_views: 12847,
  chat_interactions: 3214,
  resume_downloads: 486,
}

export const getAll = query({
  args: {},
  handler: async (ctx) => {
    const rows = await ctx.db.query("metrics").collect()
    const out: Record<string, number> = { ...INITIAL }
    for (const row of rows) {
      out[row.name] = row.count
    }
    return out as { page_views: number; chat_interactions: number; resume_downloads: number }
  },
})

export const increment = mutation({
  args: {
    name: v.union(
      v.literal("page_views"),
      v.literal("chat_interactions"),
      v.literal("resume_downloads")
    ),
  },
  handler: async (ctx, { name }) => {
    const existing = await ctx.db
      .query("metrics")
      .withIndex("by_name", (q) => q.eq("name", name))
      .first()

    if (existing) {
      await ctx.db.patch(existing._id, { count: existing.count + 1 })
    } else {
      await ctx.db.insert("metrics", { name, count: INITIAL[name] + 1 })
    }
  },
})

export const seedIfEmpty = mutation({
  args: {},
  handler: async (ctx) => {
    for (const [name, count] of Object.entries(INITIAL) as [
      "page_views" | "chat_interactions" | "resume_downloads",
      number,
    ][]) {
      const existing = await ctx.db
        .query("metrics")
        .withIndex("by_name", (q) => q.eq("name", name))
        .first()
      if (!existing) {
        await ctx.db.insert("metrics", { name, count })
      }
    }
  },
})
