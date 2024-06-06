import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function BookForm({ onSubmit }) {
  const [titulo, setTitulo] = useState('');
  const [anoPublicacao, setAnoPublicacao] = useState('');

  const handleSubmit = () => {
    onSubmit({ id: Date.now(), titulo, anoPublicacao });
    setTitulo('');
    setAnoPublicacao('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={titulo}
        onChangeText={setTitulo}
      />
      <TextInput
        style={styles.input}
        placeholder="Ano de Publicação"
        value={anoPublicacao}
        onChangeText={setAnoPublicacao}
      />
      <Button title="Cadastrar Livro" onPress={handleSubmit} />
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