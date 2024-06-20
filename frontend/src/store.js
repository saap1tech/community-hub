import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      user: {},
      setIsLoggedIn: (loggedIn) => set({ isLoggedIn: loggedIn }),
      setUser: (user) => set({ user }),
    }),
    {
      name: "auth-storage",
    }
  )
);

export { useStore };
