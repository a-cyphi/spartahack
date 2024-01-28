import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RoccoScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Rocco</Text>
      </View>
      <View style={styles.chatBubble1}>
        <View style={styles.nameWrapper}>
          <Text style={[styles.name, styles.text]}>Rocco:</Text>
        </View>
        <View style={styles.contentWrapper}>
          <Text style={[styles.content, styles.text]}>Hey! You! Yes, you! Are you just going to stand by and watch that adorable tabby cat starve?</Text>
        </View>
      </View>
      <View style={styles.chatBubble2}>
        <View style={styles.nameWrapper}>
          <Text style={[styles.name, styles.text]}>You:</Text>
        </View>
        <View style={styles.contentWrapper}>
          <Text style={[styles.content, styles.text]}>No...</Text>
        </View>
      </View>
      {/* Add cat images and more chat bubbles here */}
      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}>START</Text>
      </TouchableOpacity>
      {/* Add the illustration of the 'cute cat' and 'confused sleeper' here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fdd692', // Light brown background color
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
  },
  chatBubble1: {
    backgroundColor: '#fbffb9', // Slightly darker brown color
    borderRadius: 10,
    marginBottom: 10,
    width: '80%',
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 50,
  },
  chatBubble2: {
    backgroundColor: '#fbffb9', // Slightly darker brown color
    borderRadius: 10,
    marginBottom: 10,
    width: '80%',
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 50,
  },
  nameWrapper: {
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
  },
  contentWrapper: {
    alignItems: 'center',
  },
  content: {
    textAlign: 'center',
  },
  startButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'green',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  startButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  text: {
    fontSize: 20, // Adjusted font size to make it bigger
  },
});

export default RoccoScreen;
