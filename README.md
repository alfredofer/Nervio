# Cortisol Bank (Expo + Firebase)

Scaffolded mobile app for tracking cortisol-adjacent stress snapshots during the day.

## Stack
- Expo + React Native + TypeScript
- Firebase Auth (email/password)
- Cloud Firestore (`users` and nested `entries` documents)

## Quick start
1. Install dependencies:
   ```bash
   npm install
   ```
2. Add Firebase values to `.env`:
   ```bash
   EXPO_PUBLIC_FIREBASE_API_KEY=
   EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=
   EXPO_PUBLIC_FIREBASE_PROJECT_ID=
   EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=
   EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
   EXPO_PUBLIC_FIREBASE_APP_ID=
   ```
3. Start the app:
   ```bash
   npm run start
   ```

## Current screens
- Sign In
- Sign Up
- Dashboard
- New Entry

## Firestore rules + schema
- Rules file: `firestore.rules`
- Schema doc: `docs/firestore-schema.md`
