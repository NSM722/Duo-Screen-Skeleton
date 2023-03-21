import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

const myImage = require('./assets/img.jpg')

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <View style={styles.container}>
      <Text>My First React Native App</Text>
      <Text style={{ fontSize: 18, textTransform: 'uppercase', letterSpacing: 1.2, fontStyle: 'italic' }}>Hi, I am Natalie</Text>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>I am a Frontend Developer</Text>
      <Text>
        The quick brown fox jumps over the lazy dog
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Interdum velit euismod in pellentesque massa.
      </Text>
      <View style={{ flexDirection: 'row', padding: 10 }}>
        <Image
          source={myImage}
          style={{
            width: 125,
            height: 125,
            marginRight: 4
          }}
        />
        <Image
          source={{ uri: 'https://picsum.photos/id/237/125' }}
          style={{
            width: 125,
            height: 125,
            marginLeft: 4
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: "purple",
          borderRadius: 25,
          marginTop: 15,
          width: 33,
          height: 33,
        }}
      ></View>
      <Button
        title="PRESS ME"
        color="#060047"
        accessible={true}
        accessibilityLabel='Press me to count'
        accessibilityHint='The count will increment by 1'
        // onPress={() => Alert.alert('Button pressed')}
        onPress={() => setCount(count + 1)}
        disabled={count > 2 && true}
      />
      <Text>
        {
          count === 0 ? `You haven't pressed the button!`
            : `You pressed ${count} ${count > 1 ? 'Times' : 'Time'}`
        }
      </Text>
      <StatusBar
        style="auto"
        backgroundColor="#1E90FF"
        barStyle="light-content"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'pink',
    alignItems: 'center',
    color: 'yellow',
    justifyContent: 'space-evenly',
    fontWeight: 'bold',
    fontSize: 60,
  },
});
