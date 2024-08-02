import React from 'react'
import { View, Button, Modal, StyleSheet, Text, FlatList, Image, TouchableHighlight, TextInput } from 'react-native'
import { useComments } from '../../../store'
import AntIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { InstaData } from '../../../assets/data'

function Comments() {
    const { comments, isOpen, setOpen, setComments } = useComments();
   

    return (
        <Modal animationType="slide" transparent={true}>
            <View style={styles.container}>
                {/* <View style={styles.handle}></View> */}
                <View style={styles.headingContainer}>
                    <TouchableHighlight onPress={() => setOpen()}>
                        <AntIcon name='arrowleft' size={30} color='white' />
                    </TouchableHighlight>

                    <Text style={styles.heading}>Comments</Text>
                </View>
                <FlatList
                    data={InstaData.Comments}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.commentContainer}>
                                <Image source={{
                                    uri: item.profile
                                }}
                                    style={{ width: 40, height: 40, borderRadius: 40, marginVertical: 5 }}
                                />
                                <View style={styles.commentContent}>
                                    <Text >
                                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={styles.commentUsername}>
                                                {item.username}
                                            </Text>
                                            <Text style={{ color: 'grey', fontSize: 13, marginHorizontal: 10 }}>{item.time}</Text>
                                        </View>
                                    </Text>
                                    <Text style={styles.commentMessage}>
                                        {item.comment}
                                    </Text >
                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        gap: 10,
                                        marginTop: 5
                                    }}>
                                        <Text style={styles.grey}>Reply</Text>
                                        <Text style={styles.grey}>See Translation</Text>
                                    </View>
                                    <Text style={{
                                        color: 'grey',
                                        fontSize: 13,
                                        marginLeft: 30,
                                        marginTop: 10
                                    }}>
                                        View {item.replies} more replies
                                    </Text>

                                </View>
                                <View style={{ marginLeft: "auto", paddingVertical: 10 }}>
                                    <AntIcon name='hearto' size={18} color='grey' />
                                    <Text style={styles.grey}>{item.likes}</Text>
                                </View>
                            </View>
                        )
                    }}
                    contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 5 }}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                />
                <View style={styles.inputBox}>
                    <Image source={{
                        uri: 'https://randomuser.me/api/portraits/men/10.jpg'
                    }}
                        style={{
                            height: 50,
                            width: 50,
                            borderRadius: 25
                        }} />
                    <TextInput
                        placeholder='Write a Comment ...'
                        placeholderTextColor='grey'
                        style={styles.input}
                        multiline={true} />
                    <FeatherIcon name='send' size={30} color="white" style={{ marginTop: 10 }} />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        // marginTop: 44,
        // borderTopColor: 'rgba(255, 255, 255, 0.8)',
        // shadowColor: 'rgba(255, 255, 255, 0.8)',
        // borderRadius: 20,
        // borderWidth: 1
    },
    handle: {
        borderWidth: 2,
        borderColor: 'white',
        width: 100,
        alignSelf: 'center',
        margin: 10,
        borderRadius: 20
    },
    headingContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 18,
        borderBottomWidth: 0.5,
        borderColor: 'white'
    },
    heading: {
        // display:'flex',
        color: 'white',
        fontSize: 25,
        left: 80
    },
    commentContainer: {
        //  backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },
    commentUsername: {
        color: 'white',
        fontWeight: '400',
        fontSize: 17,

    },
    commentContent: {
        flex:1,
        color: 'white',
        paddingHorizontal: 10
    },
    commentMessage: {
        flex:1,
        color: 'white',
        fontSize: 15,
    }
    ,
    inputBox: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 7,
        borderTopWidth: 0.5,
        borderColor: 'white',
    },
    input: {
        marginLeft: 2,
        flex: 1,
        color: 'white',
        fontSize: 16,
        maxHeight: 150,
    }
    ,
    separator: {
        height: 20, // Adjust the height as needed for the gap
    },
    grey: {
        color: 'grey',
        fontSize: 13
    }

})

export default Comments
