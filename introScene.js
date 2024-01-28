import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const intro = () => {
    document.addEventListener('DOMContentLoaded', function() {
        // Get the text box element
        var textBox = document.getElementById('textBox');
    
        // Add event listener for tap or click event
        textBox.addEventListener('click', function() {
            // Move the text box off-screen
            textBox.style.bottom = '-100px'; // or any value that moves it off-screen
        });
    
        // Add event listener for Enter key press
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                // Move the text box off-screen
                textBox.style.bottom = '-100px'; // or any value that moves it off-screen
            }
        });
    });
    
}

function generateHTML() {
    // Create main container element
    const container = document.createElement('div');
    container.classList.add('container');

    // Create background element
    const background = document.createElement('div');
    background.classList.add('background');
    container.appendChild(background);

    // Create content container
    const content = document.createElement('div');
    content.classList.add('content');
    container.appendChild(content);

    // Create text box element
    const textBox = document.createElement('div');
    textBox.classList.add('text-box');
    textBox.id = 'textBox'; // Set id for reference
    content.appendChild(textBox);

    // Create heading element
    const heading = document.createElement('h2');
    heading.textContent = 'Your Text Here';
    textBox.appendChild(heading);

    // Create main image element
    const mainImage = document.createElement('div');
    mainImage.classList.add('main-image');
    content.appendChild(mainImage);

    // Create image element
    const image = document.createElement('img');
    image.src = 'path/to/main-image.jpg';
    image.alt = 'Main Image';
    mainImage.appendChild(image);

    // Append container to the document body
    document.body.appendChild(container);
}

// Call the function to generate HTML structure
generateHTML();

  

const styles = {
    container: {
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url(\'path/to/background-image.jpg\')',
        backgroundSize: 'cover',
        zIndex: -1,
    },
    content: {
        position: 'relative',
        zIndex: 1,
        padding: '20px',
    },
    textBox: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '20px',
    },
    mainImage: {
        maxWidth: '100%',
        height: 'auto',
        display: 'block',
        margin: '0 auto',
    },
    '@media (min-width: 768px)': {
        container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
    },
};

export default styles;
