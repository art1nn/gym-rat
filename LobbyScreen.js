import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importando ícones

export default function LobbyScreen({ navigation }) {
  const userName = 'Usuário'; // Nome do usuário (pode ser dinâmico)
  const userGroups = 2; // Quantidade de grupos (pode ser dinâmico)

  return (
    <View style={styles.container}>
      {/* Título no topo com linha arredondada */}
      <View style={styles.header}>
        <Text style={styles.title}>Lobby</Text>
        <View style={styles.roundedLine} />
      </View>

      {/* Interface do usuário */}
      <View style={styles.userInfo}>
        <Image source={require('./assets/images/Perfil.png')} style={styles.logo} />
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.userGroups}>Grupos: {userGroups}</Text>
      </View>

      {/* Navbar */}
      <View style={styles.navbar}>
        <Pressable style={styles.navItem} onPress={() => navigation.navigate('ProfileScreen')}>
          <Icon name="person-outline" size={24} color="#1E90FF" />
          <Text style={styles.navText}>Perfil</Text>
        </Pressable>
        
        <Pressable style={styles.navItem} onPress={() => navigation.navigate('CreateGroupScreen')}>
          <Icon name="add-circle-outline" size={24} color="#32CD32" />
          <Text style={styles.navText}>Criar Grupo</Text>
        </Pressable>

        <Pressable style={styles.navItem} onPress={() => navigation.navigate('ManageGroupsScreen')}>
          <Icon name="people-outline" size={24} color="#1E90FF" />
          <Text style={styles.navText}>Grupos</Text>
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
    justifyContent: 'flex-start',
    padding: 60,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E90FF',
    marginBottom: 10,
  },
  roundedLine: {
    width: '120%',
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  userInfo: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  userGroups: {
    fontSize: 16,
    color: '#666',
  },
  navbar: {
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '150%',
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