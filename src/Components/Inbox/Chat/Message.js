import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useUserDetails } from '../../../store'

function Message({ message, previousMessage }) {
    
    const isSameUser = previousMessage && message.username === previousMessage.username;
    const { userDetails } = useUserDetails()

    return (
        <View style={[styles.messageContainer,
        message.username === userDetails.username ? { justifyContent: "flex-end" } : null,
       {marginBottom:isSameUser?2:10}]}>
            {
                message.username !== userDetails.username ?
                    <View style={{ display: "flex", justifyContent: "flex-end" }}>
                        <Image source={{
                            uri: message.profilePic
                        }}
                            style={styles.profilePic} />
                    </View> : null

            }
            <View style={[styles.message, message.username === userDetails.username ? { backgroundColor: "#007AFF" } : { backgroundColor: "rgb(38,38,38)" }]}>
                <Text style={{ color: "white" }}>{message.message}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    messageContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 5
    },
    profilePic: {
        width: 30,
        height: 30,
        borderRadius: 15
    },
    message: {
        maxWidth: "50%",
        backgroundColor: "white",
        paddingHorizontal: 8,
        paddingVertical: 7,
        borderRadius: 10,
    }
})

export default Message
