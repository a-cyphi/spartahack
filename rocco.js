import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RoccoScreen = () => {
  const [showChatBubble2, setShowChatBubble2] = useState(false);
  const [showChatBubble3, setShowChatBubble3] = useState(false);
  const [showChatBubble4, setShowChatBubble4] = useState(false);

  const handleNextChatBubble = () => {
    if (!showChatBubble2) {
      setShowChatBubble2(true);
    } else if (!showChatBubble3) {
      setShowChatBubble3(true);
    } else if (!showChatBubble4) {
      setShowChatBubble4(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Rocco</Text>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.chatBubble1}>
          <View style={styles.nameWrapper}>
            <Text style={[styles.name, styles.text]}>Rocco:</Text>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={[styles.content, styles.text]}>Hey! You! Yes, you! Are you just going to stand by and watch that adorable tabby cat starve?</Text>
          </View>
        </View>
        {showChatBubble2 && (
          <View style={styles.chatBubble2}>
            <View style={styles.nameWrapper}>
              <Text style={[styles.name, styles.text]}>You:</Text>
            </View>
            <View style={styles.contentWrapper}>
              <Text style={[styles.content, styles.text]}>No...</Text>
            </View>
          </View>
        )}
        {showChatBubble3 && (
          <View style={styles.chatBubble3}>
            <View style={styles.nameWrapper}>
              <Text style={[styles.name, styles.text]}>Rocco:</Text>
            </View>
            <View style={styles.contentWrapper}>
              <Text style={[styles.content, styles.text]}>You think you can just waltz in and snag that cat? Not so fast. We ain't giving away freebies. You gotta prove you can handle it. Show us you're not just another stray yourself. Got cash? Got experience keeping critters alive? Then maybe we'll talk about you giving this furball a shot at a better life. Until then, keep your paws off unless you're serious.</Text>
            </View>
          </View>
        )}
        {showChatBubble4 && (
          <View style={styles.chatBubble4}>
            <View style={styles.nameWrapper}>
              <Text style={[styles.name, styles.text]}>You:</Text>
            </View>
            <View style={styles.contentWrapper}>
              <Text style={[styles.content, styles.text]}>I'm serious.</Text>
            </View>
          </View>
        )}
        <TouchableOpacity style={styles.nextButton} onPress={handleNextChatBubble}>
          <Ionicons name="arrow-forward-circle" size={40} color="beige" />
        </TouchableOpacity>
      </ScrollView>
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
    backgroundColor: '#754f44', // Slightly darker brown color
    borderRadius: 10,
    marginBottom: 10,
    width: '80%',
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 50,
  },
  chatBubble2: {
    backgroundColor: '#754f44', // Slightly darker brown color
    borderRadius: 10,
    marginBottom: 10,
    width: '80%',
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 50,
  },
  chatBubble3: {
    backgroundColor: '#754f44', // Slightly darker brown color
    borderRadius: 10,
    marginBottom: 10,
    width: '80%',
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 50,
  },
  chatBubble4: {
    backgroundColor: '#754f44', // Slightly darker brown color
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
    color: 'white', // Set text color to white
    fontFamily: 'monospace', // Set font family to monospace
  },
  contentWrapper: {
    alignItems: 'center',
  },
  content: {
    textAlign: 'center',
    color: 'white', // Set text color to white
    fontFamily: 'monospace', // Set font family to monospace
  },
  nextButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  text: {
    fontSize: 20, // Adjusted font size to make it bigger
  },
  contentContainer: {
    flexGrow: 1, // Ensures that content can scroll if it exceeds the screen height
  },
});

export default RoccoScreen;
