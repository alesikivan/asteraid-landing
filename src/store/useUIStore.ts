import { create } from 'zustand'

interface UIState {
  theme: 'dark' | 'light'
  mobileMenuOpen: boolean
  activeFaqItem: string | null
  setTheme: (theme: 'dark' | 'light') => void
  toggleMobileMenu: () => void
  setMobileMenuOpen: (open: boolean) => void
  setActiveFaqItem: (id: string | null) => void
}

export const useUIStore = create<UIState>((set) => ({
  theme: 'dark',
  mobileMenuOpen: false,
  activeFaqItem: null,
  setTheme: (theme) => set({ theme }),
  toggleMobileMenu: () => set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
  setActiveFaqItem: (id) => set({ activeFaqItem: id }),
}))
