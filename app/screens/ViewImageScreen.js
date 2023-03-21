import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <Image 
        resizeMode='cover'
        style={styles.image}
        source={require('../assets/chair.jpg')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
  }
})

export default ViewImageScreen;