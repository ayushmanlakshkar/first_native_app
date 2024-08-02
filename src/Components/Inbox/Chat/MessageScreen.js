import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Message from './Message';
import { InstaData } from '../../../assets/data';
function MessageScreen() {
  

  return (
    <View style={styles.messagesScreen}>
      <FlatList
        data={InstaData.Messages}
        renderItem={({ item, index }) => <Message message={item} previousMessage={index > 0 ? InstaData.Messages[index - 1] : null}/>}
        inverted // Reverse rendering order
      />
    </View>
  );
}

const styles = StyleSheet.create({
  messagesScreen: {
    flex: 1,
    paddingHorizontal:5
  },
});

export default MessageScreen;
