import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { useAuth } from '../contexts/AuthContext';

type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

export function SignInScreen({ navigation }: Props) {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignIn = async () => {
    try {
      await signIn(email, password);
    } catch (error) {
      Alert.alert('Sign-in failed', (error as Error).message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back</Text>
      <TextInput
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={setEmail}
        placeholder="Email"
        style={styles.input}
        value={email}
      />
      <TextInput
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        value={password}
      />
      <Button title="Sign In" onPress={onSignIn} />
      <Button title="Need an account? Sign Up" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderColor: '#ccc',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
});
