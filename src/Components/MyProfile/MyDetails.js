import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useUserDetails } from '../../store'

function MyDetails() {
    const { userDetails } = useUserDetails();
    return (
        <View style={styles.container}>
            <View style={styles.detailsContainer}>
                <View style={styles.profilePic}>
                    <Image
                        source={{
                            uri: userDetails.profilePic
                        }}
                        style={{ height: "100%", borderRadius: 50 }} />
                </View>
                <View style={styles.reachDetails}>
                    <View>
                        <View style={{ alignItems: "center" }}>
                            <Text style={styles.Number}>{userDetails.posts}</Text>
                        </View>
                        <Text style={styles.numberIndex}>Posts</Text>
                    </View>
                    <View>
                        <View style={{alignItems: "center" }}>
                            <Text style={styles.Number}>{userDetails.followers}</Text>
                        </View>
                        <Text style={{fontSize:15,color:"white"}}>Followers</Text>
                    </View>
                    <View>
                        <View style={{alignItems: "center" }}>
                            <Text style={styles.Number}>{userDetails.following}</Text>
                        </View>
                        <Text style={{fontSize:15,color:"white"}}>Following</Text>
                    </View>
                </View>
            </View>
            <View style={styles.bioContainer}>
                <Text style={{color:"white",fontSize:16,fontWeight:"bold"}}>{userDetails.name}</Text>
                {userDetails.bio.map((bio, index) => (
                    <Text key={index} style={{color:"white",fontSize:15}}>{bio}</Text>
                ))}
            </View>
            <View style={styles.optionsContainer}>
                <View style={styles.optionButton}>
                    <Text style={{color:"white",fontSize:15}}>Edit Profile</Text>
                </View>
                <View style={styles.optionButton}>
                    <Text style={styles.optionText}>Share Profile</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 250,
        backgroundColor: "black" 
    },
    detailsContainer: {
        flexDirection: "row",
        paddingTop: 20,
        paddingBottom:10,
        paddingHorizontal: 10,
        gap: 20
    },
    profilePic: {
        height: 100,
        width: 100,
        borderRadius: 50,
        backgroundColor: "red"
    },
    reachDetails: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    Number: {
        fontSize:17,
        fontWeight:"900",
        color:"white"
    },
    numberIndex:{
        fontSize:15,
        color:"white"
    },
    bioContainer: {
paddingLeft:10
    },
    optionsContainer: {
      display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        gap:17,
        paddingTop:14,
        paddingHorizontal:10
    },
    optionButton: {
        backgroundColor: "#2C2D2F",
        borderRadius: 5,
        flex:1,
        paddingVertical:5,
alignItems: "center",
    },
    optionText:{
        color:"white",
        fontSize:15,
        fontWeight:"bold"
    }
})

export default MyDetails
