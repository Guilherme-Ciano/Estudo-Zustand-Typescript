import create from "zustand";
import { Product } from "../model/product.model";

interface CartState {
  items: Product[];
  addItem: (item: Product) => void;
  removeItem: (item: Product) => void;
  clearAllItems: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  // inittial state
  items: [],

  // methods for manipulating state
  addItem: (item: Product) => {
    set((state) => ({
      items: [
        ...state.items,
        {
          ...item,
        } as Product,
      ],
    }));
  },

  removeItem: (item: Product) => {
    set((state) => ({
      items: state.items.filter((i) => i.id !== item.id),
    }));
  },

  clearAllItems: () => {
    set((state) => ({
      items: [],
    }));
  },
}));
