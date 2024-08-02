import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { FlatList, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useChatting } from '../../store';
import { formatTime } from '../../utils/formatTime';
import { InstaData } from '../../assets/data';
function Chats() {
    const navigation = useNavigation();
    const {chattingWith,setChattingWith} = useChatting();

    const startChatting=async (user)=>{
      setChattingWith(user)
      navigation.push("Chat")
    }


    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={{ color: 'white', fontWeight: 'bolder', fontSize: 20 }}>
                    Messages
                </Text>
                <Text style={{ fontWeight: 'bolder', color: '#007AFF', fontSize: 18 }}>
                    Requests
                </Text>
            </View>
            <FlatList
                data={InstaData.ChatUsers}
                renderItem={({ item }) => {
                    const formattedTime = formatTime(item.time);
                    return (
                        <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={()=>startChatting(item)}>
                            <View style={styles.chat}>
                                <View style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Image source={{
                                        uri: item.profilePic
                                    }}
                                        style={{ height: 54, width: 54, borderRadius: 30 }} />
                                </View>
                                <View style={styles.detailContainer}>
                                    <View>
                                        <Text style={styles.username}>
                                            {item.username}
                                        </Text>
                                    </View>

                                    <View style={styles.messageDetail}>
                                        <Text style={styles.message} numberOfLines={1}>
                                            {item.lastMessage}
                                        </Text>
                                        <Text style={styles.time}>
                                            {formattedTime}
                                        </Text>
                                    </View>

                                </View >


                                <View style={styles.photo}>
                                    <FeatherIcon name='camera' size={28} color='white' />
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item) => item.id}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10
    },
    heading: {
        marginVertical: 20,
        paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    chat: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10
    },
    username: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold'
    },
    detailContainer: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    messageDetail: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    message: {
        color: 'grey',
        fontSize: 15,
        width: 130,
        marginRight: 20
    },
    time: {
        color: 'grey',
        fontSize: 15
    },
    photo: {
        display: 'flex',
        justifyContent: 'center',
        borderWidth: 1,
        marginLeft: 'auto',

    }
})

export default Chats
