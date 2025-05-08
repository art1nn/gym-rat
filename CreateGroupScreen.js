import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function CreateGroupScreen({ navigation }) {
  const handleCreateGroup = () => {
    navigation.navigate('GroupSettingsScreen'); // Redireciona para a tela de configurações do grupo
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Grupo</Text>
      <Pressable style={styles.createBox} onPress={handleCreateGroup}>
        <Icon name="add" size={50} color="#1E90FF" />
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
  createBox: {
    width: 150,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
  },
  returnButton: {
    position: 'absolute',
    bottom: 60,
    width: '80%',
    height: 40,
    borderWidth: 2,
    borderColor: '#1E90FF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  returnButtonText: {
    color: '#1E90FF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});