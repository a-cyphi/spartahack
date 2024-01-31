import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import RoccoScreen from './introScene'; 
import MainScreen from './main';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {

    const handlePress = () => {
      navigation.navigate('Rocco'); // Navigate to the Main screen
    };
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Image source={require('./images/logo.png')}/>
      <Image source={require('./images/tab.png')}/>
      <View style={styles.startButtonContainer}>
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={require('./images/start.png')}
          style={styles.startButton}
        />
      </TouchableOpacity>
        
      </View>
    </View>

  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Rocco" component={RoccoScreen} />
        <Stack.Screen name= "Main" component ={MainScreen}/>
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
  startButtonContainer: {
    position: 'relative',
  },
  startButton: {
    position: 'absolute',
    top: -40, // Adjust this value as per your requirement
    left: '-90%',
    transform: [{ translateX: -50 }], // Adjust this value based on the width of your button
  },
});
