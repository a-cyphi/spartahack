import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SetTimerScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.imageContainer}>
        {/* Big image to the left */}
        <Image source={require('./path_to_your_image.jpg')} style={styles.image} />
      </View>
      <View style={styles.headerBox}>
        {/* Big header box to the right */}
        <Text style={styles.headerText}>Set Timer</Text>
      </View>
      <View style={styles.countdownContainer}>
        {/* 4-digit adjustable countdown */}
        <Text style={styles.countdownText}>00:00</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {/* Buttons */}
        <TouchableOpacity style={styles.button} onPress={() => console.log('Go to work')}>
          <Text style={styles.buttonText}>Go to work</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={() => console.log('Watch cat')}>
          <Text style={styles.buttonText}>Watch cat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
        <Text style={styles.buttonText}>Go to Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SetTimerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdd692',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  headerBox: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#754f44',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  countdownContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countdownText: {
    fontSize: 48,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  secondaryButton: {
    backgroundColor: 'green',
  },
});
