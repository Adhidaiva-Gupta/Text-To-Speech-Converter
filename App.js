import * as React from 'react';
import { Text, 
View, 
StyleSheet,
Button,
TextInput,
TouchableOpacity, 
Image,
ExpoFont
 } from 'react-native';
 import * as Speech from 'expo-speech';
 import{ Header } from 'react-native-elements'

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      name: ''
    }
  }

  speak = () => {
    var thingToSay = this.state.name;
    Speech.speak(thingToSay);

    this.state.name === ''
    ?alert("Please enter some text")
    :Speech.speak(thingToSay);
  }

render(){
  return(
<View style={styles.textContainer1}>
    <Header
    backgroundColor={'#ff8516'}
    centerComponent={{
      text: 'Text to Speech Converter',
      style: { color: 'black', fontSize: 15, fontWeight: 700 },
    }}
    />

     <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://img.utdstc.com/icons/voice-to-text-text-to-speech-android.png:225',
          }}
        />

    <Text style={styles.text2}> Enter the Text </Text>

    <TextInput
    style={styles.inputBox}
    onChangeText = {(text) => {
      this.setState({name : text})
    }}
    value={this.state.text}
    />

    <View>
     <TouchableOpacity style={styles.button} onPress={this.speak}>
      <Text style={styles.text2}> Click here to listen to the speech </Text>
     </TouchableOpacity>
    </View>
  </View>
  );
}
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  textContainer1: {
    backgroundColor: 'beige',
    flex: 1,
    justifyContent: 'center',
  },

  text2: {
    color: 'coral',
    fontSize: 20,
    textAlign: 'center',
    fontStyle: 'bold',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  button: {
    padding: 20,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'yellow',
    marginTop: 80,
    borderRadius: 50,
    width: '80%',
    alignSelf: 'center',
    height: 80,
    marginBottom: 30
  },
  imageIcon: {
    width: 80,
    height: 150,
    marginLeft: 75,

  },
});
