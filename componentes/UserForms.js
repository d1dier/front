import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function UserForm({ onSubmit }) {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');

  const handleSubmit = () => {
    onSubmit({ id: Date.now(), nome, cpf });
    setNome('');
    setCpf('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
      />
      <Button title="Cadastrar Usuário" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
  },
});