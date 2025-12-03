import { createContext } from "react";
import type { TranslationContextType } from "./types";

// ============================================
// SHARED TRANSLATION CONTEXT
// ============================================
// This context is shared by both TranslationProvider
// and TranslationProviderWithApi

export const TranslationContext = createContext<TranslationContextType | null>(null);

