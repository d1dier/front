import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Button, Text } from 'react-native';
import UserForm from '../components/UserForm';

export default function UserScreen() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from API
  }, []);

  const addUser = (user) => {
    setUsers([...users, user]);
    // Send POST request to API to save user
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item.nome}</Text>}
      />
      <UserForm onSubmit={addUser} />
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