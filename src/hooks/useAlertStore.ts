import { create } from "zustand";

interface AlertState {
    isOpen: boolean;
    closeMenu: () => void;
    toggleMenu: () => void;
    title: string;
    description: string;
    setAlert: (title: string, description: string, alertType: string) => void;
    alertType?: "success" | "warning";
}

export const useAlertStore = create<AlertState>((set) => ({
    isOpen: false,
    closeMenu: () => set({ isOpen: false }),
    toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
    title: "",
    description: "",
    setAlert: (title: string, description: string, alertType: string) => set({ title, description, isOpen: true, alertType: alertType as "success" | "warning" }),
}));
