import React, { useState } from 'react';
import { View, Button, Picker, Text, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker';

export default function LoanForm({ users, books, onSubmit }) {
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedBook, setSelectedBook] = useState('');
  const [date, setDate] = useState(new Date());

  const handleSubmit = () => {
    onSubmit({
      id: Date.now(),
      idLivro: selectedBook,
      idUsuario: selectedUser,
      dataDeEntrega: date,
      entregaReal
    })
  }
}