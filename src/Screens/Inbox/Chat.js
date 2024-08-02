import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatureIcon from 'react-native-vector-icons/Feather';
import MessageScreen from '../../Components/Inbox/Chat/MessageScreen';

function Chat() {
  const [message, setMessage] = useState('');

  return (
    <View style={styles.container}>
      <View style={{flex:1}}>
      <MessageScreen/>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.cameraContainer}>
          <AwesomeIcon name='camera' size={25} color='white' />
        </View>
        <TextInput
          value={message}
          placeholder='Message ... '
          placeholderTextColor="grey"
          multiline={true}
          style={styles.input}
          onChangeText={(text) => setMessage(text)}
        />
        {message ? <View style={styles.cameraContainer}>
          <MaterialIcon name='send' size={25} color='white' />
        </View>
          :
          <View style={{ display: 'flex', flexDirection: "row", gap: 12, marginRight: 10 }}>
            <View>
              <FeatureIcon name='mic' size={25} color="white" />
            </View>
            <View>
              <AwesomeIcon name='photo' size={25} color='white' />
            </View>
            <View>
              <MaterialIcon name='sticker-emoji' size={25} color='white' />
            </View>
          </View>
        }

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1
  },
  
  inputContainer: {
    // position:"absolute",
    position: "fixed",
    bottom: 0,
    backgroundColor: "rgb(38,38,38)",
    width: "100%",
    borderRadius: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 7,
    paddingVertical: 7
  },

  cameraContainer: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 25,
    
  },
  input: {
    color: "white",
    marginHorizontal: 5,
    fontSize: 16,
    flex: 1,
    maxHeight: 110
  }
})

export default Chat
