import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { useAuth } from '../contexts/AuthContext';

type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

export function SignUpScreen({ navigation }: Props) {
  const { signUp } = useAuth();
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignUp = async () => {
    try {
      await signUp(email, password, displayName);
    } catch (error) {
      Alert.alert('Sign-up failed', (error as Error).message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create your account</Text>
      <TextInput
        onChangeText={setDisplayName}
        placeholder="Display Name"
        style={styles.input}
        value={displayName}
      />
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
      <Button title="Sign Up" onPress={onSignUp} />
      <Button title="Back to Sign In" onPress={() => navigation.navigate('SignIn')} />
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
