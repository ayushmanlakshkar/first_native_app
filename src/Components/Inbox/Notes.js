import React from 'react';
import { ScrollView, Image, View, Text } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { InstaData } from '../../assets/data';
function Notes() {
    

    return (
        <View>
            <ScrollView horizontal={true} style={{ alignSelf: 'flex-start' }}>
                {
                    InstaData.Notes.map((item) => {
                        return (
                            <View key={item.username} style={{ alignItems: 'center', marginTop: 10, marginHorizontal: 25 }}>
                                <Image
                                    source={{
                                        uri: item.profilePic
                                    }}
                                    style={{ width: 65, height: 65, borderRadius: 40 }}
                                />
                                <Text style={{ color: "white" }}>{item.username}</Text>
                                <View style={{ position: 'absolute', left: 50, top: -10 }}>
                                    <FeatherIcon name='message-square' size={50} color='white' />
                                </View>
                            </View>
                        );
                    })
                }
            </ScrollView>
        </View>

    );
}

export default Notes;
