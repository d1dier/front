import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen.Js';
import BookScreen from './screens/BookScreen';
import LoanScreen from './screens/LoanScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Artes Escritas' }} />
        <Stack.Screen name="Users" component={UserScreen} options={{ title: 'Cadastro de Usuários' }} />
        <Stack.Screen name="Books" component={BookScreen} options={{ title: 'Cadastro de Livros' }} />
        <Stack.Screen name="Loans" component={LoanScreen} options={{ title: 'Empréstimos de Livros' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}