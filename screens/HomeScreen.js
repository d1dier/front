import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Artes Escritas</Text>
      <Button title="Cadastrar Usuários" onPress={() => navigation.navigate('Users')} />
      <Button title="Cadastrar Livros" onPress={() => navigation.navigate('Books')} />
      <Button title="Empréstimos de Livros" onPress={() => navigation.navigate('Loans')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
});