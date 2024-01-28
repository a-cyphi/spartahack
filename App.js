import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RoccoScreen from './rocco'; // Replace './Rocco' with the actual path to your Rocco.js file

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Image source={require('./images/tabbi.png')}/>
      
      <Button
        title="Go to Rocco"
        onPress={() => navigation.navigate('Rocco')}
      />
      
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
    backgroundColor: '#fdd692',
    alignItems: 'center',
    justifyContent: 'center',
  },
});