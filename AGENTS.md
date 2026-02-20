# AGENTS.md — Nervio (Expo + Firebase)

This file is for AI coding agents (Codex) and humans to quickly understand how to work in this repo.
Keep it short, current, and action-oriented.

---

## Project Overview

**Nervio** is a wellness app built with **Expo (React Native + TypeScript)** and **Firebase**.
Core concept: a “Cortisol Bank” (Calm Credits) ledger that rewards regulation actions (deposits) and applies small withdrawals.

**Core screens (MVP):**
- Home: bank balance, level, soft streak, “one action today”
- Action: guided timer + completion
- Trends: last 7 days summary
- Settings: goals, notifications, cutoff time

---

## Tech Stack

- Expo + React Native + TypeScript
- React Navigation (stack/tabs)
- Firebase Auth
- Firestore
- Cloud Functions (TypeScript)
- (Optional later) FCM push notifications, Analytics, Crashlytics

---

## Repo Structure (adjust paths if yours differ)

- `src/`
  - `screens/` (UI screens)
  - `components/` (reusable UI)
  - `services/` (Firebase, data, domain logic)
  - `domain/` (types, scoring, constants)
  - `navigation/` (nav config)
- `functions/` Firebase Cloud Functions (TypeScript)
- `firebase/` (rules, indexes, config if present)

---

## Setup

### Prereqs
- Node.js LTS
- Expo CLI
- Firebase project created (dev environment)

### Install
```bash
npm install
