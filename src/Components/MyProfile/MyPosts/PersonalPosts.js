import React from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { InstaData } from '../../../assets/data';

const screenWidth = Dimensions.get('window').width;
const numColumns = 3;
const itemWidth = screenWidth / numColumns;

function PersonalPosts() {
    
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.6}>
                <Image
                    source={{ uri: item.picture }}
                    style={styles.item} // Set aspect ratio to 1 for square images
                />
            </TouchableOpacity>
        );
    };

    return (
        <View style={{}}>
            {/* {data.map((item)=>{
renderItem({item})
            })} */}
            <FlatList
                data={InstaData.PersonalPosts}
                renderItem={renderItem}
                keyExtractor={(item) => item.postId.toString()}
                numColumns={numColumns}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        width: itemWidth,
        height:itemWidth,
        margin: 1,
    },
})
export default PersonalPosts
