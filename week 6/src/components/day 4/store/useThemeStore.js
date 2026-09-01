// src/store/useThemeStore.js
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useThemeStore = create(
  persist(
    (set) => ({
      theme: 'light',
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light'
        })),
      setTheme: (newTheme) => set({ theme: newTheme }),
      resetTheme: () => set({ theme: 'light' })
    }),
    {
      name: 'theme-storage'
    }
  )
)

export default useThemeStore