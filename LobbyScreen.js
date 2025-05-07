import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importando ícones

export default function LobbyScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Título no topo com linha arredondada */}
      <View style={styles.header}>
        <Text style={styles.title}>Lobby</Text>
        <View style={styles.roundedLine} />
      </View>

      {/* Navbar */}
      <View style={styles.navbar}>
        <Pressable style={styles.navItem} onPress={() => alert('Gerenciar Grupos')}>
          <Icon name="people-outline" size={24} color="#1E90FF" />
          <Text style={styles.navText}>Grupos</Text>
        </Pressable>

        <Pressable style={styles.navItem} onPress={() => alert('Perfil')}>
          <Icon name="person-outline" size={24} color="#1E90FF" />
          <Text style={styles.navText}>Perfil</Text>
        </Pressable>

        <Pressable style={styles.navItem} onPress={() => alert('Criar uma Sala')}>
          <Icon name="add-circle-outline" size={24} color="#32CD32" />
          <Text style={styles.navText}>Criar Sala</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'flex-start', // Alinha os itens no topo
    padding: 60,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20, // Espaçamento entre o título e o restante da página
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E90FF',
    marginBottom: 10, // Espaçamento entre o título e a linha arredondada
  },
  roundedLine: {
    width: '120%',
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 5, // Torna a linha arredondada
  },
  navbar: {
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 80,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#1E90FF',
    marginTop: 5,
  },
});