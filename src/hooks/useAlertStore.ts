import { create } from "zustand";

interface AlertState {
    isOpen: boolean;
    closeMenu: () => void;
    toggleMenu: () => void;
    title: string;
    description: string;
    setAlert: (title: string, description: string) => void;
}

export const useAlertStore = create<AlertState>((set) => ({
    isOpen: false,
    closeMenu: () => set({ isOpen: false }),
    toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
    title: "",
    description: "",
    setAlert: (title: string, description: string) => set({ title, description, isOpen: true }),
}));
