import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

// Creamos el store para nuestro theme con pesistencia incluida
export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      // Estado inicial basado en la preferencia del sistema del usuario
      theme:
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",

      // Funcion para establecer el tema directamente
      setTheme: (theme: Theme) =>
        set(() => {
          document.documentElement.classList.remove("light", "dark");
          document.documentElement.classList.add(theme);
          document.documentElement.setAttribute("data-theme", theme);
          return { theme };
        }),

      // Funcion para alternar entre temas
      toggleTheme: () =>
        set((state) => {
          const newTheme = state.theme === "light" ? "dark" : "light";
          document.documentElement.classList.remove("light", "dark");
          document.documentElement.classList.add(newTheme);
          document.documentElement.setAttribute("data-theme", newTheme);
          return { theme: newTheme };
        }),
    }),
    {
      name: "theme-storage", // Nombre de los datos en localStorage
    }
  )
);
