import React from 'react';
import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RoccoScreen from './rocco.js'; // Replace './Rocco' with the actual path to your Rocco.js file

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Tabbi!</Text>
      <Button
        title="Go to Rocco"
        onPress={() => navigation.navigate('Rocco')}
      />
=======
import { StyleSheet, Text, View,Image } from 'react-native';
import {adaptiveIcon} from './images/tabbi.png'
export default function App() {
  return (
    <View style={styles.container}>
>>>>>>> 9ee3d04e393f600365fef3ae6261f8a942bbff00
      <StatusBar style="auto" />
      <Image source={require('./images/tabbi.png')} />
    
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Rocco" component={RoccoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
﻿
