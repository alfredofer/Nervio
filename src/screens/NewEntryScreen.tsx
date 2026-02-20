import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { useAuth } from '../contexts/AuthContext';
import { createCortisolEntry } from '../services/firestore';
import { CortisolWindow } from '../types/firestore';

const windows: CortisolWindow[] = ['morning', 'midday', 'evening', 'night'];

export function NewEntryScreen() {
  const { user } = useAuth();
  const [cortisolWindow, setCortisolWindow] = useState<CortisolWindow>('morning');
  const [moodScore, setMoodScore] = useState('3');
  const [stressScore, setStressScore] = useState('3');
  const [notes, setNotes] = useState('');

  const onSave = async () => {
    if (!user) {
      return;
    }

    try {
      await createCortisolEntry({
        userId: user.uid,
        cortisolWindow,
        moodScore: Number(moodScore),
        stressScore: Number(stressScore),
        notes,
      });
      Alert.alert('Saved', 'Your cortisol entry was stored in Firestore.');
    } catch (error) {
      Alert.alert('Unable to save entry', (error as Error).message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Time window</Text>
      <View style={styles.row}>
        {windows.map((window) => (
          <Button
            key={window}
            onPress={() => setCortisolWindow(window)}
            title={window === cortisolWindow ? `✓ ${window}` : window}
          />
        ))}
      </View>

      <Text style={styles.label}>Mood score (1-5)</Text>
      <TextInput keyboardType="numeric" onChangeText={setMoodScore} style={styles.input} value={moodScore} />

      <Text style={styles.label}>Stress score (1-5)</Text>
      <TextInput keyboardType="numeric" onChangeText={setStressScore} style={styles.input} value={stressScore} />

      <Text style={styles.label}>Notes</Text>
      <TextInput
        multiline
        numberOfLines={4}
        onChangeText={setNotes}
        style={[styles.input, styles.notes]}
        value={notes}
      />

      <Button title="Save entry" onPress={onSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    padding: 20,
  },
  input: {
    borderColor: '#cbd5e1',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  label: {
    color: '#334155',
    fontSize: 15,
    fontWeight: '600',
  },
  notes: {
    textAlignVertical: 'top',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
});
