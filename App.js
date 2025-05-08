import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, Image, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LobbyScreen from './LobbyScreen';
import RegisterScreen from './RegisterScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import ProfileScreen from './ProfileScreen';
import CreateGroupScreen from './CreateGroupScreen'; // Import da tela de criação de grupo
import GroupSettingsScreen from './GroupSettingsScreen'; // Import da tela de configurações do grupo
import ManageGroupsScreen from './ManageGroupsScreen'; // Import da tela de gerenciamento de grupos

const Stack = createStackNavigator();

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    navigation.navigate('Lobby');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/images/star.png')} style={styles.logo} />
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>
      <Pressable style={styles.buttonSecondary} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonSecondaryText}>Cadastrar-se</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.link}>Esqueceu sua senha?</Text>
      </Pressable>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Lobby" component={LobbyScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="CreateGroupScreen" component={CreateGroupScreen} />
        <Stack.Screen name="GroupSettingsScreen" component={GroupSettingsScreen} />
        <Stack.Screen name="ManageGroupsScreen" component={ManageGroupsScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 300,
    height: 250,
    marginBottom: 35,
  },
  title: {
    fontSize: 28,
    color: 'blue',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 5,
    marginBottom: 10,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#1E90FF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonSecondary: {
    width: '80%',
    height: 40,
    borderWidth: 2,
    borderColor: '#1E90FF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonSecondaryText: {
    color: '#1E90FF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    color: '#1E90FF',
    fontSize: 12,
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});