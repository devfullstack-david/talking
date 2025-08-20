import type { FormData } from "../pages/SignUpPage";

export type AuthUser = {
  _id: string;
  fullName: string;
  email: string;
  profilePic?: string;
}

export type UseAuthStore = {
  authUser: AuthUser | null;
  checkAuth: () => void;
  isCheckingAuth: boolean;
  signup: (data: FormData) => void;
  isSigningUp: boolean;
  logout: () => void;
}