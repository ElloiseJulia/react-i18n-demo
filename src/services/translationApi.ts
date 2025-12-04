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

export async function fetchTranslationsFromApi(
  language: LanguageCode
): Promise<TranslationApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/translations/${language}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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

export async function updateUserLanguagePreference(
  language: LanguageCode,
  userId?: string
): Promise<void> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/user/language`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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


