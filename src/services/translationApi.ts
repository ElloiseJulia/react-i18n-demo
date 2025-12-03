// ============================================
// .NET BACKEND API SERVICE FOR TRANSLATIONS
// ============================================

import type { Translations, LanguageCode } from "../i18n/types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://api.yourdomain.com";

export interface TranslationApiResponse {
  language: LanguageCode;
  translations: Translations;
}

export interface ApiError {
  message: string;
  status: number;
}

/**
 * Fetch translations from .NET backend API
 * @param language - Language code (e.g., "en", "zh")
 * @returns Promise with translations data
 */
export async function fetchTranslationsFromApi(
  language: LanguageCode
): Promise<TranslationApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/translations/${language}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Add authentication token if needed
        // "Authorization": `Bearer ${token}`
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: TranslationApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch translations from API:", error);
    throw error;
  }
}

/**
 * Fetch all available languages from .NET backend
 * @returns Promise with array of language codes
 */
export async function fetchAvailableLanguages(): Promise<LanguageCode[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/translations/languages`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: LanguageCode[] = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch available languages:", error);
    throw error;
  }
}

/**
 * Update user's language preference on .NET backend
 * @param language - Language code to set
 * @param userId - Optional user ID for authenticated users
 * @returns Promise indicating success
 */
export async function updateUserLanguagePreference(
  language: LanguageCode,
  userId?: string
): Promise<void> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/user/language`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add authentication token if needed
        // "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        language,
        userId,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error("Failed to update user language preference:", error);
    throw error;
  }
}

