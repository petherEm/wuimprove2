import { create } from "zustand";

export const useUserStore = create((set) => ({
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  IBAN: "",

  setFirstName: (firstName) => set({ firstName }),
  setLastName: (lastName) => set({ lastName }),
  setEmail: (email) => set({ email }),
  setMobile: (mobile) => set({ mobile }),
  setIBAN: (IBAN) => set({ IBAN }),
}));
