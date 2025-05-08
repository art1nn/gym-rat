import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';

export default function GroupSettingsScreen({ navigation }) {
  const [groupName, setGroupName] = useState('');
  const [groupSize, setGroupSize] = useState('');
  const [groupDuration, setGroupDuration] = useState('');
  const [groupTheme, setGroupTheme] = useState('');

  const handleSaveGroup = () => {
    if (!groupName || !groupSize || !groupDuration || !groupTheme) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    Alert.alert('Grupo Criado', `Grupo "${groupName}" criado com sucesso!`);
    navigation.navigate('Lobby'); // Redireciona para o Lobby após salvar
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações do Grupo</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Grupo"
        value={groupName}
        onChangeText={setGroupName}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade de Pessoas (1-16)"
        keyboardType="numeric"
        value={groupSize}
        onChangeText={setGroupSize}
      />
      <TextInput
        style={styles.input}
        placeholder="Tempo de Duração (em dias)"
        keyboardType="numeric"
        value={groupDuration}
        onChangeText={setGroupDuration}
      />
      <TextInput
        style={styles.input}
        placeholder="Tema do Grupo"
        value={groupTheme}
        onChangeText={setGroupTheme}
      />
      <Pressable style={styles.button} onPress={handleSaveGroup}>
        <Text style={styles.buttonText}>Salvar Grupo</Text>
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
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    position: 'absolute',
    bottom: 80, // Posiciona o botão na parte inferior
    width: '80%',
    height: 40,
    backgroundColor: '#1E90FF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});