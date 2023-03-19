import React, { useEffect } from "react";
import { View, StyleSheet, Text, Image, } from "react-native";
import GlobalStyle from '../Constants/GlobalStyles';
import PushNotification from "react-native-push-notification";


export default function Splashscreen({ navigation }) {

  useEffect(() => {
    createChannels();
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, []);

  const createChannels = () => {
    PushNotification.createChannel({
      channelId: "task-channel",
      channelName: "Task Channel"
    }
    )
  }

  return (
    <View style={styles.body} >
      <Image
        style={styles.logo}
        source={require('../Assets/Images/checklist.png')} />
      <Text
        style={[GlobalStyle.CustomFontBig, styles.text]}> To-Do List </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0080ff',
  },

  logo: {
    width: 200,
    height: 200,
    margin: 20,
  },

  text: {
    fontSize: 40,
    color: '#ffffff',
  },

})