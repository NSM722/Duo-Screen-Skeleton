import React from 'react';
import { ImageBackground, Image, StyleSheet, View, Text, Button } from 'react-native';

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground 
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      {/* Site Logo */}
      <View style={styles.logoWrapper}>
        <Image 
          style={styles.logo}
          source={require('../assets/logo-red.png')} />
        <Text style={styles.text}>Sell What You Don't Need</Text>
        <Text style={styles.text}>Check out the next page</Text>
        <Button
          title="View Items"
          onPress={() => navigation.navigate('View Image')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    // the bg image will take up the entire space
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  logo: {
    width: 100,
    height: 100,
  },
  logoWrapper: {
    position: 'absolute',
    top: 70,
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
})

export default WelcomeScreen;