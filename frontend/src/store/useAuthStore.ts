import {create, type StoreApi, type UseBoundStore} from 'zustand';
import { axiosInstance } from '../lib/axios';
import type { FormData } from '../types/pages/SignUpPage';
import toast from 'react-hot-toast';

export const useAuthStore: UseBoundStore<StoreApi<unknown>> = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIng: false,
  isUpdatingProfile: false,

  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");

      set({authUser: res.data });
    } catch (error) {
      console.log('Error in check auth', error);
      
      set({ authUser: null })
    } finally {
      set({ isCheckingAuth: false })
    }
  },

  signup: async (data: FormData) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ authUser: res.data });
      toast.success("Account created successfully");
    } catch (error) {
      toast.error("Occurred an erro when try to make signup");
      console.error(error);
    } finally {
      set({ isSigningUp: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Error in logout");
      console.error(error);
    }
  },
}));