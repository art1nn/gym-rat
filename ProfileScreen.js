import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable, Alert } from 'react-native';

export default function ProfileScreen({ navigation }) {
  const [userName, setUserName] = useState('Usuário'); // Nome inicial do usuário
  const [userImage, setUserImage] = useState(require('./assets/images/Perfil.png')); // Imagem inicial do usuário

  const handleChangeName = () => {
    Alert.alert(
      'Alterar Nome',
      'Funcionalidade de troca de nome ainda não implementada.'
    );
  };

  const handleChangeImage = () => {
    Alert.alert('Alterar Imagem', 'Funcionalidade de troca de imagem ainda não implementada.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Image source={userImage} style={styles.profileImage} />
      <Text style={styles.userName}>{userName}</Text>

      <Pressable style={styles.button} onPress={handleChangeName}>
        <Text style={styles.buttonText}>Alterar Nome</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={handleChangeImage}>
        <Text style={styles.buttonText}>Alterar Imagem</Text>
      </Pressable>

      <Pressable style={styles.returnButton} onPress={() => navigation.navigate('Lobby')}>
        <Text style={styles.returnButtonText}>Voltar para Lobby</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E90FF',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
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
  returnButton: {
    width: '80%',
    height: 40,
    borderWidth: 2,
    borderColor: '#1E90FF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  returnButtonText: {
    color: '#1E90FF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});