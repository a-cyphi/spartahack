import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import MainScreen from './in-game-screen';
import HomeScreen from './App';

const Intro = () => {
    const navigation = useNavigation();
    const [messages, setMessages] = useState([
        'Hey! You! Yes, you! Are you just going to stand by and watch that adorable tabby cat starve?',
        "You think you can just waltz in and snag that cat? Not so fast. We ain't giving away freebies. You gotta prove you can handle it. Show us you're not just another stray yourself.",
        "Got cash? Got experience keeping critters alive? Then maybe we'll talk about you giving this furball a shot at a better life. Until then, keep your paws off unless you're serious."
    ]);
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < messages[currentMessageIndex].length) {
                setTypedText(messages[currentMessageIndex].substring(0, index + 1));
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 50); // Adjust typing speed as needed

        return () => clearInterval(typingInterval);
    }, [messages, currentMessageIndex]);

    const goToMainScreen = () => {
        navigation.navigate('Main'); // Navigate to the Main screen
      };

    const handleNextMessage = () => {
        if (currentMessageIndex < messages.length - 1) {
            setCurrentMessageIndex(prevIndex => prevIndex + 1);
            setTypedText('');
        } else{
            goToMainScreen();

        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('./images/roccobg.png')} style={styles.background} />
            <View style={styles.content}>
                <Image source={require('./images/rocco.png')} style={styles.roccoImage} />
                <View style={styles.textBox}>
                    <Text style={styles.text}>{typedText}</Text>
                    <TouchableOpacity style={styles.nextButtonContainer} onPress={handleNextMessage}>
                        <Text style={styles.nextButtonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.9,
    },
    content: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 20,
    },
    roccoImage: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    textBox: {
        backgroundColor: 'rgba(152, 152, 191, 0.8)',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        position: 'relative',
        marginBottom: 20,
        minHeight: '25%',
        width: '80%,'
    },
    text: {
        fontSize: 20,
        textAlign: 'left',
        color: 'white',
    },
    nextButtonContainer: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        backgroundColor: 'rgb(100, 100, 140)',
        padding: 5,
        borderRadius: 5,
    },
    nextButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default Intro;