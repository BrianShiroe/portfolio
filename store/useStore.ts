import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Language = "en" | "ar";

interface AppState {
  // Localization
  lang: Language;
  setLang: (lang: Language) => void;
  t: (en: string, ar: string) => string;
  
  // System Status
  isLoaded: boolean;
  setLoaded: (status: boolean) => void;
  
  // UI Interactions
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      lang: "en",
      isLoaded: false,
      activeSection: "home",

      setLang: (newLang) => {
        set({ lang: newLang });
        document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = newLang;
      },

      t: (en, ar) => (get().lang === "en" ? en : ar),

      setLoaded: (status) => set({ isLoaded: status }),
      
      setActiveSection: (section) => set({ activeSection: section }),
    }),
    {
      name: 'user-language', // Reuses the existing localStorage key
      partialize: (state) => ({ lang: state.lang }), // Only persist language
    }
  )
);