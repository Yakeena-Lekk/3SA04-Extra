import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import ReportScreen from './components/ReportScreen';

const Stack = createStackNavigator();

export default function App() {

  return (        
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen  name="Home"  component={HomeScreen} />
        <Stack.Screen name="Report" component={ReportScreen} />
      </Stack.Navigator> 
    </NavigationContainer>       
  );
} 

