import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { InstaData } from '../../assets/data';
import { useExplorePostOpen } from '../../store';
import { useNavigation } from '@react-navigation/native';
const screenWidth = Dimensions.get('window').width;
const numColumns = 3;
const itemWidth = screenWidth / numColumns;
console.log(screenWidth)

function ExplorePosts() {
 const{setExplorePost}=useExplorePostOpen();
const navigate=useNavigation()
 const goToPost=(item)=>{
  setExplorePost(item)
  navigate.push('ExplorePost')
 }

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
      activeOpacity={0.6}
      onPress={()=>goToPost(item)}>
        <Image
          source={{ uri: item.picture }}
          style={[styles.item, { aspectRatio: 1 }]} // Set aspect ratio to 1 for square images
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={InstaData.ExplorePosts}
        renderItem={renderItem}
        keyExtractor={(item) => item.postId.toString()}
        numColumns={numColumns}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: itemWidth,
    margin: 1.5,
  },
});

export default ExplorePosts;
