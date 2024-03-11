import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import MainScreen from './main'; // Import MainScreen component

const TimerScreen = () => {
    const [countdown, setCountdown] = useState(20); // Initial countdown value
    const navigation = useNavigation(); // Get the navigation object

    useEffect(() => {
        const timer = setInterval(() => {
            if (countdown > 0) {
                setCountdown(prevCountdown => prevCountdown - 1);
            }
        }, 1000);

        // Clear the interval when the component unmounts
        return () => clearInterval(timer);
    }, [countdown]);

    const handleNextMessage = () => {
        // Navigate to another screen when the button is pressed
        navigation.navigate('Main');
    };

    return (
        <View style={styles.container}>
            {/* Countdown Timer */}
            <Text style={styles.timer}>{countdown}</Text>

            {/* Image */}
            <Image source={require('./images/working.png')} style={styles.image} />

            {/* Button */}
            <TouchableOpacity
                style={styles.button}
                onPress={handleNextMessage}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#Db9c7d',
    },
    timer: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'rgb(100, 100, 140)',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default TimerScreen;
