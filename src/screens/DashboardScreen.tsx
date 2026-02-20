import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, View } from 'react-native';

import { useAuth } from '../contexts/AuthContext';

type RootStackParamList = {
  Dashboard: undefined;
  NewEntry: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

export function DashboardScreen({ navigation }: Props) {
  const { user, logOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi {user?.displayName ?? 'there'} 👋</Text>
      <Text style={styles.subtitle}>Track stress + mood snapshots throughout your day.</Text>
      <Button title="Log cortisol entry" onPress={() => navigation.navigate('NewEntry')} />
      <Button title="Sign out" onPress={() => void logOut()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    justifyContent: 'center',
    padding: 20,
  },
  subtitle: {
    color: '#475569',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
});
