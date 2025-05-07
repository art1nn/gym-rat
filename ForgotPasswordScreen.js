import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Image } from 'react-native';

export default function ForgotPasswordScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/images/star.png')} style={styles.logo} />
      <Text style={styles.title}>Recuperar Senha</Text>
      <TextInput style={styles.input} placeholder="Digite seu email" placeholderTextColor="#aaa" />
      <Pressable
        style={styles.button}
        onPress={() => {
          alert('Um link de recuperação foi enviado para o seu email!');
          navigation.navigate('Login'); // Redireciona para a tela de login
        }}
      >
        <Text style={styles.buttonText}>Enviar</Text>
      </Pressable>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.link}>Voltar para Login</Text>
      </Pressable>
    </View>
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
  link: {
    color: '#1E90FF',
    fontSize: 12,
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});