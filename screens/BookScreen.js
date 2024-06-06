import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Button, Text } from 'react-native';
import BookForm from '../components/BookForm';

export default function BookScreen() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from API
  }, []);

  const addBook = (book) => {
    setBooks([...books, book]);
    // Send POST request to API to save book
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item.titulo}</Text>}
      />
      <BookForm onSubmit={addBook} />
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