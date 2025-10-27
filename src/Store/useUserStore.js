import { create } from 'zustand'

export const useUserStore = create((set) => ({
    user: { role: 'guest', name: 'Guest User' },
    setRole: (role, name) => set({ user: { role, name } }),
    logout: () => set({ user: { role: 'guest', name: 'Guest User' } }),
}))
