import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';

export default function ManageGroupsScreen({ navigation }) {
  const groups = [
    {
      id: 1,
      name: 'Saúde',
      theme: 'Cardio',
      members: 10,
      status: 'Ativo',
    },
    {
      id: 2,
      name: 'Faculdade',
      theme: 'Estudo - Java',
      members: 8,
      status: 'Ativo',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Grupos</Text>
      <ScrollView contentContainerStyle={styles.groupList}>
        {groups.map((group) => (
          <View key={group.id} style={styles.groupCard}>
            <Text style={styles.groupName}>{group.name}</Text>
            <Text style={styles.groupTheme}>Tema: {group.theme}</Text>
            <Text style={styles.groupMembers}>Integrantes: {group.members}</Text>
            <Text style={styles.groupStatus}>Status: {group.status}</Text>
          </View>
        ))}
      </ScrollView>
      <Pressable style={styles.returnButton} onPress={() => navigation.navigate('Lobby')}>
        <Text style={styles.returnButtonText}>Voltar para o Lobby</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
    paddingTop: 60,
    
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E90FF',
    marginBottom: 40,
    textAlign: 'center',
  },
  groupList: {
    alignItems: 'center',
  },
  groupCard: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  groupName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  groupTheme: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  groupMembers: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  groupStatus: {
    fontSize: 16,
    color: '#32CD32',
    fontWeight: 'bold',
  },
  returnButton: {
    position: 'absolute',
    bottom: 60,
    width: '90%',
    height: 40,
    backgroundColor: '#1E90FF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  returnButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});