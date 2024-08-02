// import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useImageToPost } from '../../store';


function Gallery() {
    const [data, setData] = useState([]);
    const {PostImage, setPostImage } = useImageToPost();

    // useEffect(() => {
    //     CameraRoll.getPhotos({
    //         first: 12
    //     })
    //         .then(r => {
    //             setData(r.edges);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, []);



    const openGallery = async () => {
        launchImageLibrary({}, (response) => {
          if (!response.didCancel) {
            // Set the selected image to the store
            setPostImage(response.assets[0].uri);
          }
        });
      };

      const openCamera = async () => {
        launchCamera({}, (response) => {
          if (!response.didCancel) {
            // Set the selected image to the store
            setPostImage(response.assets[0].uri);
          }
        });
      };


    return (
        <View style={{ backgroundColor: "black" }}>
            <View style={{ display: 'flex', justifyContent: "space-between",flexDirection:"row" }}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={openGallery}>

                    <View style={{ width: "100%", display: "flex", padding: 10 }}>
                        <Text style={{ color: "#007AFF", fontSize: 20, fontWeight: "bold" }}>View All</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={openCamera}>
                    <View style={{ width: "100%", display: "flex", padding: 10 }}>
                        <Text style={{ color: "#007AFF", fontSize: 20, fontWeight: "bold" }}>Take Now</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                            setPostImage(item.node.image.uri);
                        }}>
                        <View style={{ backgroundColor: "black", margin: 1 }}>
                            <Image
                                source={{ uri: item.node.image.uri }}
                                style={{ width: 100, height: 100 }}
                            />
                        </View>
                        </TouchableOpacity>
                    )
                }}
                numColumns={4}
                keyExtractor={(item, index) => index}
            />

        </View>
    );
}

export default Gallery;
