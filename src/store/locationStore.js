import create from "vue-zustand";

export const useLocationStore = create((set, get) => ({
  adults: 0,
  children: 0,
  location: "",
  setState: (value) =>
    set(() => ({
      location: value.location,
      adults: value.adults,
      children: value.children,
    })),
  getGuests: () => {
    return get().adults + get().children
  },
}));

export default useLocationStore;
