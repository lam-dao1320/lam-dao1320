/* eslint-disable */
/**
 * Generated `api` utility types.
 * Regenerate with: npx convex dev
 */
import type { ApiFromModules, FilterApi, FunctionReference } from "convex/server"
import type * as metrics from "../metrics.js"

declare const fullApi: ApiFromModules<{
  metrics: typeof metrics
}>

export type Api = typeof fullApi

export declare const api: Api

export declare const internal: FilterApi<Api, FunctionReference<any, "internal">>
