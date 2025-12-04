import { createContext } from "react";
import type { TranslationContextType } from "./types";

export const TranslationContext = createContext<TranslationContextType | null>(null);


