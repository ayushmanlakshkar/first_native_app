import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import Notes from '../../Components/Inbox/Notes'
import Chats from '../../Components/Inbox/Chats'
import { ScrollView } from 'react-native-gesture-handler'

function Inbox({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView>
            <Notes />
            <Chats/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    }
})

export default Inbox
