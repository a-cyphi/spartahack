import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import RoccoScreen from './introScene'; 
import MainScreen from './in-game-screen';
import "./App.css";
import {Auth} from "./components/auth";

function App(){
  return(
      <div className="App">
          <Auth/>

          
      </div>
  );
}


const Stack = createStackNavigator();

function HomeScreen({ navigation }) {

    const handlePress = () => {
      navigation.navigate('Rocco'); // Navigate to the Main screen
    };
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <View style={styles.logoContainer}>
        <Image source={require('./images/logo.png')}/>
      </View>
      <View style={styles.catContainer}>
        <Image source={require('./images/tab.png')}/>
      </View>
      <View style={styles.startButtonContainer}>
      <TouchableOpacity onPress={handlePress}>
        <Image
          style={styles.startButton}
          source={require('./images/start.png')}
          
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
  logoContainer: {
    top: 30,
    right: 10,
    position: 'relative',
    alignItems: 'center',
  },
  catContainer: {
    position: 'relative',
    margin: -100,
    alignItems: 'center',
  },
  startButtonContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  startButton: {
    top: 40, 
    left: 50,
    transform: [{ translateX: -50 }],
  }
});
