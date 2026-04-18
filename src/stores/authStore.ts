import { create } from 'zustand';
import type { User } from '@/types';
import { AUTH_CREDENTIALS } from '@/constants/config';

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  checkAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: !!localStorage.getItem('ridz-auth'),
  user: localStorage.getItem('ridz-auth')
    ? { email: AUTH_CREDENTIALS.email }
    : null,

  login: (email: string, password: string) => {
    if (
      email === AUTH_CREDENTIALS.email &&
      password === AUTH_CREDENTIALS.password
    ) {
      localStorage.setItem('ridz-auth', 'true');
      set({ isAuthenticated: true, user: { email } });
      return true;
    }
    return false;
  },

  logout: () => {
    localStorage.removeItem('ridz-auth');
    set({ isAuthenticated: false, user: null });
  },

  checkAuth: () => {
    const isAuth = !!localStorage.getItem('ridz-auth');
    set({
      isAuthenticated: isAuth,
      user: isAuth ? { email: AUTH_CREDENTIALS.email } : null,
    });
  },
}));
