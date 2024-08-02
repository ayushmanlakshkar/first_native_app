import React from 'react'
import { View, Dimensions, Image } from 'react-native'
import { useImageToPost } from '../../store';

const { height, width } = Dimensions.get('window');

function Editor() {
    const { PostImage } = useImageToPost();

    return (
        <View style={{ width: width, aspectRatio: 1, backgroundColor: "lightgrey" }}>
            {PostImage && 
                <Image 
                    source={{ uri: PostImage }} 
                    style={{ width: '100%', height: '100%', resizeMode: 'contain' }} 
                />
            }
        </View>
    )
}

export default Editor
