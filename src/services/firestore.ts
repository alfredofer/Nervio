import { addDoc, collection, doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';

import { db } from '../firebase/config';
import { CortisolEntry, UserProfile } from '../types/firestore';

export async function upsertUserProfile(profile: Omit<UserProfile, 'createdAt'>) {
  const profileRef = doc(db, 'users', profile.id);
  const existing = await getDoc(profileRef);

  await setDoc(
    profileRef,
    {
      ...profile,
      createdAt: existing.exists() ? existing.data().createdAt : serverTimestamp(),
    },
    { merge: true },
  );
}

export async function createCortisolEntry(
  entry: Omit<CortisolEntry, 'id' | 'createdAt'>,
) {
  await addDoc(collection(db, 'users', entry.userId, 'entries'), {
    ...entry,
    createdAt: serverTimestamp(),
  });
}
