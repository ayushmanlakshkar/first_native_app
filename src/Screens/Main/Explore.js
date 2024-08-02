import React from 'react'
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import SearchUser from '../../Components/Explore/SearchUser'
import ExplorePosts from '../../Components/Explore/ExplorePosts'
import { useSearchOpen } from '../../store';
import ExploreUsers from '../../Components/Explore/ExploreUsers';

function Explore() {
  const {isKeyboardOpen,setKeyboardStatus}=useSearchOpen()

  return (
    <View style={styles.container}>
      <SearchUser />
      {isKeyboardOpen?<ExploreUsers/>:<ExplorePosts/>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%'
  }
})
export default Explore
