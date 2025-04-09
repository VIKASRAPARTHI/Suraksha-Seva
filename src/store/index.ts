import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  user: any;
  badges: string[];
  certificates: string[];
  courseProgress: Record<string, number>;
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  addBadge: (badge: string) => void;
  addCertificate: (certificate: string) => void;
  updateCourseProgress: (courseId: string, progress: number) => void;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  type: 'product' | 'course' | 'event';
}

const useStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      badges: [],
      certificates: [],
      courseProgress: {},
      cart: [],
      addToCart: (item) =>
        set((state) => ({
          cart: [...state.cart, item],
        })),
      removeFromCart: (itemId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== itemId),
        })),
      clearCart: () => set({ cart: [] }),
      addBadge: (badge) =>
        set((state) => ({
          badges: [...state.badges, badge],
        })),
      addCertificate: (certificate) =>
        set((state) => ({
          certificates: [...state.certificates, certificate],
        })),
      updateCourseProgress: (courseId, progress) =>
        set((state) => ({
          courseProgress: {
            ...state.courseProgress,
            [courseId]: progress,
          },
        })),
    }),
    {
      name: 'user-storage',
    }
  )
);

export default useStore;