import React, { useEffect } from 'react';
import { StyleSheet, TextInput, View, TouchableHighlight, Keyboard } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { useSearchOpen } from '../../store';

function SearchUser() {

  const {isKeyboardOpen,setKeyboardStatus}=useSearchOpen()

  const handleUnfocusKeyboard = () => {
    Keyboard.dismiss();
    setKeyboardStatus(false)
  };

  return (
    <View style={styles.searchBar}>
      {isKeyboardOpen?<View style={styles.unfocusKeyboard}>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={handleUnfocusKeyboard}
        >
          <AntIcon name='arrowleft' size={30} color='white' />
        </TouchableHighlight>
      </View>:null}
      
      <View style={styles.textInputContainer}>
        <View style={styles.icon}>
          <FeatherIcon name='search' size={22} color='grey' />
        </View>
        <TextInput
          placeholder='Search'
          placeholderTextColor='grey'
          style={styles.input}
          multiline={false}
          onFocus={()=>setKeyboardStatus(true)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    height: 60,
    backgroundColor: 'black',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  textInputContainer: {
    backgroundColor: '#2C2D2F',
    flex: 1,
    borderRadius: 10,
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
  },
  input: {
    fontSize: 18,
    flex: 1,
    color: 'white',
    marginRight: 10,
    height: 40,
    paddingVertical: 0
  },
  icon: {
    paddingTop: 9,
    paddingLeft: 13,
    paddingRight: 5
  },
  unfocusKeyboard: {

  }
});

export default SearchUser;
