/*import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const RoccoScreen = () => {
  const navigation = useNavigation();
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
    } else {
      // Navigate to the Main screen
      navigation.navigate('Main');
    }
  };

  const handleNavigateToMain = () => {
    // Navigate to the Main screen
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleNavigateToMain}>
          <Text style={styles.headerButton}>Next</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Rocco</Text>
      </View>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={true}>
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
      </ScrollView>
      <TouchableOpacity style={styles.nextButton} onPress={handleNextChatBubble}>
        <Ionicons name="arrow-forward-circle" size={40} color="beige" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fdd692', // Light brown background color
    overflow: scroll
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Align items horizontally with space in between
    marginBottom: 20,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  headerButton: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'blue', // Change the color of the button text
  },
  chatBubble1: {
    backgroundColor: '#754f44', // Slightly darker brown color
    borderRadius: 10,
    marginBottom: 20,
    width: '80%',
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 80,
  },
  chatBubble2: {
    backgroundColor: '#754f44', // Slightly darker brown color
    borderRadius: 10,
    marginBottom: 20,
    width: '80%',
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 80,
  },
  chatBubble3: {
    backgroundColor: '#754f44', // Slightly darker brown color
    borderRadius: 10,
    marginBottom: 20,
    width: '80%',
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 80,
  },
  chatBubble4: {
    backgroundColor: '#754f44', // Slightly darker brown color
    borderRadius: 10,
    marginBottom: 20,
    width: '80%',
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 80,
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
  scrollView: {
    flex: 1,
    marginBottom: 100, 
    overflow: scroll,
  },
});

export default RoccoScreen;*/
