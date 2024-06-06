import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, Picker, Button, DatePickerAndroid } from 'react-native';
import LoanForm from '../components/LoanForm';

export default function LoanScreen() {
  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    // Fetch users, books, and loans from API
  }, []);

  const addLoan = (loan) => {
    setLoans([...loans, loan]);
    // Send POST request to API to save loan
  };

  return (
    <View style={styles.container}>
      <LoanForm users={users} books={books} onSubmit={addLoan} />
      <FlatList
        data={loans}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item.idLivro} - {item.idUsuario}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#333',
  },
  item: {
    color: '#fff',
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#444',
  },
});