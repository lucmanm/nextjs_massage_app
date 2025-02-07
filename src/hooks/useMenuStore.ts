import { create } from "zustand";

interface MenuState {
    isOpen: boolean;
    closeMenu: () => void;
    toggleMenu: () => void;
}

export const useMenuStore = create<MenuState>((set) => ({
    isOpen: false,
    closeMenu: () => set({ isOpen: false }),
    toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
}));
