// import { useMutation, useQuery } from "convex/react"
// import { api } from "../../convex/_generated/api"

// export type MetricName = "page_views" | "chat_interactions" | "resume_downloads"

// export const METRIC_DEFAULTS = {
//   page_views: 12847,
//   chat_interactions: 3214,
//   resume_downloads: 486,
// } as const

// export function useMetrics() {
//   const data = useQuery(api.metrics.getAll)
//   const incrementMutation = useMutation(api.metrics.increment)

//   return {
//     pageViews: data?.page_views ?? METRIC_DEFAULTS.page_views,
//     chatInteractions: data?.chat_interactions ?? METRIC_DEFAULTS.chat_interactions,
//     resumeDownloads: data?.resume_downloads ?? METRIC_DEFAULTS.resume_downloads,
//     isLoading: data === undefined,
//     increment: (name: MetricName) => incrementMutation({ name }),
//   }
// }
