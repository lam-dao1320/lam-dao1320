/* eslint-disable */
/**
 * Generated server-side builders.
 * Regenerate with: npx convex dev
 */
import type {
  GenericMutationCtx,
  GenericQueryCtx,
  GenericActionCtx,
  MutationBuilder,
  QueryBuilder,
} from "convex/server"
import type { DataModel } from "./dataModel.js"

export type MutationCtx = GenericMutationCtx<DataModel>
export type QueryCtx = GenericQueryCtx<DataModel>
export type ActionCtx = GenericActionCtx<DataModel>

export declare const query: QueryBuilder<DataModel, "public">
export declare const mutation: MutationBuilder<DataModel, "public">
export declare const internalQuery: QueryBuilder<DataModel, "internal">
export declare const internalMutation: MutationBuilder<DataModel, "internal">
