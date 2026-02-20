# Firestore schema (Cortisol Bank)

## Collections

### `users/{userId}`
- `email` (string)
- `displayName` (string)
- `createdAt` (timestamp)

### `users/{userId}/entries/{entryId}`
- `userId` (string)
- `cortisolWindow` (enum: `morning | midday | evening | night`)
- `moodScore` (number, 1-5)
- `stressScore` (number, 1-5)
- `notes` (string, optional)
- `createdAt` (timestamp)

## Suggested indexes
1. Collection group: `entries`
   - fields: `userId` ascending, `createdAt` descending
