import React from 'react';
import { ScrollView, Image, View, Text } from 'react-native';
import { InstaData } from '../../assets/data';
function Stories() {
   
    
    return (
        <ScrollView horizontal={true}>
            {
                InstaData.Stories.map((item) => {
                    return (
                        <View style={{ display: 'flex', alignItems: 'center', margin: 10 }}>
                            <Image
                                source={{
                                    uri: item.profilePic
                                }}
                                style={{ width: 65, height: 65, borderRadius: 40 }}
                            />
                            <Text style={{ color: "white" }}>{item.username}</Text>
                        </View>
                    )
                })
            }


        </ScrollView>
    );
}

export default Stories;
