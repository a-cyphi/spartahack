import { StatusBar, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.background}>
      <StatusBar style="auto"/>
      <Image source={require('./images/citybg.png')}/>
      {/* Add icons container */}
      <View style={styles.iconsContainer}>
        {/* Add icons here */}
      </View>
      {/* Add XP bar */}
      <View style={styles.xpBar}>
        <StatusBar style="auto"/>
      <Image source={require('./images/xpbar.png')}/>
      </View>
      {/* Add Money bar */}
      <View style={styles.moneyBar}>
      <StatusBar style="auto"/>
      <Image source={require('./images/xpbar.png')}/>
      </View>
      {/* Add Level bar */}
      <View style={styles.levelBar}>
      <StatusBar style="auto"/>
      <Image source={require('./images/logo.png')}/>
      </View>
    </View>
  );
}

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Rocco" component={RoccoScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

const styles = StyleSheet.create({
  background: {
    top: 0,
    left: 0,
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: .9,
  },
  iconsContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  xpBar: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    width: '100%',
    height: 20,
    backgroundColor: '#ddd',
  },
  moneyBar: {
    position: 'absolute',
    top: 10,
    left: 20,
    width: 150,
    height: 10,
    backgroundColor: '#00FF00',
  },
  levelBar: {
    position: 'absolute',
    top: 10,
    right: 20,
    width: 50,
    height: 10,
    backgroundColor: '#0000FF',
  },
  button: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
export default MainScreen;