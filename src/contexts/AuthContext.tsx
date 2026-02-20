import {
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { auth } from '../firebase/config';
import { signIn, signUp, logOut } from '../services/auth';
import { upsertUserProfile } from '../services/firestore';

type AuthContextValue = {
  initializing: boolean;
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, displayName: string) => Promise<void>;
  logOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    return onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setInitializing(false);
    });
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      initializing,
      user,
      signIn: async (email: string, password: string) => {
        await signIn(email, password);
      },
      signUp: async (email: string, password: string, displayName: string) => {
        const newUser = await signUp(email, password, displayName);
        await upsertUserProfile({
          id: newUser.uid,
          email: newUser.email ?? email,
          displayName,
        });
      },
      logOut,
    }),
    [initializing, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return ctx;
}
