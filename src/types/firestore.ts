export type CortisolWindow = 'morning' | 'midday' | 'evening' | 'night';

export interface UserProfile {
  id: string;
  email: string;
  displayName: string;
  createdAt: string;
}

export interface CortisolEntry {
  id: string;
  userId: string;
  cortisolWindow: CortisolWindow;
  moodScore: number;
  stressScore: number;
  notes?: string;
  createdAt: string;
}
